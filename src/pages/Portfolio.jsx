import { useState } from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState(null)

  const services = [
    {
      id: 1,
      number: '01',
      category: 'DESIGN',
      title: 'Branding, Identity & Strategy',
      image: `${import.meta.env.BASE_URL}img/log 1.png`,
      link: '/services'
    },
    {
      id: 2,
      number: '02',
      category: 'BRANDING',
      title: 'Print Editorials & Packaging Design',
      image: `${import.meta.env.BASE_URL}img/log 2.png`,
      link: '/services'
    },
    {
      id: 3,
      number: '03',
      category: 'BRANDING',
      title: 'Creative Marketing Materials',
      image: `${import.meta.env.BASE_URL}img/log 3.png`,
      link: '/services'
    },
    {
      id: 4,
      number: '04',
      category: 'PRINTING',
      title: 'Corporate & Commercial Printing',
      image: `${import.meta.env.BASE_URL}img/log 4.png`,
      link: '/services'
    },
    {
      id: 5,
      number: '05',
      category: 'DESIGN',
      title: 'Promotional & Event Materials',
      image: `${import.meta.env.BASE_URL}img/log 5.png`,
      link: '/services'
    },
    {
      id: 6,
      number: '06',
      category: 'PACKAGING',
      title: 'Custom Packaging Solutions',
      image: `${import.meta.env.BASE_URL}img/box.jpg`,
      link: '/services'
    }
  ]

  // Client logos for Our Clients section
  const clientLogos = Array.from({ length: 17 }, (_, i) => `/Final-Printolution/OUR CLIENT/${i + 1}.png`)

  // Logo brands data with images (using %20 for spaces in URL)
  const logoBrands = [
    { name: 'Samarthya Greens', image: '/Final-Printolution/img/log%201.png' },
    { name: 'Matli Tea', image: '/Final-Printolution/img/log%202.png' },
    { name: 'Technocraft', image: '/Final-Printolution/img/log%203.png' },
    { name: 'Anishi Jewels', image: '/Final-Printolution/img/log%204.png' },
    { name: 'Sattatav Buildcon', image: '/Final-Printolution/img/log%205.png' }
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
      {/* Hero Section - Marquee Style */}
      <section className="portfolio-hero">
        <div className="hero-marquee">
          <div className="marquee-track">
            <span>DESIGN</span>
            <span className="dot">●</span>
            <span>PRINT</span>
            <span className="dot">●</span>
            <span>BRAND</span>
            <span className="dot">●</span>
            <span>CREATE</span>
            <span className="dot">●</span>
            <span>DESIGN</span>
            <span className="dot">●</span>
            <span>PRINT</span>
            <span className="dot">●</span>
            <span>BRAND</span>
            <span className="dot">●</span>
            <span>CREATE</span>
            <span className="dot">●</span>
          </div>
        </div>
        <div className="hero-center">
          <h1>WHAT WE DO</h1>
          <p>Crafting brands. Printing dreams.</p>
        </div>
        <div className="hero-marquee reverse">
          <div className="marquee-track">
            <span>PACKAGING</span>
            <span className="dot">●</span>
            <span>IDENTITY</span>
            <span className="dot">●</span>
          </div>
        </div>
      </section>

      {/* Sidebar Navigation */}
      <aside className="portfolio-sidebar">
        <div className="sidebar-logo">
          <img src="/Final-Printolution/img/Main logo.png" alt="Printolution" />
        </div>
        <div className="hero-center">
          <h1>WHAT WE DO</h1>
          <p>Crafting brands. Printing dreams.</p>
        </div>
        <div className="hero-marquee reverse">
          <div className="marquee-track">
            <span>PACKAGING</span>
            <span className="dot">●</span>
            <span>IDENTITY</span>
            <span className="dot">●</span>
            <span>STRATEGY</span>
            <span className="dot">●</span>
            <span>MARKETING</span>
            <span className="dot">●</span>
            <span>PACKAGING</span>
            <span className="dot">●</span>
            <span>IDENTITY</span>
            <span className="dot">●</span>
            <span>STRATEGY</span>
            <span className="dot">●</span>
            <span>MARKETING</span>
            <span className="dot">●</span>
          </div>
        </div>
      </section>

      {/* Services List - Dark */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-list">
            {services.map((service) => (
              <Link
                to={service.link}
                key={service.id}
                className={`service-item ${hoveredItem === service.id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredItem(service.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Hover Image */}
                <div className="service-hover-image">
                  <img src={service.image} alt={service.title} />
                </div>
                
                {/* Content */}
                <div className="service-content">
                  <span className="service-category">{service.category}</span>
                  <div className="service-title-row">
                    <span className="service-number">{service.number}.</span>
                    <h2 className="service-title">{service.title}</h2>
                  </div>
                </div>
                
                {/* Divider Line */}
                <div className="service-divider"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll to top button */}
        <button 
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </section>
    </div>
  )
}

export default Portfolio
