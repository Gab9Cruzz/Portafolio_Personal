import type { L10n } from './types'

export interface Project {
  id: string
  /** Número de tarjeta (001, 002…) */
  number: string
  title: L10n
  description: L10n
  stack: string[]
  /** Estado opcional: solo se rellena si es un dato real. */
  status?: 'inProgress' | 'professional'
  repo?: string
  demo?: string
}

const GH = 'https://github.com/Gab9Cruzz'

export const projects: Project[] = [
  {
    id: 'cybersecurity',
    number: '001',
    title: { es: 'Ciberseguridad', en: 'Cybersecurity' },
    description: {
      es: 'Google Cybersecurity Professional Certificate (2026), cursos de Cisco Networking Academy y un reto práctico de 30 días de seguridad ofensiva y defensiva en laboratorios propios y plataformas autorizadas.',
      en: 'Google Cybersecurity Professional Certificate (2026), Cisco Networking Academy courses and a hands-on 30-day offensive and defensive security challenge run in my own labs and authorized platforms.',
    },
    stack: ['Kali Linux', 'Burp Suite', 'Nmap', 'OWASP Juice Shop', 'DVWA', 'NIST'],
    status: 'inProgress',
    repo: `${GH}/ciberseguridad-30-dias`,
  },
  {
    id: 'network-monitoring',
    number: '002',
    title: { es: 'Monitoreo de redes', en: 'Network monitoring' },
    description: {
      es: 'Experiencia en monitoreo proactivo vía SNMP con Zabbix, visualización en Grafana y administración de enlaces SD-WAN en FortiGate. Se describen solo tecnologías y tipo de trabajo.',
      en: 'Experience with proactive SNMP monitoring in Zabbix, Grafana visualization and SD-WAN link administration on FortiGate. Only technologies and type of work are described.',
    },
    stack: ['Zabbix', 'SNMP', 'Grafana', 'FortiGate', 'SD-WAN'],
    status: 'professional',
  },
  {
    id: 'us-open',
    number: '003',
    title: { es: 'Predicción del US Open', en: 'US Open prediction' },
    description: {
      es: 'Simulación Monte Carlo del cuadro de 128 jugadores validada con más de 2.000 partidos reales, con control de fuga de datos, 130+ pruebas automatizadas y un dashboard público actualizado a diario.',
      en: 'Monte Carlo simulation of the 128-player draw validated against 2,000+ real matches, with data-leakage control, 130+ automated tests and a public dashboard updated daily.',
    },
    stack: ['Python', 'SQLite', 'GitHub Actions', 'Chart.js'],
    repo: `${GH}/UsOpen_Prediction`,
    demo: 'https://gab9cruzz.github.io/UsOpen_Prediction/',
  },
  {
    id: 'premier-league',
    number: '004',
    title: { es: 'Predicción de la Premier League', en: 'Premier League prediction' },
    description: {
      es: 'Modelo estadístico Dixon–Coles (Poisson bivariado) sobre una base propia de ~24.000 partidos: 53,4% de acierto en un backtest de 9.368 partidos, frente a 54,3% del mercado.',
      en: 'Dixon–Coles statistical model (bivariate Poisson) on a self-built database of ~24,000 matches: 53.4% accuracy in a 9,368-match backtest, versus 54.3% for the market.',
    },
    stack: ['Python', 'SQLite', 'SciPy', 'NumPy'],
    repo: `${GH}/Predecir_Partido_Premier`,
  },
  {
    id: 'score-app',
    number: '005',
    title: { es: 'Score-App', en: 'Score-App' },
    description: {
      es: 'Aplicación web de gestión de torneos con autenticación JWT, despliegue en contenedores e integridad de datos mediante triggers en la base de datos.',
      en: 'Tournament management web app with JWT authentication, container-based deployment and data integrity enforced through database triggers.',
    },
    stack: ['FastAPI', 'PostgreSQL', 'React', 'Docker'],
    repo: `${GH}/SCORE_APP`,
  },
  {
    id: 'bingo',
    number: '006',
    title: { es: 'Bingo familiar', en: 'Family bingo' },
    description: {
      es: 'Aplicación de escritorio para montar y jugar bingos de 75 bolas en familia: cartones, rondas y plantillas imprimibles.',
      en: 'Desktop app to set up and play 75-ball bingo with family: cards, rounds and printable templates.',
    },
    stack: ['Python 3.12', 'PySide6', 'SQLite'],
    repo: `${GH}/Bingo_Juego`,
  },
]
