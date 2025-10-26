# 🎨 Guía de Personalización del Portfolio

Este documento te ayudará a personalizar tu portfolio con tu información personal.

## 📝 Información Personal

### 1. Traducciones y Contenido

Edita el archivo `src/i18n/translations.ts` para actualizar:

#### Hero Section (Sección Principal)
```typescript
hero: {
  greeting: 'Hola, mi nombre es',
  name: 'Tu Nombre Aquí',  // ⬅️ Cambia esto
  tagline: 'Tu tagline aquí',  // ⬅️ Cambia esto
  description: 'Tu descripción aquí',  // ⬅️ Cambia esto
  cta: 'Ponte en contacto',
}
```

#### Header (Navegación)
```typescript
header: {
  cv: 'CV',  // Texto del botón de CV
}
```

#### About (Acerca de mí)
```typescript
about: {
  title: 'Acerca de mí',
  paragraph1: 'Tu primer párrafo',  // ⬅️ Cambia esto
  paragraph2: 'Tu segundo párrafo',  // ⬅️ Cambia esto
  techTitle: 'Tecnologías con las que trabajas',
}
```

#### Projects (Proyectos)
Cada proyecto tiene:
- `title`: Nombre del proyecto
- `description`: Descripción del proyecto
- `technologies`: Array de tecnologías usadas
- `image`: URL de la imagen (puedes usar Unsplash)
- `github`: URL de tu repositorio de GitHub
- `live`: URL del proyecto en vivo

```typescript
{
  title: 'Nombre del Proyecto',
  description: 'Descripción del proyecto',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  image: 'https://images.unsplash.com/photo-...',
  github: 'https://github.com/tu-usuario/tu-repo',
  live: 'https://tu-proyecto.com',
}
```

### 2. Información de Contacto

#### Email
Busca y reemplaza `tu-email@ejemplo.com` en:
- `src/components/Contact.tsx` (línea 20)
- `src/components/Footer.tsx` (línea 29 y 68)

#### Redes Sociales
En `src/components/Header.tsx` y `src/components/Footer.tsx`, actualiza los enlaces:
```typescript
// GitHub
href="https://github.com/tu-usuario"

// LinkedIn
href="https://linkedin.com/in/tu-usuario"

// CV (Google Drive, Dropbox, etc.)
href="https://tu-cv-url.com"
```

### 3. Iniciales del Logo

En `src/components/Header.tsx` (línea 20), cambia:
```typescript
<h2>SD</h2>  // ⬅️ Cambia por tus iniciales
```

### 4. Título y Metadata del Sitio

En `index.html`:
```html
<title>Portfolio de Tu Nombre | Desarrollador Web</title>
<meta name="description" content="Portfolio de Tu Nombre - Desarrollador Web" />
```

### 5. Tecnologías en About

En `src/components/About.tsx` (línea 7-14), actualiza tu stack:
```typescript
const technologies = [
  'JavaScript (ES6+)',
  'React',
  'Node.js',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
];
```

### 6. Footer

En `src/i18n/translations.ts`, actualiza:
```typescript
footer: {
  designed: 'Diseñado y construido por Tu Nombre.',
  inspired: 'Inspirado en el diseño de Brittany Chiang.',
}
```

## 🎨 Personalización de Colores

En `src/index.css`, puedes cambiar los colores del tema:

```css
@theme {
  --color-primary: #5A8DFF;        /* Color principal (azul) */
  --color-accent: #64FFDA;          /* Color de acento (verde agua) */
  --color-background-light: #CCD6F6; /* Fondo modo claro */
  --color-background-dark: #0A192F;  /* Fondo modo oscuro */
  --color-text-light: #0A192F;       /* Texto modo claro */
  --color-text-dark: #CCD6F6;        /* Texto modo oscuro */
  --color-slate-gray: #8892B0;       /* Gris para textos secundarios */
}
```

## 🖼️ Imágenes

### Foto de Perfil
En `src/components/About.tsx` (línea 44), cambia la URL de la imagen:
```typescript
src="https://tu-imagen-url.com"
```

### Imágenes de Proyectos
Puedes usar:
- **Unsplash**: `https://images.unsplash.com/photo-...`
- **Tu propio hosting**: Sube las imágenes a `public/` y usa `/nombre-imagen.jpg`
- **Imgur, Cloudinary, etc.**

## 🚀 Comandos Útiles

```bash
# Desarrollo
bun run dev

# Build para producción
bun run build

# Preview del build
bun run preview
```

## 📱 Cambio de Idioma

El sistema de idiomas está completamente funcional. Solo necesitas:
1. Actualizar las traducciones en español (sección `es`)
2. Actualizar las traducciones en inglés (sección `en`)

El botón de cambio de idioma ya está implementado en el header.

## ✅ Checklist de Personalización

- [ ] Cambiar nombre en Hero
- [ ] Actualizar descripción About
- [ ] Agregar tus proyectos reales
- [ ] Actualizar email de contacto
- [ ] Agregar enlaces de GitHub y LinkedIn
- [ ] Cambiar iniciales del logo
- [ ] Actualizar foto de perfil
- [ ] Actualizar tecnologías
- [ ] Cambiar título del sitio
- [ ] Actualizar footer con tu nombre
- [ ] Agregar URL de tu CV

---

¿Necesitas ayuda? Revisa la documentación de React y Tailwind CSS.
