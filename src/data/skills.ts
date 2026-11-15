import type { L10n } from './types'

/** Un nombre propio (string) o un texto traducible. */
export type Skill = string | L10n

export interface SkillGroup {
  id: string
  title: L10n
  items: Skill[]
}

// Fuente: CV, más GitHub Actions (visto en proyectos) y Grafana/SD-WAN (confirmados por Gabriel).
export const skillGroups: SkillGroup[] = [
  {
    id: 'security',
    title: { es: 'Ciberseguridad', en: 'Cybersecurity' },
    items: [
      'IAM',
      'Entra ID',
      'Active Directory',
      'MFA',
      { es: 'Acceso condicional', en: 'Conditional access' },
      'Microsoft Defender',
      { es: 'Análisis de vulnerabilidades', en: 'Vulnerability analysis' },
      { es: 'Respuesta a incidentes', en: 'Incident response' },
      'NIST',
    ],
  },
  {
    id: 'networking',
    title: { es: 'Redes', en: 'Networking' },
    items: ['FortiGate', 'Sophos', 'VLANs', 'SD-WAN', 'Windows Server', 'DHCP', 'Linux'],
  },
  {
    id: 'monitoring',
    title: { es: 'Monitoreo', en: 'Monitoring' },
    items: ['Zabbix', 'SNMP', 'Grafana', { es: 'Revisión de logs', en: 'Log review' }],
  },
  {
    id: 'programming',
    title: { es: 'Programación', en: 'Programming' },
    items: ['Python', 'PowerShell', 'SQL', 'C#/.NET'],
  },
  {
    id: 'tools',
    title: { es: 'Herramientas', en: 'Tools' },
    items: [
      'Power Automate',
      'Microsoft Graph API',
      'Power BI',
      'Microsoft 365',
      'Docker',
      'GitHub Actions',
    ],
  },
]
