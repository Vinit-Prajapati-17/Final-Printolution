import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
    honeypot: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.honeypot) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', projectType: '', message: '', honeypot: '' })
    }, 1500)
  }

  return (
    <>
      {/* Hero Section - Marquee Style */}
      <section className="contact-hero">
        <div className="hero-marquee">
          <div className="marquee-track">
            <span>CONNECT</span>
            <span className="dot">●</span>
            <span>DISCUSS</span>
            <span className="dot">●</span>
            <span>CREATE</span>
            <span className="dot">●</span>
            <span>COLLABORATE</span>
            <span className="dot">●</span>
            <span>CONNECT</span>
            <span className="dot">●</span>
            <span>DISCUSS</span>
            <span className="dot">●</span>
            <span>CREATE</span>
            <span className="dot">●</span>
            <span>COLLABORATE</span>
            <span className="dot">●</span>
          </div>
        </div>
        <div className="hero-center">
          <h1>GET IN TOUCH</h1>
          <p>Let's create something amazing together</p>
        </div>
        <div className="hero-marquee reverse">
          <div className="marquee-track">
            <span>SUPPORT</span>
            <span className="dot">●</span>
            <span>SOLUTIONS</span>
            <span className="dot">●</span>
            <span>PARTNERSHIP</span>
            <span className="dot">●</span>
            <span>RESULTS</span>
            <span className="dot">●</span>
            <span>SUPPORT</span>
            <span className="dot">●</span>
            <span>SOLUTIONS</span>
            <span className="dot">●</span>
            <span>PARTNERSHIP</span>
            <span className="dot">●</span>
            <span>RESULTS</span>
            <span className="dot">●</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="contact-intro">Have a question or ready to start your project? Reach out to us through any of these channels.</p>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>printolutionrjk@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 97247 18880</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>Rajkot, Gujarat<br/>India - 360001</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 10:00 AM - 7:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons-large">
                  <a href="https://www.instagram.com/printolution_rajkot/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/printolutionrajkot" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select 
                    id="projectType" 
                    name="projectType" 
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="design">Design Services</option>
                    <option value="printing">Printing Services</option>
                    <option value="promotional">Promotional Products</option>
                    <option value="wedding">Wedding Cards</option>
                    <option value="packaging">Packaging</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    value={formData.message}
                    onChange={handleChange}
                    required
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
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="form-status success">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
