import { useState, type FormEvent } from 'react'
import { CONTACT_EMAIL } from '../../data/profile'
import { useI18n } from '../../i18n/context'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const field =
  'mt-1.5 w-full rounded-md border border-line bg-bg px-3 py-2.5 text-fg placeholder:text-muted/70 focus-visible:border-accent'

/** Formulario simple: arma un mailto hacia CONTACT_EMAIL (sin servicios de terceros). */
export function ContactForm() {
  const { t } = useI18n()
  const [errors, setErrors] = useState<Errors>({})

  const configured = CONTACT_EMAIL.trim() !== ''

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const next: Errors = {}
    if (!name) next.name = t('contact.errors.name')
    if (!EMAIL_RE.test(email)) next.email = t('contact.errors.email')
    if (message.length < 10) next.message = t('contact.errors.message')
    setErrors(next)
    if (Object.keys(next).length || !configured) return

    const body = `${message}\n\n— ${name} (${email})`
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      t('contact.subject'),
    )}&body=${encodeURIComponent(body)}`
    window.location.href = href
  }

  const describedBy = (key: keyof Errors) => (errors[key] ? `err-${key}` : undefined)

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="cf-name" className="text-sm font-semibold">
          {t('contact.name')}
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedBy('name')}
          className={field}
        />
        {errors.name && (
          <p id="err-name" role="alert" className="mt-1 text-sm text-accent">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-email" className="text-sm font-semibold">
          {t('contact.email')}
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedBy('email')}
          className={field}
        />
        {errors.email && (
          <p id="err-email" role="alert" className="mt-1 text-sm text-accent">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-message" className="text-sm font-semibold">
          {t('contact.message')}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy('message')}
          className={field}
        />
        {errors.message && (
          <p id="err-message" role="alert" className="mt-1 text-sm text-accent">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-all hover:bg-navy hover:shadow-lg hover:shadow-primary/30"
      >
        {t('contact.send')}
      </button>

      <p className="text-sm text-muted">
        {configured ? t('contact.hint') : t('contact.notConfigured')}
      </p>
    </form>
  )
}
