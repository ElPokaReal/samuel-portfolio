# 💼 Portafolio Personal - Samuel Aranguren

Portafolio web moderno y responsive construido con React, TypeScript y Vite. Presenta mis proyectos, experiencia y habilidades como desarrollador web.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

## 🌟 Características

- ✨ **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 🌓 **Modo Oscuro**: Tema oscuro por defecto con soporte para modo claro
- 🌐 **Bilingüe**: Soporte completo para español e inglés
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- ⚡ **Rendimiento**: Optimizado con Vite para carga rápida
- 🎨 **Animaciones**: Efectos de typewriter y transiciones fluidas
- 🎯 **SEO Friendly**: Metadata optimizada para motores de búsqueda

## 🛠️ Stack Tecnológico

### Frontend
- **React 19.1** - Biblioteca de UI
- **TypeScript 5.9** - Tipado estático
- **Vite 7.1** - Build tool y dev server
- **Tailwind CSS 4.1** - Framework de estilos
- **Framer Motion** - Animaciones

### Herramientas
- **Lucide React** - Iconos SVG
- **ESLint** - Linting de código
- **GitHub Pages** - Hosting

## 📂 Estructura del Proyecto

```
samuel-portfolio/
├── public/                    # Archivos estáticos
│   ├── agrotrujillo.webp
│   ├── ephemeris.webp
│   ├── inventariozona.webp
│   ├── profile.webp
│   ├── tuconexion.webp
│   └── samuel-aranguren-cv.pdf
├── src/
│   ├── components/           # Componentes React
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── OtherProjects.tsx
│   │   ├── Projects.tsx
│   │   └── TypewriterEffect.tsx
│   ├── contexts/            # Context API
│   │   └── LanguageContext.tsx
│   ├── data/                # Datos estáticos
│   │   └── projectLinks.ts
│   ├── hooks/               # Custom hooks
│   │   └── useSmoothScroll.ts
│   ├── i18n/                # Internacionalización
│   │   └── translations.ts
│   ├── lib/                 # Utilidades
│   │   └── utils.ts
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globales
├── vite.config.ts           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ o Bun
- Git

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ElPokaReal/samuel-portfolio.git
   cd samuel-portfolio
   ```

2. **Instalar dependencias**
   ```bash
   # Con npm
   npm install

   # Con bun
   bun install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   # Con npm
   npm run dev

   # Con bun
   bun run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo
bun run dev

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Preview de la build de producción

# Linting
npm run lint         # Ejecuta ESLint

# Deploy
npm run deploy       # Despliega a GitHub Pages
```

## 🎨 Personalización

### Colores del Tema

Los colores están definidos en `src/index.css`:

```css
:root {
  --background-light: #f8fafc;
  --background-dark: #0a192f;
  --text-light: #1e293b;
  --text-dark: #e2e8f0;
  --primary: #64ffda;
  --accent: #fbbf24;
  --slate-gray: #94a3b8;
}
```

### Agregar Proyectos

Edita `src/data/projectLinks.ts`:

```typescript
export const projectData: ProjectData[] = [
  {
    technologies: ['React', 'Node.js'],
    image: '/samuel-portfolio/tu-imagen.webp',
    github: 'https://github.com/usuario/repo',
    live: 'https://tu-demo.com',
  },
];
```

Y actualiza las traducciones en `src/i18n/translations.ts`.

### Cambiar Idioma

El idioma se puede cambiar desde el header. Los textos están en `src/i18n/translations.ts`.

## 🌐 Deploy

### GitHub Pages

El proyecto está configurado para desplegarse en GitHub Pages:

1. **Configurar el repositorio**
   - Ve a Settings → Pages
   - Source: GitHub Actions

2. **Deploy automático**
   ```bash
   npm run deploy
   ```

3. **Acceder al sitio**
   ```
   https://elpokareal.github.io/samuel-portfolio/
   ```

### Otros Servicios

- **Vercel**: Importa el repositorio y despliega automáticamente
- **Netlify**: Conecta el repositorio y configura el build command: `npm run build`
- **Cloudflare Pages**: Similar a Vercel/Netlify

## 🔧 Configuración de Vite

El proyecto usa `base: '/samuel-portfolio'` en `vite.config.ts` para GitHub Pages. Si usas otro hosting, cámbialo a `'/'`:

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Para Vercel, Netlify, etc.
})
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usar este código para tu propio portafolio.

## 👤 Autor

**Samuel Aranguren**

- GitHub: [@ElPokaReal](https://github.com/ElPokaReal)
- Portfolio: [elpokareal.github.io/samuel-portfolio](https://elpokareal.github.io/samuel-portfolio/)

## 🙏 Agradecimientos

- Diseño inspirado en portfolios modernos de desarrolladores
- Iconos de [Lucide](https://lucide.dev/)
- Fuentes de [Google Fonts](https://fonts.google.com/)

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!
