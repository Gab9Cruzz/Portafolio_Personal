# PLAN — Gabriel Cruz Portfolio

Portafolio personal para postular a puestos de ciberseguridad y redes TI.
Sitio final: `https://gab9cruzz.github.io/Portafolio_Personal/`

> **Cambio acordado:** el repositorio es `Gab9Cruzz/Portafolio_Personal` (en lugar de `portfolio`), por lo que
> la URL final es `https://gab9cruzz.github.io/Portafolio_Personal/` y el `base` de Vite es `/Portafolio_Personal/`.
> Los commits usan el correo noreply de GitHub para no publicar el correo personal.

## Reglas de trabajo

- Se ejecuta **una etapa a la vez**, solo cuando Gabriel dice "ejecuta la etapa N".
- Al terminar cada etapa: cómo probarla, mensaje de commit propuesto (Conventional Commits) y casilla marcada aquí.
- No se avanza a la siguiente etapa sin confirmación.
- El CV manda sobre cualquier otro dato. Si falta algo, se pregunta o se deja como `TODO`; no se inventa nada.
- **Confidencialidad**: de Banco Guayaquil solo se nombran tecnologías y tipo de trabajo. Nada de IPs, hosts, capturas, topologías ni datos internos.
- **Datos personales**: ni teléfono ni correo real en el sitio. El correo es la variable `CONTACT_EMAIL`.
- Sin logos, escudos ni marcas oficiales de clubes, ligas o la NBA. Nada copiado del sitio de referencia.

## Stack

- React + Vite + TypeScript + Tailwind CSS v4 (tokens en `@theme`).
- Framer Motion, respetando `prefers-reduced-motion`.
- i18n propio (provider pequeño, sin librería): ES por defecto, EN opcional.
- Iconos como SVG en línea. Fuentes autoalojadas en WOFF2.
- ESLint + Prettier.
- GitHub Pages con GitHub Actions; `base: '/Portafolio_Personal/'`.

## Diseño

### Referencia (portfolio.aktham.net)

| Se toma | Se cambia u omite |
|---|---|
| Nav fija con wordmark y drawer móvil | Sin pantalla de "boot" inicial |
| Hero de dos columnas: texto y panel lateral, sin foto | Sin cursor personalizado ni mini-juego |
| Subtítulo estilo código, CTAs, badge "disponible" | El panel tipo terminal pasa a ser una ficha técnica |
| Tarjetas de proyecto numeradas con chips y estado | Menos secciones y menos densidad |
| Timeline vertical | Se presenta como "Temporadas" |
| Skills con etiqueta de nivel, no barras de porcentaje | Se añade ES/EN y contenido en `src/data/` |
| Reveal al hacer scroll, tema claro/oscuro, copiar correo | Rojo sustituido por la paleta azul |

### Tokens de color

| Token | Valor | Uso |
|---|---|---|
| `ink` | `#0B0F17` | Fondo base |
| `midnight` | `#0B0B4F` | Superficies oscuras: tarjetas, secciones alternas, gradiente del hero |
| `navy` | `#002B5E` | Bordes, gradientes y hover de superficies |
| `royal` | `#00538C` | Primario: botones y rellenos (con texto claro) |
| `sky` | `#5AA9E6` | Enlaces y acentos de texto sobre fondo oscuro |
| `silver` | `#B8C4CA` | Texto secundario |
| `snow` | `#F5F7FA` | Texto principal |

`royal` no se usa como texto sobre fondos oscuros (aprox. 2.4:1 sobre `ink`); para eso está `sky`
(aprox. 7.5:1 sobre `ink` y 7:1 sobre `midnight`). Todos los pares se verifican con
`scripts/check-contrast.mjs` en la etapa 1. Modo claro: fondo `snow`, texto `ink`, acento `royal`.

### Tipografía

- **Barlow Condensed**: titulares, etiquetas y cifras del marcador.
- **Inter**: cuerpo.
- **JetBrains Mono**: etiquetas técnicas.

### Animaciones

Reveals cortos al entrar en pantalla, conteo de cifras en el scoreboard, hover sutil en tarjetas y
línea del timeline que se dibuja. Con `prefers-reduced-motion` todo aparece sin movimiento.

### Toque deportivo

- Scoreboard con dígitos condensados y separadores tipo marcador.
- Experiencia como temporadas ("Temporada 2026/27").
- Líneas de cancha de fútbol en SVG al 4–6 % de opacidad detrás del scoreboard.
- Un "77" discreto como dorsal en la ficha del hero.

## Estructura

