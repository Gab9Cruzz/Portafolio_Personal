import type { L10n } from './types'

export interface Experience {
  id: string
  company: string
  location: string
  role: L10n
  /** Formato AAAA-MM */
  start: string
  /** Formato AAAA-MM; null = actualidad */
  end: string | null
  bullets: L10n[]
}

// Fuente: CV. De Banco Guayaquil solo se describen tecnologías y tipo de trabajo (nada interno).
export const experience: Experience[] = [
  {
    id: 'banco-guayaquil',
    company: 'Banco Guayaquil',
    location: 'Guayaquil, Ecuador',
    role: {
      es: 'Pasante de Redes TI (IT Networking Intern)',
      en: 'IT Networking Intern',
    },
    start: '2026-10',
    end: null,
    bullets: [
      {
        es: 'Administro reglas y políticas de firewall y segmentación de red mediante VLANs, aplicando el principio de mínimo privilegio en la infraestructura de una entidad financiera.',
        en: 'I manage firewall rules and policies and network segmentation using VLANs, applying the principle of least privilege on a financial institution’s infrastructure.',
      },
      {
        es: 'Monitoreo la red y reviso logs para detectar eventos anómalos y escalar posibles incidentes de seguridad.',
        en: 'I monitor the network and review logs to detect anomalous events and escalate potential security incidents.',
      },
      {
        es: 'Ejecuto cambios de configuración de red, gestiono accesos de red y atiendo tickets de conectividad.',
        en: 'I carry out network configuration changes, manage network access and handle connectivity tickets.',
      },
    ],
  },
  {
    id: 'grupo-transoceanica',
    company: 'Grupo Transoceánica',
    location: 'Guayaquil, Ecuador',
    role: {
      es: 'Pasante de Operaciones IT',
      en: 'IT Operations Intern',
    },
    start: '2025-08',
    end: '2026-07',
    bullets: [
      {
        es: 'Gestioné identidades y accesos de ~100 usuarios en Microsoft 365, Entra ID y Active Directory: altas y bajas, revisión periódica de permisos, MFA y políticas de acceso condicional.',
        en: 'Managed identities and access for ~100 users across Microsoft 365, Entra ID and Active Directory: onboarding and offboarding, periodic permission reviews, MFA and conditional access policies.',
      },
      {
        es: 'Atendí incidentes de phishing con Microsoft Defender, ejecuté escaneos de vulnerabilidades y gestioné respaldos.',
        en: 'Handled phishing incidents with Microsoft Defender, ran vulnerability scans and managed backups.',
      },
      {
        es: 'Administré firewalls FortiGate y Sophos y configuré monitoreo proactivo vía SNMP con Zabbix.',
        en: 'Administered FortiGate and Sophos firewalls and set up proactive SNMP monitoring with Zabbix.',
      },
      {
        es: 'Resolví más de 1.000 tickets en un año y automaticé flujos con Power Automate y Microsoft Graph API, ahorrando ~30 minutos de gestión por ticket.',
        en: 'Resolved over 1,000 tickets in a year and automated workflows with Power Automate and Microsoft Graph API, saving ~30 minutes of handling time per ticket.',
      },
      {
        es: 'Participé en la migración de ~2 TB a SharePoint, desarrollé dashboards en Power BI y apoyé integraciones con SAP y CargoWise.',
        en: 'Took part in a ~2 TB migration to SharePoint, built Power BI dashboards and supported SAP and CargoWise integrations.',
      },
    ],
  },
  {
    id: 'fhmg',
    company: 'FHMG',
    location: 'Guayaquil, Ecuador',
    role: {
      es: 'Auxiliar de Sistemas',
      en: 'Systems Assistant',
    },
    start: '2024-05',
    end: '2024-11',
    bullets: [
      {
        es: 'Desarrollé un prototipo de sistema de inventarios en C#/.NET con SQL Server, reduciendo en 30% los tiempos de gestión.',
        en: 'Built an inventory system prototype in C#/.NET with SQL Server, cutting handling times by 30%.',
      },
      {
        es: 'Configuré Windows Server (Active Directory, DHCP) en laboratorio para ~50 usuarios y di soporte a ~20 equipos.',
        en: 'Configured Windows Server (Active Directory, DHCP) in a lab for ~50 users and supported ~20 workstations.',
      },
    ],
  },
]
