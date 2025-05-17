# 🌎 ViveMedellín - Conecta con Personas y Comunidades

ViveMedellín es una plataforma para conectar personas y comunidades en Medellín, permitiendo a los usuarios explorar, crear y unirse a grupos con intereses comunes. El proyecto incluye funcionalidades para crear cuentas, iniciar sesión, publicar contenido, recibir notificaciones y descubrir grupos destacados.

---

## 📚 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Frontend](#frontend)
   - [Tecnologías Utilizadas](#tecnologías-utilizadas)
   - [Estructura del Proyecto](#estructura-del-proyecto)
   - [Rutas Implementadas](#rutas-implementadas)
   - [Componentes Reutilizables](#componentes-reutilizables)
3. [Backend](#backend) _(En Desarrollo)_
4. [Contribuciones](#contribuciones)
5. [Licencia](#licencia)

---

## 📖 Introducción

ViveMedellín es una plataforma diseñada para unir personas con intereses similares, promover nuevas amistades y fortalecer las comunidades locales. Permite a los usuarios crear y explorar grupos, publicar contenido y recibir notificaciones sobre las actividades más recientes en sus grupos favoritos.

---

## 🎨 Frontend

El frontend del proyecto está desarrollado con **Next.js 13**, **React**, **Tailwind CSS** y **TypeScript**, usando el nuevo sistema de rutas basado en **App Router** para mejorar el rendimiento y la organización del código.

### 🚀 Tecnologías Utilizadas

- **Next.js 13** - Framework de React para aplicaciones rápidas y escalables.
- **React** - Biblioteca de JavaScript para crear interfaces de usuario.
- **Tailwind CSS** - Framework de utilidades para diseñar rápidamente.
- **TypeScript** - Superconjunto de JavaScript que añade tipado estático.
- **Vercel** - Plataforma para el despliegue rápido de aplicaciones.

---

### 📁 Estructura del Proyecto

src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx # Página Principal (/)
│ ├── not-found.tsx # Página 404
│ ├── groups/
│ │ ├── create/
│ │ │ └── page.tsx # /groups/create
│ │ ├── featured/
│ │ │ └── page.tsx # /groups/featured
│ │ └── [id]/
│ │ ├── page.tsx # /groups/[id]
│ │ ├── join/
│ │ │ └── page.tsx # /groups/[id]/join
│ │ ├── publish/
│ │ │ └── page.tsx # /groups/[id]/publish
│ │ └── posts/
│ │ └── page.tsx # /groups/[id]/posts
│ │
│ └── notifications/
│ └── page.tsx # /notifications
│ └── about/
│ └── page.tsx # /about
│ └── auth/
│ ├── login/
│ │ └── page.tsx # /auth/login
│ └── register/
│ └── page.tsx # /auth/register
│
├── components/
│ ├── Navbar.tsx
│ ├── Footer.tsx
│ └── Button.tsx
│
├── styles/
│ └── globals.css
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── tsconfig.json
└── README.md

---

### 📝 Rutas Implementadas

- **Página Principal (`/`)** - Explora grupos disponibles.
- **Crear Nuevo Grupo (`/groups/create`)** - Permite a los usuarios crear nuevos grupos.
- **Grupos Destacados (`/groups/featured`)** - Muestra los grupos más populares.
- **Detalle de un Grupo (`/groups/[id]`)** - Muestra información detallada del grupo.
- **Unirse a un Grupo (`/groups/[id]/join`)** - Permite a los usuarios unirse a un grupo.
- **Publicar en un Grupo (`/groups/[id]/publish`)** - Permite a los usuarios publicar contenido en un grupo.
- **Ver Publicaciones de un Grupo (`/groups/[id]/posts`)** - Muestra todas las publicaciones de un grupo.
- **Ver Notificaciones (`/notifications`)** - Muestra las notificaciones relevantes para el usuario.
- **Página 404 (`/404`)** - Muestra un mensaje cuando un usuario intenta acceder a una página que no existe.
- **Página Acerca de (`/about`)** - Explica el propósito de ViveMedellín.
- **Autenticación (`/auth/login` y `/auth/register`)** - Permite a los usuarios crear cuentas e iniciar sesión.

---

### 📦 Componentes Reutilizables

- **Navbar** - Barra de navegación superior con enlaces a las páginas principales.
- **Footer** - Pie de página con derechos reservados.
- **Botón Genérico** - Botón reutilizable para acciones en toda la plataforma.

---

## 🛠️ Backend _(En Desarrollo)_

La implementación del backend se hará en futuras versiones para manejar la lógica del servidor, autenticación, almacenamiento de datos y manejo de sesiones.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas colaborar, por favor:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube los cambios (`git push origin feature/nueva-funcionalidad`).
5. Crea un **Pull Request**.

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT** - consulta el archivo **LICENSE** para más detalles.

---
