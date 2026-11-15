import type { L10n } from './types'

/**
 * Correo de contacto del formulario (mailto).
 * TODO: escribe aquí tu correo (por ejemplo 'tu@correo.com'). Se deja vacío a propósito para no
 * publicar ningún dato personal hasta que lo decidas.
 */
export const CONTACT_EMAIL = 'tecnologiag87@gmail.com'

export const profile = {
  name: 'Gabriel Cruz',
  fullName: 'Gabriel Cruz León',
  siteName: 'Gabriel Cruz Portfolio',
  wordmark: 'gabrielcruz.dev',
  initials: 'GC',
  jersey: '77',
  location: 'Guayaquil, Ecuador',
  github: 'https://github.com/Gab9Cruzz',
  linkedin: 'https://www.linkedin.com/in/gabrielcruzleon/',
  /** Ruta relativa a /public. TODO: reemplaza el PDF por tu CV público (sin teléfono ni correo). */
  cvFile: 'cv-gabriel-cruz.pdf',
  /** Foto de perfil (en /public). Reemplázala por otra con el mismo nombre si quieres cambiarla. */
  photo: 'profile.webp',
  photoAlt: {
    es: 'Retrato de Gabriel Cruz con camisa celeste',
    en: 'Portrait of Gabriel Cruz wearing a light blue shirt',
  } satisfies L10n,

  role: {
    es: 'Cybersecurity & Networking | Sistemas Inteligentes',
    en: 'Cybersecurity & Networking | Intelligent Systems',
  } satisfies L10n,

  tagline: {
    es: 'Seguridad, redes y automatización desde el sector financiero.',
    en: 'Security, networking and automation from the financial sector.',
  } satisfies L10n,

  availability: {
    es: 'Abierto a oportunidades en ciberseguridad y redes',
    en: 'Open to cybersecurity and networking opportunities',
  } satisfies L10n,

  /** Párrafos de "Sobre mí" (basados en el perfil profesional del CV). */
  summary: [
    {
      es: 'Estudiante de último semestre de Ingeniería en Sistemas Inteligentes en la Universidad ECOTEC, con experiencia en operaciones de TI, redes y seguridad, actualmente en el sector financiero.',
      en: 'Final-semester Intelligent Systems Engineering student at Universidad ECOTEC, with hands-on experience in IT operations, networking and security, currently working in the financial sector.',
    },
    {
      es: 'He trabajado en gestión de identidades y accesos (Entra ID, Active Directory, MFA), seguridad perimetral (FortiGate, Sophos), monitoreo de eventos y respuesta a incidentes.',
      en: 'I have worked on identity and access management (Entra ID, Active Directory, MFA), perimeter security (FortiGate, Sophos), event monitoring and incident response.',
    },
    {
      es: 'Certificado en Google Cybersecurity, con formación en NIST y gestión de riesgos, y en automatización con Python, PowerShell y Power Automate.',
      en: 'Google Cybersecurity certified, with training in NIST and risk management, and in automation with Python, PowerShell and Power Automate.',
    },
  ] satisfies L10n[],

  /** Datos de la ficha lateral del hero. */
  card: {
    current: {
      es: 'Pasante de Redes TI · Banco Guayaquil',
      en: 'IT Networking Intern · Banco Guayaquil',
    },
    focus: {
      es: 'Ciberseguridad · Redes · Automatización',
      en: 'Cybersecurity · Networking · Automation',
    },
    languages: {
      es: 'Español (nativo) · Inglés (B1)',
      en: 'Spanish (native) · English (B1)',
    },
  },
}
