import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'

import PageTransition from './components/shared/PageTransition'
import Navbar from './components/shared/Navbar'
import Home from './pages/Home'
import Work from './pages/Work'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './components/shared/Footer'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'


const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/work/:projectId" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    // ThemeProvider wraps everything — context available to ALL children
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />

      </BrowserRouter>
    </ThemeProvider>
  )
}
