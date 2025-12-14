import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import Portfolio from './pages/Portfolio'
import PortfolioDetails from './pages/PortfolioDetails'
import SmoothCursor from './components/SmoothCursor'

function App() {
  const lenisRef = useRef(null)
  const { pathname } = useLocation()

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    window.lenis = lenisRef.current

    function raf(time) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisRef.current?.destroy()
      window.lenis = null
    }
  }, [])

  // Scroll to top when route changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <SmoothCursor />
      <Routes>
        {/* Portfolio Details - Outside Layout for full-screen experience */}
        <Route path="portfolio/:slug" element={<PortfolioDetails />} />
        
        {/* All other routes with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="quote" element={<Quote />} />
          <Route path="careers" element={<Careers />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
