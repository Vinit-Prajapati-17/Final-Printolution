import { useState } from 'react'

function Careers() {
  const [activeModal, setActiveModal] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    resume: null,
    coverLetter: '',
    honeypot: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const positions = [
    {
      id: 1,
      title: 'Graphic Designer',
      type: 'Full-time',
      location: 'Rajkot, Gujarat',
      description: "We're looking for a creative graphic designer with expertise in branding, print design, and digital media. Experience with Adobe Creative Suite required.",
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
      location: 'Rajkot, Gujarat',
      description: 'Join our client services team to manage relationships, coordinate projects, and ensure exceptional customer satisfaction.',
      requirements: [
        '1-3 years in client servicing or account management',
        'Excellent communication and interpersonal skills',
        'Ability to manage multiple projects simultaneously',
        'Problem-solving mindset and customer-first approach'
      ]
    },
    {
      id: 3,
      title: 'Print Production Assistant',
      type: 'Full-time',
      location: 'Rajkot, Gujarat',
      description: 'Support our production team in managing print workflows, quality control, and ensuring timely delivery of projects.',
      requirements: [
        'Knowledge of printing processes (offset, digital)',
        'Attention to detail and quality consciousness',
        'Ability to work in a fast-paced environment',
        'Basic understanding of color management and file preparation'
      ]
    }
  ]

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.honeypot) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
    }, 1500)
  }

  const openModal = (position) => {
    setActiveModal(position)
    setSubmitStatus(null)
    setFormData({ name: '', email: '', phone: '', portfolio: '', resume: null, coverLetter: '', honeypot: '' })
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
            <span>GROW</span>
            <span className="dot">●</span>
            <span>LEARN</span>
            <span className="dot">●</span>
            <span>INNOVATE</span>
            <span className="dot">●</span>
            <span>SUCCEED</span>
            <span className="dot">●</span>
            <span>GROW</span>
            <span className="dot">●</span>
            <span>LEARN</span>
            <span className="dot">●</span>
            <span>INNOVATE</span>
            <span className="dot">●</span>
            <span>SUCCEED</span>
            <span className="dot">●</span>
          </div>
        </div>
        <div className="hero-center">
          <h1>JOIN OUR TEAM</h1>
          <p>Be part of a creative, innovative, and growing company</p>
        </div>
        <div className="hero-marquee reverse">
          <div className="marquee-track">
            <span>OPPORTUNITY</span>
            <span className="dot">●</span>
            <span>CREATIVITY</span>
            <span className="dot">●</span>
            <span>TEAMWORK</span>
            <span className="dot">●</span>
            <span>FUTURE</span>
            <span className="dot">●</span>
            <span>OPPORTUNITY</span>
            <span className="dot">●</span>
            <span>CREATIVITY</span>
            <span className="dot">●</span>
            <span>TEAMWORK</span>
            <span className="dot">●</span>
            <span>FUTURE</span>
            <span className="dot">●</span>
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
            {positions.map(position => (
              <div key={position.id} className="position-card">
                <div className="position-header">
                  <div>
                    <h3>{position.title}</h3>
                    <div className="position-meta">
                      <span className="position-type">{position.type}</span>
                      <span className="position-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
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

      {/* No Openings CTA */}
      <section className="no-openings">
        <div className="container">
          <div className="no-openings-content">
            <h2>Don't see a role that fits?</h2>
            <p>We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.</p>
            <a href="mailto:printolutionrjk@gmail.com" className="btn btn-primary">Send Your Resume</a>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {activeModal && (
        <div className="modal active" onClick={(e) => e.target.className.includes('modal') && closeModal()}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2>Apply for <span>{activeModal.title}</span></h2>
            
            {submitStatus === 'success' ? (
              <div className="form-status success">
                ✓ Thank you for your application! We'll review it and get back to you soon.
              </div>
            ) : (
              <form className="application-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="applicantName">Full Name *</label>
                  <input 
                    type="text" 
                    id="applicantName" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="applicantEmail">Email Address *</label>
                  <input 
                    type="email" 
                    id="applicantEmail" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="applicantPhone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="applicantPhone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="portfolio">Portfolio/LinkedIn URL</label>
                  <input 
                    type="url" 
                    id="portfolio" 
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="resume">Resume/CV *</label>
                  <input 
                    type="file" 
                    id="resume" 
                    name="resume"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="coverLetter">Cover Letter</label>
                  <textarea 
                    id="coverLetter" 
                    name="coverLetter"
                    rows="4"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us why you'd be a great fit..."
                  ></textarea>
                </div>
                
                {/* Honeypot */}
                <input 
                  type="text" 
                  name="honeypot" 
                  className="honeypot" 
                  tabIndex="-1" 
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ position: 'absolute', left: '-9999px' }}
                />
                
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Careers
