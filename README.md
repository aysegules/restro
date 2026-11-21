<div>
<h1 align="center">Restro</h1>
    <div align="center">
        <img src="https://img.shields.io/badge/-React-FFFFFF?style=for-the-badge&logo=React&logoColor=61DAFB" alt="React" />
        <img src="https://img.shields.io/badge/-Vite-FFFFFF?style=for-the-badge&logo=Vite&logoColor=9135FF" alt="Vite" />
        <img src="https://img.shields.io/badge/-React Router-FFFFFF?style=for-the-badge&logo=React Router&logoColor=CA4245" alt="React Router" />
        <img src="https://img.shields.io/badge/-Lenis-FFFFFF?style=for-the-badge&logo=Npm&logoColor=CB3837" alt="Vite" />
        <img src="https://img.shields.io/badge/-Motion-FFFFFF?style=for-the-badge&logo=Npm&logoColor=CB3837" alt="Motion" />
        <img src="https://img.shields.io/badge/-TailwindCss-FFFFFF?style=for-the-badge&logo=TailwindCss&logoColor=06B6D4" alt="TailwindCss" />
        <img src="https://img.shields.io/badge/-Leaflet-FFFFFF?style=for-the-badge&logo=Leaflet&logoColor=199900" alt="Leaflet" />
        <img src="https://img.shields.io/badge/-Lucide-FFFFFF?style=for-the-badge&logo=Lucide&logoColor=F56565" alt="Lucide" />
        <img src="https://img.shields.io/badge/-ESLint-FFFFFF?style=for-the-badge&logo=ESLint&logoColor=4B32C3" alt="ESLint" />
    </div>
</div>

## Introduction

Restro is a responsive restaurant website built with React and Vite. It presents the restaurant brand, menu highlights, dining features, reservation process, opening hours, testimonials, FAQs, and location map in a polished single-page experience.

## Features

- Responsive desktop and mobile navigation
- Full-screen restaurant hero section
- About and service information
- Featured dish menu with prices
- Three-step reservation overview
- Restaurant opening hours
- Customer testimonials and ratings
- Expandable FAQ section
- Social links, contact details, and footer navigation
- Interactive Leaflet location map at `/map`
- Smooth scrolling and motion effects

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/)
- [Lenis](https://github.com/darkroomengineering/lenis)
- [Leaflet](https://leafletjs.com/) and [React Leaflet](https://react-leaflet.js.org/)
- [Lucide React](https://lucide.dev/)
- [ESLint](https://eslint.org/)

## Project Structure

```text
restro/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/          # Images and branding files
│   │   ├── components/      # Page sections and reusable UI
│   │   ├── config/          # Application route configuration
│   │   ├── data/            # Menu, FAQ, testimonials, and content data
│   │   ├── pages/           # Top-level pages
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aysegules/restro.git
   cd restro/client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite in your browser.

## Available Scripts

Run these commands from the `client` directory:

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Starts the Vite development server   |
| `npm run build`   | Creates a production build in `dist` |
| `npm run preview` | Serves the production build locally  |
| `npm run lint`    | Runs ESLint across the project       |

## Routes

| Path   | Description                                             |
| ------ | ------------------------------------------------------- |
| `/`    | Main restaurant landing page                            |
| `/map` | Interactive map displaying a sample restaurant location |

## Customization

- Update page content and menu data in `client/src/data/data.jsx`.
- Replace images and branding assets in `client/src/assets/`.
- Modify page sections in `client/src/components/` and `client/src/pages/Home.jsx`.
- Update navigation and route behavior in `client/src/config/RouterConfig.jsx`.
- Adjust global styles and Tailwind settings in `client/src/index.css` and `client/vite.config.js`.

The map currently uses the London coordinates `51.505, -0.09` and OpenStreetMap tiles. Update the position and map tile provider in `client/src/components/Map.jsx` for a real location.

## Production Build

```bash
cd client
npm run build
npm run preview
```

The optimized build is generated in `client/dist`.