```
.github/workflows/deploy.yml
public/            favicon.svg, og-image.webp, cv-gabriel-cruz.pdf, robots.txt, sitemap.xml
scripts/           check-contrast.mjs
src/
  data/            profile.ts, experience.ts, projects.ts, skills.ts, education.ts, scoreboard.ts, types.ts
  i18n/            es.json, en.json, I18nProvider.tsx
  theme/           ThemeProvider.tsx
  components/
    layout/        Navbar, MobileDrawer, Footer, Section, SkipLink
    ui/            Button, Chip, Card, LangSwitch, ThemeToggle, Reveal, icons
    sections/      Hero, PlayerCard, About, Scoreboard, Seasons, Projects, ProjectCard,
                   Skills, Credentials, Contact, ContactForm
  App.tsx, main.tsx, index.css
PLAN.md, README.md, LICENSE, .gitignore
```

Los textos de interfaz van en `src/i18n/*.json`. El contenido editable va en `src/data/` con campos `{ es, en }`.

## Contenido

### 1. Hero

- Nombre: Gabriel Cruz.
- Rol: "Cybersecurity & Networking | Sistemas Inteligentes".
- Frase (propuesta, por aprobar en la etapa 3): "Seguridad, redes y automatización."
- Botones: CV, GitHub (`https://github.com/Gab9Cruzz`), LinkedIn (`https://www.linkedin.com/in/gabrielcruzleon/`).
- Ficha lateral: rol actual, base (Guayaquil), foco, disponibilidad, dorsal 77. Sin foto, igual que la referencia.

### 2. Sobre mí

Estudiante de último semestre de Ingeniería en Sistemas Inteligentes (ECOTEC), con experiencia en
operaciones de TI, redes y seguridad. Gestión de identidades y
accesos, seguridad perimetral, monitoreo y respuesta a incidentes; automatización con Python,
PowerShell y Power Automate. Guayaquil, Ecuador. Español nativo, inglés B1.

### 3. Scoreboard

| Cifra | Etiqueta | Origen |
|---|---|---|
| 1.000+ | Tickets resueltos en un año | Grupo Transoceánica |
| ~100 | Identidades gestionadas | Grupo Transoceánica |
| ~2 TB | Migrados a SharePoint | Grupo Transoceánica |
| 3 | Roles en TI | CV |

### 4. Experiencia (Temporadas)

| Temporada | Cargo | Empresa |
|---|---|---|
| Oct. 2026 – actualidad | Pasante de Redes TI (IT Networking Intern) | Banco Guayaquil |
| Ago. 2025 – jul. 2026 | Pasante de Operaciones IT | Grupo Transoceánica |
| May. 2024 – nov. 2024 | Auxiliar de Sistemas | FHMG |

Las viñetas de cada cargo salen del CV. Las de Banco Guayaquil se mantienen genéricas.

### 5. Proyectos (6 tarjetas)

| # | Proyecto | Stack | Descripción | Enlaces |
|---|---|---|---|---|
| 001 | Ciberseguridad | Kali, Burp Suite, Nmap, OWASP Juice Shop | Google Cybersecurity Professional Certificate, cursos de Cisco NetAcad y reto de 30 días. Estado: **En progreso** | Repo `ciberseguridad-30-dias` |
| 002 | Monitoreo de redes | Zabbix, SNMP, Grafana, SD-WAN FortiGate | Monitoreo proactivo y enlaces SD-WAN. Solo tecnologías y tipo de trabajo | Sin repo |
| 003 | Predicción del US Open | Python, SQLite, GitHub Actions | Simulación Monte Carlo validada con más de 2.000 partidos reales, 130+ pruebas automatizadas y dashboard actualizado a diario | Repo `UsOpen_Prediction` · Demo `https://gab9cruzz.github.io/UsOpen_Prediction/` |
| 004 | Predicción de la Premier League | Python, SQLite, SciPy | Modelo Dixon–Coles sobre ~24.000 partidos; 53,4 % de acierto en un backtest de 9.368 partidos | Repo `Predecir_Partido_Premier` |
| 005 | Score-App | FastAPI, PostgreSQL, React, Docker | Gestión de torneos con autenticación JWT, contenedores e integridad de datos mediante triggers | Repo `SCORE_APP` |
| 006 | Bingo familiar | Python 3.12, PySide6, SQLite | App de escritorio para bingos de 75 bolas en familia: cartones, rondas y plantillas imprimibles | Repo `Bingo_Juego` |

### 6. Skills

- **Ciberseguridad**: IAM (Entra ID, Active Directory, MFA, acceso condicional), Microsoft Defender, análisis de vulnerabilidades, respuesta a incidentes, NIST.
- **Redes**: FortiGate, Sophos, VLANs, SD-WAN, Windows Server (AD, DHCP).
- **Monitoreo**: Zabbix, SNMP, Grafana, revisión de logs.
- **Programación**: Python, PowerShell, SQL, C#/.NET.
- **Herramientas**: Power Automate, Microsoft Graph API, Power BI, Docker, Linux, GitHub Actions, Microsoft 365.

### 7. Certificaciones y educación

