# Interactive 3D Developer Portfolio

A highly interactive, cinematic portfolio website designed to showcase projects, skills, and professional experience through immersive 3D web graphics and smooth animations. 

Built from the ground up prioritizing performance, visual excellence, and a seamless user experience.

## 🚀 Tech Stack

**Core:**
* **[React 19](https://react.dev/)** - UI Framework
* **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
* **[React Router DOM](https://reactrouter.com/)** - Client-side routing

**3D & Graphics:**
* **[Three.js](https://threejs.org/)** - Core WebGL library
* **[React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber/)** - React reconciler for Three.js
* **[Drei](https://github.com/pmndrs/drei)** - Useful helpers for R3F
* **[React Three Postprocessing](https://docs.pmnd.rs/react-three-postprocessing/)** - Advanced visual effects

**Animations & Styling:**
* **[Framer Motion](https://www.framer.com/motion/)** - Declarative UI animations & page transitions
* **[GSAP](https://gsap.com/)** - High-performance property animations
* **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling

## ✨ Key Features
* **Cinematic 3D Experiences:** Custom models and particle systems (e.g., Gotham Particles, Batarang Model) rendered in real-time.
* **Fluid Page Transitions:** Seamless navigation between Home, About, Work, and Contact pages without hard reloads.
* **Dynamic Theming:** Built-in Dark/Light theme context with complex color palettes.
* **Performance Optimized:** Uses React suspense, lazy loading, and optimized WebGL draw calls.
* **Fully Responsive:** Layouts adapt perfectly from ultra-wide desktops to mobile devices.

## 📂 Project Structure

\`\`\`text
src/
├── components/   # Reusable UI elements (Navbar, Footer, Project Cards)
├── constants/    # Static data (skills, projects, about text)
├── context/      # Global state (ThemeContext)
├── pages/        # Main route views (Home, About, Work, Contact)
├── sections/     # Large page blocks (Hero, ContactCTA, TechStack)
└── main.jsx      # Application entry point
\`\`\`

## 🛠️ Local Development

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/your-repo-name.git
   \`\`\`
2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`
3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open \`http://localhost:5173\` in your browser.

## 🚀 Deployment
This project is configured as a Single Page Application (SPA) and includes a \`vercel.json\` file for seamless deployment on [Vercel](https://vercel.com/).