import { useState } from 'react'
import { Link } from 'react-router-dom'

function Services() {
  const [activeService, setActiveService] = useState(null)
  const [activeBannerService, setActiveBannerService] = useState(null)

  const bannerServices = [
    {
      id: 'design',
      title: 'DESIGN',
      description: 'Get the best design service for all types of websites and marketing requirements. Promote your brand online and offline with us.',
      image: `${import.meta.env.BASE_URL}img/designing.jpg`
    },
    {
      id: 'printing',
      title: 'PRINTING',
      description: 'All types of printing services like brochures, letterhead, profiles, visiting cards, etc. are available. We are pixel-perfect printing services.',
      image: `${import.meta.env.BASE_URL}img/printing.jpg`
    },
    {
      id: 'branding',
      title: 'BRANDING',
      description: 'Build a strong brand identity with our comprehensive branding solutions. From logos to complete brand guidelines.',
      image: `${import.meta.env.BASE_URL}img/brand.jpg`
    }
  ]

  const services = [
    {
      id: 'design',
      number: '01',
      title: 'Design Studio',
      description: 'Creative design solutions that bring your brand to life with custom logos, branding, and visual identity.',
      items: ['Logo & Branding', 'Stationery Design', 'Brochures & Catalogs', 'Packaging Design']
    },
    {
      id: 'printing',
      number: '02',
      title: 'Printing Solutions',
      description: 'Premium quality printing with state-of-the-art technology for all your business needs.',
      items: ['Offset & Digital Printing', 'Corporate Printing', 'Custom Packaging', 'Wedding Cards']
    },
    {
      id: 'promotional',
      number: '03',
      title: 'Promotional Products',
      description: 'Marketing materials that amplify your brand presence and make lasting impressions.',
      items: ['Posters & Banners', 'Stickers & Labels', 'Merchandise Printing', 'Event Materials']
    }
  ]

  return (
    <div className="services-page">
      {/* Hero Section - Marquee Style */}
      <section className="services-hero">
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
          <h1>OUR SERVICES</h1>
          <p>Everything you need to build your brand</p>
        </div>
        <div className="hero-marquee reverse">
          <div className="marquee-track">
            <span>PACKAGING</span>
            <span className="dot">●</span>
            <span>IDENTITY</span>
            <span className="dot">●</span>
            <span>MARKETING</span>
            <span className="dot">●</span>
            <span>SOLUTIONS</span>
            <span className="dot">●</span>
            <span>PACKAGING</span>
            <span className="dot">●</span>
            <span>IDENTITY</span>
            <span className="dot">●</span>
            <span>MARKETING</span>
            <span className="dot">●</span>
            <span>SOLUTIONS</span>
            <span className="dot">●</span>
          </div>
        </div>
      </section>

      {/* Services Banner - Interactive with Hover */}
      <section className="services-banner">
        {/* Background Images */}
        <div className="services-banner-images">
          {bannerServices.map((service) => (
            <div 
              key={service.id}
              className={`banner-bg-image ${activeBannerService === service.id ? 'active' : ''}`}
            >
              <img src={service.image} alt={service.title} />
            </div>
          ))}
          {/* Default image when nothing is hovered */}
          <div className={`banner-bg-image default ${activeBannerService === null ? 'active' : ''}`}>
            <img src={`${import.meta.env.BASE_URL}img/allin.jpg`} alt="Our Services" />
          </div>
        </div>

        {/* Service Labels */}
        <div className="services-banner-labels">
          {bannerServices.map((service) => (
            <div 
              key={service.id}
              className={`banner-label ${activeBannerService === service.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveBannerService(service.id)}
              onMouseLeave={() => setActiveBannerService(null)}
            >
              <h3 className="label-title">{service.title}</h3>
              <p className="label-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`service-block ${activeService === service.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className="container">
              <div className="service-block-content">
                <div className="service-left">
                  <span className="service-number">{service.number}</span>
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-right">
                  <ul className="service-items-list">
                    {service.items.map((item, index) => (
                      <li key={index}>
                        <span className="item-arrow">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-services">
        <div className="container">
          <h2 className="section-heading">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3>Creative Excellence</h3>
              <p>Every project is tailored to reflect your unique brand identity</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3>Premium Quality</h3>
              <p>State-of-the-art equipment ensures superior results</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround without compromising on quality</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">04</div>
              <h3>Best Prices</h3>
              <p>Competitive rates that deliver exceptional value</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to start your project?</h2>
          <p>Let's create something amazing together</p>
          <Link to="/quote" className="cta-button">Get a Quote</Link>
        </div>
      </section>
    </div>
  )
}

export default Services
