# Gabriel Cruz Portfolio

Portafolio personal de **Gabriel Cruz** (Ciberseguridad y Redes · Ingeniería en Sistemas Inteligentes).
Sitio bilingüe ES/EN construido con React, Vite, TypeScript, Tailwind CSS y Framer Motion.

Sitio publicado: <https://gab9cruzz.github.io/portfolio/>

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior (probado con la versión LTS actual)

## Instalar

```bash
npm install
```

## Correr en local

```bash
npm run dev
```

Abre la URL que muestra la terminal (normalmente `http://localhost:5173/portfolio/`).

## Scripts

| Comando                  | Qué hace                                         |
| ------------------------ | ------------------------------------------------ |
| `npm run dev`            | Servidor de desarrollo                           |
| `npm run build`          | Revisa tipos y genera `dist/`                    |
| `npm run preview`        | Sirve el build para probarlo                     |
| `npm run lint`           | ESLint                                           |
| `npm run format`         | Prettier                                         |
| `npm run check:contrast` | Verifica el contraste WCAG AA de la paleta       |
| `npm run assets`         | Regenera la imagen Open Graph y los placeholders |

## Editar el contenido

Todo el contenido vive en `src/data/` y los textos de la interfaz en `src/i18n/`:

- `src/data/profile.ts`: nombre, enlaces y `CONTACT_EMAIL` (**rellénalo con tu correo**).
- `src/data/experience.ts`: cargos (temporadas).
- `src/data/projects.ts`: proyectos, repos y demos.
- `src/data/skills.ts`, `education.ts`, `scoreboard.ts`: habilidades, certificaciones y cifras.
- `src/i18n/es.json` y `en.json`: textos de interfaz.

Los campos con texto usan `{ es, en }`. Lo que falta por completar está marcado como `TODO`.

## Desplegar

El sitio se publica en GitHub Pages con GitHub Actions en cada push a `main`
(`.github/workflows/deploy.yml`). En el repositorio, ve a **Settings → Pages** y elige
**Source: GitHub Actions**. La ruta base de Vite es `/portfolio/` (ver `vite.config.ts`).

## Antes de publicar: cosas por completar

- [ ] `CONTACT_EMAIL` en `src/data/profile.ts` (el formulario avisa que no está configurado mientras esté vacío).
- [ ] Revisar `public/cv-gabriel-cruz.pdf`: es una versión pública del CV sin teléfono ni correo. Reemplázalo cuando actualices tu CV.
- [ ] URL de las credenciales (Google, Cisco, etc.): campo `url` en `src/data/education.ts`.
- [ ] Opcional: foto de perfil (el diseño actual no la necesita).

## Verificaciones de calidad

```bash
npm run lint             # ESLint
npm run check:contrast   # WCAG AA de la paleta
npm run build && npm run preview   # y pasa Lighthouse sobre el build
```

## Licencia

[MIT](LICENSE)
