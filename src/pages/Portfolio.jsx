import { useState, useEffect, useRef } from 'react'
import '../styles/portfolio.css'

function Portfolio() {
  const [activeSection, setActiveSection] = useState('our-clients')
  const sectionRefs = useRef({})
  const logoSectionRef = useRef(null)
  const logoGridRef = useRef(null)

  // Add class to body for footer styling
  useEffect(() => {
    document.body.classList.add('portfolio-active')
    return () => {
      document.body.classList.remove('portfolio-active')
    }
  }, [])

  const sections = [
    { id: 'our-clients', name: 'OUR CLIENTS' },
    { id: 'logo-design', name: 'LOGO DESIGN' },
    { id: 'brochure', name: 'BROCHURE' },
    { id: 'catalogue', name: 'CATALOGUE' },
    { id: 'business-profile', name: 'BUSINESS PROFILE' },
    { id: 'product-label', name: 'PRODUCT LABEL & PACKAGING' },
    { id: 'banner-hoarding', name: 'BANNER & HOARDING' },
    { id: 'magazine', name: 'MAGAZINE' },
    { id: 'newspaper-invitation', name: 'NEWS PAPER & INVITATION' },
    { id: 'ui-ux-website', name: 'UI/UX & WEBSITE' }
  ]

  // Client logos for Our Clients section
  const clientLogos = Array.from({ length: 17 }, (_, i) => `/OUR CLIENT/${i + 1}.png`)

  // Logo brands data with images (using %20 for spaces in URL)
  const logoBrands = [
    { name: 'Samarthya Greens', image: '/img/log%201.png' },
    { name: 'Matli Tea', image: '/img/log%202.png' },
    { name: 'Technocraft', image: '/img/log%203.png' },
    { name: 'Anishi Jewels', image: '/img/log%204.png' },
    { name: 'Sattatav Buildcon', image: '/img/log%205.png' }
  ]

  // Horizontal scroll hijacking for logo section
  useEffect(() => {
    const logoSection = logoSectionRef.current
    const logoGrid = logoGridRef.current
    if (!logoSection || !logoGrid) return

    let ticking = false

    const handleWheel = (e) => {
      if (ticking) return

      const sectionRect = logoSection.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Check if section is in the "active zone" (header visible, section taking most of viewport)
      const sectionTop = sectionRect.top
      const sectionBottom = sectionRect.bottom
      const isInActiveZone = sectionTop <= 120 && sectionBottom > viewportHeight * 0.5

      if (!isInActiveZone) return

      const maxScroll = logoGrid.scrollWidth - logoGrid.clientWidth
      const currentScroll = logoGrid.scrollLeft
      
      // If no horizontal scroll needed, don't hijack
      if (maxScroll <= 0) return

      const isScrollingDown = e.deltaY > 0
      const isScrollingUp = e.deltaY < 0
      const isAtStart = currentScroll <= 2
      const isAtEnd = currentScroll >= maxScroll - 2

      // Hijack scroll only when needed
      if (isScrollingDown && !isAtEnd) {
        e.preventDefault()
        ticking = true
        
        const amount = Math.abs(e.deltaY) * 2
        logoGrid.scrollLeft = Math.min(currentScroll + amount, maxScroll)
        
        requestAnimationFrame(() => { ticking = false })
      } else if (isScrollingUp && !isAtStart) {
        e.preventDefault()
        ticking = true
        
        const amount = Math.abs(e.deltaY) * 2
        logoGrid.scrollLeft = Math.max(currentScroll - amount, 0)
        
        requestAnimationFrame(() => { ticking = false })
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = sectionRefs.current[section.id]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const setSectionRef = (id) => (el) => {
    sectionRefs.current[id] = el
  }

  return (
    <div className="portfolio-page">
      {/* Sidebar Navigation */}
      <aside className="portfolio-sidebar">
        <div className="sidebar-logo">
          <img src={`${import.meta.env.BASE_URL}img/Main logo.png`} alt="Printolution" />
        </div>
        <nav className="sidebar-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`sidebar-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="portfolio-content">
        {/* Our Clients Section */}
        <section
          ref={setSectionRef('our-clients')}
          id="our-clients"
          className="portfolio-section"
        >
          <div className="section-header">
            <h1 className="section-main-title">
              <span className="title-bold">CLIENTS</span> WE ARE PROUD OF
            </h1>
            <p className="section-tagline">Designed With Trust. Delivered With Excellence.</p>
          </div>
          <div className="clients-grid">
            {clientLogos.map((logo, index) => (
              <div key={index} className="client-card">
                <img src={logo} alt={`Client ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Logo Design Section with Horizontal Scroll */}
        <section
          ref={(el) => {
            setSectionRef('logo-design')(el)
            logoSectionRef.current = el
          }}
          id="logo-design"
          className="portfolio-section logo-section-sticky"
        >
          <div className="section-header">
            <h2 className="section-main-title">
              <span className="title-bold">LOGO</span> DESIGN
            </h2>
            <p className="section-tagline">Creating Memorable Brand Identities</p>
          </div>
          <div className="logo-showcase-wrapper">
            <div className="logo-showcase-grid" ref={logoGridRef}>
              {logoBrands.map((brand, i) => (
                <div key={i} className="logo-showcase-card">
                  <img src={brand.image} alt={brand.name} className="showcase-image" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brochure Section */}
        <section
          ref={setSectionRef('brochure')}
          id="brochure"
          className="portfolio-section"
        >
          <div className="section-header">
            <h2 className="section-main-title">
              <span className="title-bold">BROCHURE</span> DESIGN
            </h2>
            <p className="section-tagline">Compelling Print Materials That Convert</p>
          </div>
          <div className="work-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="work-card large">
                <div className="work-placeholder">Brochure {i + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Catalogue Section */}
        <section
          ref={setSectionRef('catalogue')}
          id="catalogue"
          className="portfolio-section"
        >
          <div className="section-header">
            <h2 className="section-main-title">
              <span className="title-bold">CATALOGUE</span> DESIGN
            </h2>
            <p className="section-tagline">Showcase Your Products Beautifully</p>
          </div>
          <div className="work-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="work-card large">
                <div className="work-placeholder">Catalogue {i + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Business Profile Section */}
        <section
          ref={setSectionRef('business-profile')}
          id="business-profile"
          className="portfolio-section"
        >
          <div className="section-header">
            <h2 className="section-main-title">
              <span className="title-bold">BUSINESS</span> PROFILE
            </h2>
            <p className="section-tagline">Professional Corporate Identity</p>
          </div>
          <div className="work-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="work-card large">
                <div className="work-placeholder">Business Profile {i + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Label & Packaging Section */}
        <section
          ref={setSectionRef('product-label')}
          id="product-label"
          className="portfolio-section"
        >
          <div className="section-header">
            <h2 className="section-main-title">
              <span className="title-bold">PRODUCT LABEL</span> & PACKAGING
            </h2>
            <p className="section-tagline">Stand Out On The Shelf</p>
          </div>
          <div className="work-grid">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="work-card">
                <div className="work-placeholder">Packaging {i + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Banner & Hoarding Section */}
        <section
          ref={setSectionRef('banner-hoarding')}
          id="banner-hoarding"
          className="portfolio-section"
        >
          <div className="section-header">
            <h2 className="section-main-title">
              <span className="title-bold">BANNER</span> & HOARDING
            </h2>
            <p className="section-tagline">Large Format Impact</p>
          </div>
          <div className="work-grid banner-grid">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="work-card wide">
                <div className="work-placeholder">Banner {i + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Magazine Section */}
        <section
          ref={setSectionRef('magazine')}
          id="magazine"
          className="portfolio-section"
        >
          <div className="section-header">
            <h2 className="section-main-title">
              <span className="title-bold">MAGAZINE</span> DESIGN
            </h2>
            <p className="section-tagline">Editorial Excellence</p>
          </div>
          <div className="work-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="work-card large">
                <div className="work-placeholder">Magazine {i + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* News Paper & Invitation Section */}
        <section
          ref={setSectionRef('newspaper-invitation')}
          id="newspaper-invitation"
          className="portfolio-section"
        >
          <div className="section-header">
            <h2 className="section-main-title">
              <span className="title-bold">NEWS PAPER</span> & INVITATION
            </h2>
            <p className="section-tagline">Traditional Media With Modern Touch</p>
          </div>
          <div className="work-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="work-card">
                <div className="work-placeholder">Invitation {i + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* UI/UX & Website Section */}
        <section
          ref={setSectionRef('ui-ux-website')}
          id="ui-ux-website"
          className="portfolio-section"
        >
          <div className="section-header">
            <h2 className="section-main-title">
              <span className="title-bold">UI/UX</span> & WEBSITE
            </h2>
            <p className="section-tagline">Digital Experiences That Engage</p>
          </div>
          <div className="work-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="work-card large">
                <div className="work-placeholder">Website {i + 1}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Decorative Elements */}
      <div className="portfolio-decorations">
        <div className="bracket bracket-top-right"></div>
        <div className="bracket bracket-bottom-right"></div>
      </div>
    </div>
  )
}

export default Portfolio
