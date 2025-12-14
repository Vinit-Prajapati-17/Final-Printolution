import { useState } from 'react'

function Careers() {
  const [activeModal, setActiveModal] = useState(null)
  const [result, setResult] = useState('')

  const positions = [
    {
      id: 1,
      title: 'Graphic Designer',
      type: 'Full-time',
      location: 'Ahmedabad, Gujarat',
      description:
        "We're looking for a creative graphic designer with expertise in branding, print design, and digital media. Experience with Adobe Creative Suite required.",
      requirements: [
        '2+ years of design experience',
        'Proficiency in Adobe Illustrator, Photoshop, InDesign',
        'Strong portfolio showcasing print and branding work',
        'Excellent communication and time management skills'
      ]
    },
    {
      id: 2,
      title: 'Client Servicing Executive',
      type: 'Full-time',
      location: 'Ahmedabad, Gujarat',
      description:
        'Join our client services team to manage relationships, coordinate projects, and ensure exceptional customer satisfaction.',
      requirements: [
        '1-3 years in client servicing or account management',
        'Excellent communication and interpersonal skills',
        'Ability to manage multiple projects simultaneously',
        'Problem-solving mindset and customer-first approach'
      ]
    }
  ]

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')

    const formData = new FormData(event.target)
    formData.append('access_key', '19496093-f7eb-4a18-979b-984730899be2')
    formData.append('subject', `Job Application - ${activeModal?.title || 'General'}`)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult('success')
      event.target.reset()
    } else {
      setResult('error')
    }
  }

  const openModal = (position) => {
    setActiveModal(position)
    setResult('')
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <>
      {/* Hero Section - Marquee Style */}
      <section className="careers-hero">
        <div className="hero-marquee">
          <div className="marquee-track">
            <span>GROW</span><span className="dot">●</span>
            <span>LEARN</span><span className="dot">●</span>
            <span>INNOVATE</span><span className="dot">●</span>
            <span>SUCCEED</span><span className="dot">●</span>
            <span>GROW</span><span className="dot">●</span>
            <span>LEARN</span><span className="dot">●</span>
            <span>INNOVATE</span><span className="dot">●</span>
            <span>SUCCEED</span><span className="dot">●</span>
          </div>
        </div>
        <div className="hero-center">
          <h1>JOIN OUR TEAM</h1>
          <p>Be part of a creative, innovative, and growing company</p>
        </div>
        <div className="hero-marquee reverse">
          <div className="marquee-track">
            <span>OPPORTUNITY</span><span className="dot">●</span>
            <span>CREATIVITY</span><span className="dot">●</span>
            <span>TEAMWORK</span><span className="dot">●</span>
            <span>FUTURE</span><span className="dot">●</span>
            <span>OPPORTUNITY</span><span className="dot">●</span>
            <span>CREATIVITY</span><span className="dot">●</span>
            <span>TEAMWORK</span><span className="dot">●</span>
            <span>FUTURE</span><span className="dot">●</span>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-work">
        <div className="container">
          <h2 className="section-title">Why Work With Printolution?</h2>
          <div className="why-work-grid">
            <div className="why-work-card">
              <div className="why-work-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3>Growth Opportunities</h3>
              <p>Continuous learning and career advancement in a fast-growing company</p>
            </div>

            <div className="why-work-card">
              <div className="why-work-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                  <path d="M2 2l7.586 7.586"/>
                  <circle cx="11" cy="11" r="2"/>
                </svg>
              </div>
              <h3>Creative Environment</h3>
              <p>Work on diverse projects that challenge and inspire creativity</p>
            </div>

            <div className="why-work-card">
              <div className="why-work-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Collaborative Culture</h3>
              <p>Join a supportive team that values collaboration and innovation</p>
            </div>

            <div className="why-work-card">
              <div className="why-work-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Work-Life Balance</h3>
              <p>Flexible working arrangements and a healthy work environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="open-positions">
        <div className="container">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">Explore exciting opportunities to grow your career with us</p>

          <div className="positions-list">
            {positions.map((position) => (
              <div key={position.id} className="position-card">
                <div className="position-header">
                  <div>
                    <h3>{position.title}</h3>
                    <div className="position-meta">
                      <span className="position-type">{position.type}</span>
                      <span className="position-location">
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn btn-secondary apply-btn"
                    onClick={() => openModal(position)}
                  >
                    Apply Now
                  </button>
                </div>

                <p className="position-desc">{position.description}</p>

                <div className="position-requirements">
                  <strong>Requirements:</strong>
                  <ul>
                    {position.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {activeModal && (
        <div
          className="modal active"
          onClick={(e) =>
            e.target.className.includes('modal') && closeModal()
          }
        >
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>

            <h2>
              Apply for <span>{activeModal.title}</span>
            </h2>

            {result === 'success' ? (
              <div className="form-status success">
                ✓ Thank you for your application! We'll review it and get back to you soon.
              </div>
            ) : (
              <form className="application-form" onSubmit={onSubmit}>
                <input type="hidden" name="position" value={activeModal.title} />
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="applicantName">Full Name *</label>
                    <input
                      type="text"
                      id="applicantName"
                      name="name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="applicantEmail">Email Address *</label>
                    <input
                      type="email"
                      id="applicantEmail"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="applicantPhone">Phone Number *</label>
                    <input
                      type="tel"
                      id="applicantPhone"
                      name="phone"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="portfolio">Portfolio/LinkedIn URL</label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      placeholder="https://"
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="resume">Resume/CV URL *</label>
                  <input
                    type="url"
                    id="resume"
                    name="resume"
                    placeholder="https://drive.google.com/..."
                    required
                  />
                  <small className="form-help">
                    Please provide a link to your resume (Google Drive, Dropbox, etc.)
                  </small>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="coverLetter">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows="3"
                    placeholder="Tell us why you'd be a great fit..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={result === 'Sending....'}>
                  {result === 'Sending....' ? 'Submitting...' : 'Submit Application'}
                </button>
                
                {result === 'error' && (
                  <div className="form-status error">
                    ✗ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Careers
