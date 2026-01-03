import { useParams, Link } from 'react-router-dom'
import { Timeline } from '../components/ui/Timeline.jsx'
import { portfolioData } from '../data/portfolioData'
import Header from '../components/Header'
import '../styles/portfolioDetails.css'

function PortfolioDetails() {
  const { slug } = useParams()
  const portfolio = portfolioData[slug]

  if (!portfolio) {
    return (
      <div className="portfolio-details-page">
        <Header />
        <div className="not-found-container">
          <div className="not-found-content">
            <h1 className="not-found-title">Portfolio Not Found</h1>
            <Link to="/portfolio" className="not-found-link">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Custom timeline titles for each portfolio item
  const getTimelineTitles = (slug) => {
    const titleMappings = {
      'logo-design-branding': {
        first: 'Logo Design',
        second: 'Branding'
      },
      'broucher-catalogue': {
        first: 'Brochure Design',
        second: 'Catalogue Creation'
      },
      'product-label-packaging': {
        first: 'Product Labels',
        second: 'Packaging Design'
      },
      'banner-hoarding': {
        first: 'Banner and Hoarding Design',
        second: 'Project Showcase'
      },
      'newspaper-invitation': {
        first: 'Newspaper & Invitation Design',
        second: 'Project Showcase'
      },
      'business-profile-magazine': {
        first: 'Book Cover',
        second: 'Magazine Layout'
      }
    }
    
    return titleMappings[slug] || {
      first: 'Project Overview',
      second: 'Features & Services'
    }
  }

  const titles = getTimelineTitles(slug)

  const timelineData = slug === 'banner-hoarding' ? [
    // Single section for Banner & Hoarding
    {
      title: 'Banner and Hoarding Design',
      content: (
        <div>
          <div className="project-overview-card">
            <h3 className="project-title">{portfolio.title}</h3>
            <p className="project-description">
              {portfolio.fullDescription}
            </p>
            <div className="project-category">
              {portfolio.category}
            </div>
          </div>
          <div className="branding-summary-card">
            <h4 className="branding-summary-title">Complete Banner and Hoarding Design Solutions</h4>
            <p className="branding-summary-description">
              Our banner and hoarding design services combine impactful visual communication with strategic outdoor advertising expertise. We create eye-catching designs that grab attention from a distance, deliver clear messaging, and withstand outdoor conditions. From small promotional banners to large-scale hoardings, our designs are optimized for maximum visibility and brand impact in any environment.
            </p>
            <div className="branding-highlights">
              <div className="branding-highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                High-Impact Visual Design
              </div>
              <div className="branding-highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                  <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/>
                </svg>
                Weather-Resistant Materials
              </div>
              <div className="branding-highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H18V0h-2v2H8V0H6v2H4.5C3.12 2 2 3.12 2 4.5v15C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-15C22 3.12 20.88 2 19.5 2zm0 17h-15v-12h15v12z"/>
                </svg>
                Large Format Optimization
              </div>
              <div className="branding-highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/>
                </svg>
                Strategic Placement Guidance
              </div>
            </div>
          </div>
          <div className="brochure-image-list">
            {['bn1', 'bn2', 'bn3', 'bn4', 'bn5', 'bn6', 'bn7', 'bn8'].map((imageName) => (
              <div key={imageName} className="brochure-image-container">
                <img
                  src={`${import.meta.env.BASE_URL}portfolio/banner/${imageName}.jpg`}
                  alt={`${portfolio.title} ${imageName}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `${import.meta.env.BASE_URL}img/logo.jpg`
                  }}
                />
                <div className="image-overlay"></div>
              </div>
            ))}
          </div>
          <div className="action-buttons">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      ),
    }
  ] : slug === 'newspaper-invitation' ? [
    // Single section for Newspaper & Invitation
    {
      title: 'Newspaper & Invitation Design',
      content: (
        <div>
          <div className="project-overview-card">
            <h3 className="project-title">{portfolio.title}</h3>
            <p className="project-description">
              {portfolio.fullDescription}
            </p>
            <div className="project-category">
              {portfolio.category}
            </div>
          </div>
          <div className="branding-summary-card">
            <h4 className="branding-summary-title">Complete Newspaper & Invitation Design Solutions</h4>
            <p className="branding-summary-description">
              Our newspaper and invitation design services combine professional layout expertise with creative visual storytelling. We create compelling newspaper advertisements that capture attention and drive engagement, alongside elegant invitation designs for all occasions. From corporate announcements to wedding invitations, our designs balance aesthetic appeal with clear communication to ensure your message reaches your audience effectively.
            </p>
            <div className="branding-highlights">
              <div className="branding-highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                </svg>
                Professional Newspaper Ads
              </div>
              <div className="branding-highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Elegant Invitation Design
              </div>
              <div className="branding-highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                  <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/>
                </svg>
                Custom Typography & Layout
              </div>
              <div className="branding-highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 7h-2V5h2v4zm0 2h-2v2h2v-2z"/>
                </svg>
                Event & Corporate Materials
              </div>
            </div>
          </div>
          <div className="brochure-image-list">
            {['n1', 'n2', 'n3', 'n4', 'n5', 'n6'].map((imageName) => (
              <div key={imageName} className="brochure-image-container">
                <img
                  src={`${import.meta.env.BASE_URL}portfolio/newspaper/${imageName}.jpg`}
                  alt={`${portfolio.title} ${imageName}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `${import.meta.env.BASE_URL}img/logo.jpg`
                  }}
                />
                <div className="image-overlay"></div>
              </div>
            ))}
          </div>
          <div className="action-buttons">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      ),
    }
  ] : [
    {
      title: titles.first,
      content: (
        <div>
          <div className="project-overview-card">
            <h3 className="project-title">{portfolio.title}</h3>
            <p className="project-description">
              {portfolio.fullDescription}
            </p>
            <div className="project-category">
              {portfolio.category}
            </div>
          </div>
          <div className={slug === 'broucher-catalogue' ? "brochure-image-list" : slug === 'product-label-packaging' ? "brochure-image-list" : slug === 'business-profile-magazine' ? "brochure-image-list" : "image-grid"}>
            {slug === 'broucher-catalogue' ? (
              // Show brochure images b1-b4 for brochure section in single column
              ['b1', 'b2', 'b3', 'b4'].map((imageName) => (
                <div key={imageName} className="brochure-image-container">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/brocher/${imageName}.jpg`}
                    alt={`${portfolio.title} brochure ${imageName}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `${import.meta.env.BASE_URL}img/logo.jpg`
                    }}
                  />
                  <div className="image-overlay"></div>
                </div>
              ))
            ) : slug === 'product-label-packaging' ? (
              // Show product label images p1-p4 for product label section
              ['p1', 'p2', 'p3', 'p4'].map((imageName) => (
                <div key={imageName} className="brochure-image-container">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/product label/${imageName}.jpg`}
                    alt={`${portfolio.title} product label ${imageName}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `${import.meta.env.BASE_URL}img/logo.jpg`
                    }}
                  />
                  <div className="image-overlay"></div>
                </div>
              ))
            ) : slug === 'business-profile-magazine' ? (
              // Show book cover images b1-b6 for book cover section
              ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'].map((imageName) => (
                <div key={imageName} className="brochure-image-container">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/book/${imageName}.jpg`}
                    alt={`${portfolio.title} book cover ${imageName}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `${import.meta.env.BASE_URL}img/logo.jpg`
                    }}
                  />
                  <div className="image-overlay"></div>
                </div>
              ))
            ) : (slug === 'logo-design-branding' ? portfolio.images : portfolio.images.slice(0, 8)).map((image, index) => (
              <div key={index} className="image-container">
                <img
                  src={image}
                  alt={`${portfolio.title} overview ${index + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `${import.meta.env.BASE_URL}img/logo.jpg`
                  }}
                />
                <div className="image-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: titles.second,
      content: (
        <div>
          {slug === 'logo-design-branding' ? (
            <div>
              <div className="branding-summary-card">
                <h4 className="branding-summary-title">Complete Branding Solutions</h4>
                <p className="branding-summary-description">
                  Our branding services go beyond just logo design. We create comprehensive brand identities that include visual elements, brand guidelines, color schemes, typography, and marketing materials. Each branding project is carefully crafted to ensure consistency across all touchpoints and create a lasting impression in your target market.
                </p>
                <div className="branding-highlights">
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/>
                    </svg>
                    Visual Identity Systems
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 7h-2V5h2v4zm0 2h-2v2h2v-2z"/>
                    </svg>
                    Brand Guidelines & Standards
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Market Positioning Strategy
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V7h10v2z"/>
                    </svg>
                    Digital & Print Applications
                  </div>
                </div>
              </div>
              <div className="branding-image-grid">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="branding-image-container">
                    <img
                      src={`${import.meta.env.BASE_URL}portfolio/B${num}.png`}
                      alt={`Branding project ${num}`}
                      onError={(e) => {
                        e.target.src = `${import.meta.env.BASE_URL}img/logo.jpg`
                      }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : slug === 'broucher-catalogue' ? (
            <div>
              <div className="branding-summary-card">
                <h4 className="branding-summary-title">Complete Brochure & Catalogue Solutions</h4>
                <p className="branding-summary-description">
                  Our brochure and catalogue design services combine compelling visual storytelling with strategic marketing objectives. We create professional marketing materials that effectively communicate your brand message, showcase your products or services, and drive customer engagement. Each design is tailored to your specific industry and target audience for maximum impact.
                </p>
                <div className="branding-highlights">
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    Multi-Page Layout Design
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/>
                    </svg>
                    Brand-Consistent Visual Identity
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M3 13h8V3H9v6H5V3H3v10zm8 8h8V11h-2v6h-4v-6h-2v10z"/>
                    </svg>
                    Strategic Content Organization
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                    </svg>
                    Print & Digital Optimization
                  </div>
                </div>
              </div>
              <div className="brochure-image-list">
                {['c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17'].map((imageName) => (
                  <div key={imageName} className="brochure-image-container">
                    <img
                      src={`${import.meta.env.BASE_URL}portfolio/brocher/${imageName}.jpg`}
                      alt={`Catalogue project ${imageName}`}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `${import.meta.env.BASE_URL}img/logo.jpg`
                      }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : slug === 'product-label-packaging' ? (
            <div>
              <div className="branding-summary-card">
                <h4 className="branding-summary-title">Complete Packaging Design Solutions</h4>
                <p className="branding-summary-description">
                  Our packaging design services combine creativity with market research to create packaging that not only protects your product but also attracts customers and communicates your brand values effectively. We focus on creating designs that stand out on shelves while maintaining functionality and sustainability.
                </p>
                <div className="branding-highlights">
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                    </svg>
                    Custom Package Design
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/>
                    </svg>
                    Product Label Creation
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75S7 8 17 8z"/>
                    </svg>
                    Eco-Friendly Solutions
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Market-Ready Designs
                  </div>
                </div>
              </div>
              <div className="brochure-image-list">
                {['pa1', 'pa2', 'pa3', 'pa4', 'pa5', 'pa6'].map((imageName) => (
                  <div key={imageName} className="brochure-image-container">
                    <img
                      src={`${import.meta.env.BASE_URL}portfolio/product label/${imageName}.jpg`}
                      alt={`Packaging design ${imageName}`}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `${import.meta.env.BASE_URL}img/logo.jpg`
                      }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : slug === 'business-profile-magazine' ? (
            <div>
              <div className="branding-summary-card">
                <h4 className="branding-summary-title">Complete Magazine Design Solutions</h4>
                <p className="branding-summary-description">
                  Our magazine design services combine compelling visual storytelling with professional layout design. We create engaging magazine layouts that capture readers' attention, organize content effectively, and maintain visual consistency throughout. Each design is crafted to enhance readability while reflecting your brand's unique style and message.
                </p>
                <div className="branding-highlights">
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    Editorial Layout Design
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H3V5h18v10z"/>
                    </svg>
                    Visual Content Organization
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/>
                    </svg>
                    Typography & Grid Systems
                  </div>
                  <div className="branding-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                    </svg>
                    Print & Digital Optimization
                  </div>
                </div>
              </div>
              <div className="brochure-image-list">
                {['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7'].map((imageName) => (
                  <div key={imageName} className="brochure-image-container">
                    <img
                      src={`${import.meta.env.BASE_URL}portfolio/book/${imageName}.jpg`}
                      alt={`Magazine design ${imageName}`}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `${import.meta.env.BASE_URL}img/logo.jpg`
                      }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p className="features-description">
                Our comprehensive approach ensures every aspect of your project is handled with expertise and attention to detail.
              </p>
              <div className="features-list">
                {portfolio.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="image-grid">
                {portfolio.images.slice(8).map((image, index) => (
                  <div key={index} className="image-container">
                    <img
                      src={image}
                      alt={`${portfolio.title} feature ${index + 1}`}
                      onError={(e) => {
                        e.target.src = `${import.meta.env.BASE_URL}img/logo.jpg`
                      }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="action-buttons">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      ),
    }
  ]

  return (
    <div className="portfolio-details-page">
      <Header />
      <Timeline data={timelineData} />
    </div>
  )
}

export default PortfolioDetails