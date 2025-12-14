import { useParams, Link } from 'react-router-dom'
import { Timeline } from '../components/ui/Timeline.jsx'
import { portfolioData } from '../data/portfolioData'
import '../styles/portfolioDetails.css'

function PortfolioDetails() {
  const { slug } = useParams()
  const portfolio = portfolioData[slug]

  if (!portfolio) {
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">Portfolio Not Found</h1>
          <Link to="/portfolio" className="not-found-link">
            Back to Portfolio
          </Link>
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
        first: 'Banner Design',
        second: 'Hoarding Solutions'
      },
      'newspaper-invitation': {
        first: 'Newspaper Ads',
        second: 'Invitation Design'
      },
      'business-profile-magazine': {
        first: 'Business Profile',
        second: 'Magazine Layout'
      }
    }
    
    return titleMappings[slug] || {
      first: 'Project Overview',
      second: 'Features & Services'
    }
  }

  const titles = getTimelineTitles(slug)

  const timelineData = [
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
          <div className="image-grid">
            {(slug === 'logo-design-branding' ? portfolio.images : portfolio.images.slice(0, 8)).map((image, index) => (
              <div key={index} className="image-container">
                <img
                  src={image}
                  alt={`${portfolio.title} overview ${index + 1}`}
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

  return <Timeline data={timelineData} />
}

export default PortfolioDetails