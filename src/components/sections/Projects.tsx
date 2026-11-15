import { projects, type Project } from '../../data/projects'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { Chip } from '../ui/Chip'
import { Reveal } from '../ui/Reveal'
import { ArrowUpRightIcon, GithubIcon } from '../ui/icons'

function ProjectCard({ project }: { project: Project }) {
  const { t, l } = useI18n()
  const linkClass =
    'inline-flex items-center gap-1.5 rounded text-sm font-semibold text-accent hover:underline underline-offset-4'

  return (
    <article className="group flex h-full flex-col rounded-xl border border-line bg-surface/70 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-black/20 sm:p-6">
      <header className="flex items-start justify-between gap-3">
        <span className="font-mono text-sm text-muted">{project.number}</span>
        {project.status && (
          <span className="rounded-full border border-sky/50 px-2.5 py-0.5 font-mono text-[0.7rem] tracking-wide text-accent uppercase">
            {t(`projects.status.${project.status}`)}
          </span>
        )}
      </header>

      <h3 className="mt-3 font-display text-2xl font-semibold tracking-wide uppercase">
        {l(project.title)}
      </h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">
        {l(project.description)}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
        {project.stack.map((tech) => (
          <li key={tech}>
            <Chip>{tech}</Chip>
          </li>
        ))}
      </ul>

      {(project.repo || project.demo) && (
        <footer className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
          {project.repo && (
            <a href={project.repo} className={linkClass} target="_blank" rel="noopener noreferrer">
              <GithubIcon /> {t('projects.repo')}
              <span className="sr-only">
                {' '}
                — {l(project.title)} {t('a11y.external')}
              </span>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className={linkClass} target="_blank" rel="noopener noreferrer">
              <ArrowUpRightIcon /> {t('projects.demo')}
              <span className="sr-only">
                {' '}
                — {l(project.title)} {t('a11y.external')}
              </span>
            </a>
          )}
        </footer>
      )}
    </article>
  )
}

export function Projects() {
  const { t } = useI18n()

  return (
    <Section
      id="projects"
      eyebrow={t('sections.projects.eyebrow')}
      title={t('sections.projects.title')}
      intro={t('projects.intro')}
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <li key={p.id}>
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
