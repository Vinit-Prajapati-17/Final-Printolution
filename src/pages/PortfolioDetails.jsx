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
              <div className="branding-highlight">🎯 High-Impact Visual Design</div>
              <div className="branding-highlight">🌟 Weather-Resistant Materials</div>
              <div className="branding-highlight">📏 Large Format Optimization</div>
              <div className="branding-highlight">🚀 Strategic Placement Guidance</div>
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
              <div className="branding-highlight">📰 Professional Newspaper Ads</div>
              <div className="branding-highlight">💌 Elegant Invitation Design</div>
              <div className="branding-highlight">🎨 Custom Typography & Layout</div>
              <div className="branding-highlight">📋 Event & Corporate Materials</div>
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
                  <div className="branding-highlight">🎨 Visual Identity Systems</div>
                  <div className="branding-highlight">📋 Brand Guidelines & Standards</div>
                  <div className="branding-highlight">🎯 Market Positioning Strategy</div>
                  <div className="branding-highlight">📱 Digital & Print Applications</div>
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
                  <div className="branding-highlight">📖 Multi-Page Layout Design</div>
                  <div className="branding-highlight">🎨 Brand-Consistent Visual Identity</div>
                  <div className="branding-highlight">📊 Strategic Content Organization</div>
                  <div className="branding-highlight">🖨️ Print & Digital Optimization</div>
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
                  <div className="branding-highlight">📦 Custom Package Design</div>
                  <div className="branding-highlight">🏷️ Product Label Creation</div>
                  <div className="branding-highlight">🌱 Eco-Friendly Solutions</div>
                  <div className="branding-highlight">🎯 Market-Ready Designs</div>
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
                  <div className="branding-highlight">📖 Editorial Layout Design</div>
                  <div className="branding-highlight">🎨 Visual Content Organization</div>
                  <div className="branding-highlight">📊 Typography & Grid Systems</div>
                  <div className="branding-highlight">🖨️ Print & Digital Optimization</div>
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