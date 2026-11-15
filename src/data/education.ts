import type { L10n } from './types'

export const education = {
  school: 'Universidad ECOTEC',
  location: 'Guayaquil, Ecuador',
  degree: {
    es: 'Ingeniería en Sistemas Inteligentes',
    en: 'Intelligent Systems Engineering',
  } satisfies L10n,
  status: {
    es: 'Último semestre en curso',
    en: 'Final semester in progress',
  } satisfies L10n,
  /** Formato AAAA-MM */
  graduation: '2027-08',
}

export interface Certification {
  id: string
  name: string
  issuer: string
  year: string
  featured?: boolean
  /** Temas cubiertos (texto traducible) */
  topics?: L10n
  /** Cursos incluidos, si es un conjunto */
  items?: string[]
  /** TODO: enlace a la credencial verificable (Credly, Google, etc.) */
  url?: string
}

export const certifications: Certification[] = [
  {
    id: 'google-cybersecurity',
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    year: '2026',
    featured: true,
    topics: {
      es: 'Gestión de riesgos y NIST, seguridad de red, amenazas y vulnerabilidades, detección y respuesta a incidentes, automatización con Python.',
      en: 'Risk management and NIST, network security, threats and vulnerabilities, incident detection and response, Python automation.',
    },
    url: 'https://www.credly.com/badges/6a6f1f57-e601-4264-927d-a72cd5881f8d/linked_in_profile',
  },
  {
    id: 'cisco-netacad',
    name: 'Cisco Networking Academy',
    issuer: 'Cisco',
    year: '2025–2026',
    items: [
      'Introduction to Cybersecurity',
      'Networking Devices and Initial Configuration',
      'Networking Basics',
      'Linux Unhatched',
    ],
  },
  { id: 'cyber-diplomacy', name: 'Cyber Diplomacy', issuer: 'UNODA – ONU', year: '2026' },
  {
    id: 'ai-prompt',
    name: 'AI Prompt Engineering',
    issuer: 'Dubai Future Foundation',
    year: '2025',
  },
  { id: 'cyber-awareness', name: 'Cybersecurity Awareness', issuer: 'CertJoin', year: '2025' },
  { id: 'power-bi', name: 'Power BI', issuer: 'LinkedIn', year: '2025' },
  { id: 'lean-six-sigma', name: 'Lean Six Sigma White Belt', issuer: '—', year: '2025' },
]
