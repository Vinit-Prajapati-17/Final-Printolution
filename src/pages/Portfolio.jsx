import { useState } from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState(null)

  const services = [
    {
      id: 1,
      number: '01',
      category: 'DESIGN',
      title: 'Logo Design & Branding',
      video: '/img/portlogo.mp4',
      link: '/portfolio/logo-design-branding'
    },
    {
      id: 2,
      number: '02',
      category: 'BRANDING',
      title: 'Broucher & Catalogue',
      video: '/img/Broucher & Catalogue.mp4',
      link: '/portfolio/broucher-catalogue'
    },
    {
      id: 3,
      number: '03',
      category: 'BRANDING',
      title: ' Product label & Packaging',
      video: '/img/Product label & packaging.mp4',
      link: '/portfolio/product-label-packaging'
    },
    {
      id: 4,
      number: '04',
      category: 'PRINTING',
      title: ' Banner & Hoarding',
      video: '/img/Banner & hoarding.mp4',
      link: '/portfolio/banner-hoarding'
    },
    {
      id: 5,
      number: '05',
      category: 'DESIGN',
      title: ' News paper & Invitation',
      video: '/img/Newspaper & Invitation.mp4',
      link: '/portfolio/newspaper-invitation'
    },
    {
      id: 6,
      number: '06',
      category: 'PACKAGING',
      title: ' Book Cover And Magazine',
      video: '/img/Book Cover And Magazine.mp4',
      link: '/portfolio/business-profile-magazine'
    }
  ]

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
                {/* Hover Video */}
                <div className="service-hover-image">
                  <video autoPlay loop muted playsInline style={{ objectPosition: 'center' }}>
                    <source src={service.video} type="video/mp4" />
                  </video>
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