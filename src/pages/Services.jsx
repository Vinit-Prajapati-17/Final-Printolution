import { useState } from 'react'
import { Link } from 'react-router-dom'

function Services() {
  const [activeService, setActiveService] = useState(null)

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