- **Universidad ECOTEC** — Ingeniería en Sistemas Inteligentes, último semestre. Graduación prevista: ago. 2027.
- **Google Cybersecurity Professional Certificate** (Google, 2026).
- **Cisco Networking Academy** (2025–2026): Introduction to Cybersecurity, Networking Devices and Initial Configuration, Networking Basics, Linux Unhatched.
- **Otros**: Cyber Diplomacy (UNODA – ONU, 2026), AI Prompt Engineering (Dubai Future Foundation, 2025), Cybersecurity Awareness (CertJoin, 2025), Power BI (LinkedIn, 2025), Lean Six Sigma White Belt (2025).

### 8. Contacto

Enlaces a LinkedIn y GitHub, y formulario `mailto` que usa `CONTACT_EMAIL`.

### 9. Footer

Wordmark, navegación, enlaces sociales y año.

## Pendientes de Gabriel

- [ ] `CONTACT_EMAIL` en `src/data/profile.ts`.
- [ ] CV público sin teléfono ni correo (`public/cv-gabriel-cruz.pdf`). Se intenta generar en la etapa 3.
- [ ] URL de las credenciales (Google, Cisco y otros): quedan como `TODO`.
- [ ] Aprobar la frase del hero.
- [ ] Foto de perfil (opcional; el diseño no la necesita).

## Etapas

- [x] **Etapa 1 — Base del proyecto**
  - Objetivo: Vite + React + TS, Tailwind con los tokens, ESLint/Prettier, fuentes, git, `.gitignore`, licencia MIT, README inicial, `base: '/Portafolio_Personal/'`.
  - Archivos: configs, `index.html`, `src/index.css`, `src/main.tsx`, `src/App.tsx`, `scripts/check-contrast.mjs`.
  - Verificación: `npm run dev`, `npm run build` y `npm run lint` sin errores; `npm run check:contrast` pasa.

- [x] **Etapa 2 — Datos, i18n y tema**
  - Objetivo: todo el contenido en `src/data/`, traducciones ES/EN, selector de idioma y de tema con persistencia.
  - Archivos: `src/data/*`, `src/i18n/*`, `src/theme/ThemeProvider.tsx`, `LangSwitch`, `ThemeToggle`.
  - Verificación: cambiar idioma y tema, recargar y ver que persisten; `tsc` limpio.

- [x] **Etapa 3 — Layout y Hero**
  - Objetivo: navegación, drawer móvil, skip link, hero con ficha lateral y CV público.
  - Archivos: `components/layout/*`, `components/ui/*`, `Hero`, `PlayerCard`, `public/cv-gabriel-cruz.pdf`.
  - Verificación: 360, 768 y 1440 px; navegación con Tab; el PDF público no contiene teléfono ni correo.

- [x] **Etapa 4 — Sobre mí, Scoreboard y Temporadas**
  - Objetivo: resumen profesional, marcador con las 4 cifras y timeline de 3 temporadas.
  - Archivos: `About`, `Scoreboard`, `Seasons`.
  - Verificación: cifras iguales a `src/data/`; el timeline se lee bien en móvil.

- [x] **Etapa 5 — Proyectos, Skills y Certificaciones**
  - Objetivo: 6 tarjetas de proyecto, skills agrupadas, certificaciones y educación.
  - Archivos: `Projects`, `ProjectCard`, `Skills`, `Credentials`.
  - Verificación: enlaces a repos y demo correctos; ningún dato interno en la tarjeta de redes.

- [x] **Etapa 6 — Contacto y Footer**
  - Objetivo: enlaces, formulario `mailto` con validación y footer.
  - Archivos: `Contact`, `ContactForm`, `Footer`.
  - Verificación: validación del formulario; el `mailto` abre con asunto y cuerpo.

- [x] **Etapa 7 — Pulido: animaciones, accesibilidad, SEO y rendimiento**
  - Objetivo: reveals y conteos, reduced-motion, patrón de cancha, meta tags, Open Graph, favicon, `sitemap.xml`, `robots.txt`.
  - Archivos: `Reveal`, secciones, `index.html`, `public/*`.
  - Verificación: Lighthouse ≥ 90 en las 4 categorías sobre `npm run preview`; recorrido completo con teclado.

- [ ] **Etapa 8 — Despliegue y cierre**
  - Objetivo: workflow de Actions, README final, repo público `Portafolio_Personal` en `Gab9Cruzz`, push a `main`, GitHub Pages y resumen final.
  - Archivos: `.github/workflows/deploy.yml`, `README.md`.
  - Verificación: el workflow termina en verde y `https://gab9cruzz.github.io/Portafolio_Personal/` carga.

## Entregables finales

- Proyecto completo en local y en el repo `portfolio`.
- Sitio desplegado en GitHub Pages.
- Resumen final: URL, lista de placeholders por reemplazar y 3 mejoras para una siguiente versión.
