import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <img src="/Final-Printolution/img/Main logo.png" alt="Printolution - Serving Your Concept to Reality" className="logo-img" />
            </Link>
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`} id="nav">
              <ul className="nav-list">
                <li><Link to="/" className={`nav-link ${isActive('/') && location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link></li>
                <li><Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link></li>
                <li><Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}>Portfolio</Link></li>
                <li><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link></li>
                <li><Link to="/careers" className={`nav-link ${isActive('/careers') ? 'active' : ''}`}>Careers</Link></li>
              </ul>
            </nav>
            <Link to="/quote" className="btn btn-primary">Get a Quote</Link>
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
              id="hamburger" 
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && <div className="nav-overlay active" onClick={() => setIsMenuOpen(false)}></div>}
    </>
  )
}

export default Header
