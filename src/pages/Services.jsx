import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive printing and design solutions for every need</p>
        </div>
      </section>

      {/* Design Studio */}
      <section className="service-section service-design">
        <div className="container">
          <div className="service-header">
            <div className="service-icon-large">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9z"/>
              </svg>
            </div>
            <div>
              <h2>Design Studio</h2>
              <p className="service-intro">Creative design solutions that bring your brand to life</p>
            </div>
          </div>
          <div className="service-items">
            <div className="service-item-card">
              <h3>Logo & Branding</h3>
              <p>Create a memorable brand identity with custom logo design and comprehensive branding packages</p>
            </div>
            <div className="service-item-card">
              <h3>Stationery Design</h3>
              <p>Professional business cards, letterheads, and corporate stationery that make an impression</p>
            </div>
            <div className="service-item-card">
              <h3>Brochures & Catalogs</h3>
              <p>Engaging marketing materials that showcase your products and services effectively</p>
            </div>
            <div className="service-item-card">
              <h3>Packaging Design</h3>
              <p>Eye-catching packaging solutions that protect and promote your products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Printing Solutions */}
      <section className="service-section service-printing alt">
        <div className="container">
          <div className="service-header">
            <div className="service-icon-large">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="6 9 6 2 18 2 18 9"/>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
            </div>
            <div>
              <h2>Printing Solutions</h2>
              <p className="service-intro">Premium quality printing with state-of-the-art technology</p>
            </div>
          </div>
          <div className="service-items">
            <div className="service-item-card">
              <h3>Offset & Digital Printing</h3>
              <p>High-volume offset printing and quick-turnaround digital printing for all your needs</p>
            </div>
            <div className="service-item-card">
              <h3>Corporate & Commercial Printing</h3>
              <p>Business documents, reports, presentations, and marketing collateral</p>
            </div>
            <div className="service-item-card">
              <h3>Custom Packaging</h3>
              <p>Boxes, bags, and custom packaging solutions for retail and e-commerce</p>
            </div>
            <div className="service-item-card">
              <h3>Wedding Cards</h3>
              <p>Elegant wedding invitations and stationery for your special day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Products */}
      <section className="service-section service-promotional">
        <div className="container">
          <div className="service-header">
            <div className="service-icon-large">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div>
              <h2>Promotional Products</h2>
              <p className="service-intro">Marketing materials that amplify your brand presence</p>
            </div>
          </div>
          <div className="service-items">
            <div className="service-item-card">
              <h3>Posters, Banners & Hoardings</h3>
              <p>Large format printing for events, advertising, and outdoor displays</p>
            </div>
            <div className="service-item-card">
              <h3>Stickers & Labels</h3>
              <p>Custom stickers and labels for branding, packaging, and promotions</p>
            </div>
            <div className="service-item-card">
              <h3>Merchandise Printing</h3>
              <p>T-shirts, mugs, pens, and promotional items with your brand</p>
            </div>
            <div className="service-item-card">
              <h3>Event Materials</h3>
              <p>Standees, backdrops, and all materials needed for successful events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="why-services">
        <div className="container">
          <h2 className="section-title">Why Choose Our Services</h2>
          <div className="why-services-grid">
            <div className="why-service-card">
              <div className="why-service-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3>Creative & Custom Designs</h3>
              <p>Every project is tailored to reflect your unique brand identity and vision</p>
            </div>
            <div className="why-service-card">
              <div className="why-service-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
                </svg>
              </div>
              <h3>High-Quality Technology</h3>
              <p>State-of-the-art printing equipment ensures superior quality results</p>
            </div>
            <div className="why-service-card">
              <div className="why-service-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>On-Time Delivery</h3>
              <p>Fast turnaround times without compromising on quality</p>
            </div>
            <div className="why-service-card">
              <div className="why-service-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
  
                  <path d="M12 3v16"/>

  
                  <path d="M16 7c0-2-2-3-4-3s-4 1-4 3c0 2.5 3 3 4 3.5s4 1 4 3.5c0 2-2 3-4 3s-4-1-4-3"/>
              </svg>



              </div>
              <h3>Competitive Pricing</h3>
              <p>Affordable rates that deliver exceptional value for your investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to bring your project to life?</h2>
          <Link to="/quote" className="btn btn-primary">Request a Quote</Link>
        </div>
      </section>
    </>
  )
}

export default Services
