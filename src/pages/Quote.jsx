import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'

function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    projectType: '',
    quantity: '',
    deadline: '',
    budget: '',
    description: '',
    file: '',
    honeypot: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const serviceTypes = [
    { value: '', label: 'Select Service Type' },
    { value: 'design', label: 'Design Services' },
    { value: 'printing', label: 'Printing Services' },
    { value: 'promotional', label: 'Promotional Products' },
    { value: 'packaging', label: 'Custom Packaging' },
    { value: 'complete', label: 'Complete Package (Design + Print)' }
  ]

  const projectTypes = {
    design: ['Logo Design', 'Brand Identity', 'Stationery Design', 'Brochure Design', 'Social Media Graphics', 'Other'],
    printing: ['Business Cards', 'Brochures', 'Flyers', 'Wedding Cards', 'Corporate Stationery', 'Books/Catalogs', 'Other'],
    promotional: ['Banners', 'Posters', 'Stickers', 'Labels', 'Hoardings', 'Event Materials', 'Other'],
    packaging: ['Custom Boxes', 'Food Packaging', 'Gift Boxes', 'Product Labels', 'Shopping Bags', 'Other'],
    complete: ['Full Brand Package', 'Marketing Kit', 'Event Package', 'Launch Package', 'Other']
  }

  const budgetRanges = [
    { value: '', label: 'Select Budget Range' },
    { value: 'under-5k', label: 'Under ₹5,000' },
    { value: '5k-15k', label: '₹5,000 - ₹15,000' },
    { value: '15k-50k', label: '₹15,000 - ₹50,000' },
    { value: '50k-1l', label: '₹50,000 - ₹1,00,000' },
    { value: 'above-1l', label: 'Above ₹1,00,000' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    // keep original behaviour: if serviceType changes, reset projectType
    if (name === 'serviceType') {
      setFormData(prev => ({ ...prev, [name]: value, projectType: '' }))
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  // ---------- REPLACED: Only this function updated ----------
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.honeypot) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const serviceId = 'service_xwfiamf'
      const templateId = 'template_m30xj0l'
      const publicKey = '9uyifXku8tWA4JV3k'

      const templateParams = {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service_type: formData.serviceType,
        project_type: formData.projectType,
        quantity: formData.quantity,
        deadline: formData.deadline,
        budget: formData.budget,
        description: formData.description,
        reference_link: formData.file || 'No reference link provided'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        projectType: '',
        quantity: '',
        deadline: '',
        budget: '',
        description: '',
        file: '',
        honeypot: ''
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  // -----------------------------------------------------------

  return (
    <>
      {/* Hero Section - Marquee Style */}
      <section className="quote-hero">
        <div className="hero-marquee">
          <div className="marquee-track">
            <span>QUOTE</span>
            <span className="dot">●</span>
            <span>ESTIMATE</span>
            <span className="dot">●</span>
            <span>PRICING</span>
            <span className="dot">●</span>
            <span>BUDGET</span>
            <span className="dot">●</span>
            <span>QUOTE</span>
            <span className="dot">●</span>
            <span>ESTIMATE</span>
            <span className="dot">●</span>
            <span>PRICING</span>
            <span className="dot">●</span>
            <span>BUDGET</span>
            <span className="dot">●</span>
          </div>
        </div>
        <div className="hero-center">
          <h1>GET A QUOTE</h1>
          <p>Tell us about your project and get a detailed quote within 24 hours</p>
        </div>
        <div className="hero-marquee reverse">
          <div className="marquee-track">
            <span>PROPOSAL</span>
            <span className="dot">●</span>
            <span>CONSULTATION</span>
            <span className="dot">●</span>
            <span>PLANNING</span>
            <span className="dot">●</span>
            <span>SOLUTION</span>
            <span className="dot">●</span>
            <span>PROPOSAL</span>
            <span className="dot">●</span>
            <span>CONSULTATION</span>
            <span className="dot">●</span>
            <span>PLANNING</span>
            <span className="dot">●</span>
            <span>SOLUTION</span>
            <span className="dot">●</span>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="quote-form-section">
        <div className="container">
          <div className="quote-grid">
            <div className="quote-form-wrapper">
              {submitStatus === 'success' ? (
                <div className="success-state">
                  <div className="success-icon">✓</div>
                  <h2>Quote Request Received!</h2>
                  <p>Thank you for your interest in Printolution. Our team will review your requirements and get back to you within 24 hours with a detailed quote.</p>
                  <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
              ) : submitStatus === 'error' ? (
                <div className="error-state">
                  <div className="error-icon">✗</div>
                  <h2>Submission Failed</h2>
                  <p>Sorry, there was an error submitting your quote request. Please try again or contact us directly.</p>
                  <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={() => setSubmitStatus(null)}
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form className="quote-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                  />

                  <div className="form-section">
                    <h3 className="form-section-title">Contact Information</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
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
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Company/Organization</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 className="form-section-title">Project Details</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="serviceType">Service Type *</label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                        >
                          {serviceTypes.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="projectType">Project Type *</label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          disabled={!formData.serviceType}
                        >
                          <option value="">Select Project Type</option>
                          {formData.serviceType && projectTypes[formData.serviceType]?.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="quantity">Quantity Required</label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g., 500 pieces, 1000 units"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="deadline">Deadline</label>
                        <input
                          type="date"
                          id="deadline"
                          name="deadline"
                          value={formData.deadline}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="budget">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        {budgetRanges.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="description">Project Description *</label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Please describe your project requirements, specifications, and any other details that would help us understand your needs..."
                      ></textarea>
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="file">Reference Work Link</label>
                      <input
                        type="url"
                        id="file"
                        name="file"
                        value={formData.file}
                        onChange={handleChange}
                        placeholder="https://drive.google.com/... or https://behance.net/..."
                      />
                      <small className="form-help">Share a link to your reference work, inspiration, or similar projects (Google Drive, Behance, Dribbble, etc.)</small>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                </form>
              )}
            </div>

            <div className="quote-sidebar">
              <div className="sidebar-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Why Choose Us?</h3>
                <ul className="benefits-list">
                  <li><span className="check-icon">✓</span> Fast turnaround times</li>
                  <li><span className="check-icon">✓</span> Competitive pricing</li>
                  <li><span className="check-icon">✓</span> Premium quality materials</li>
                  <li><span className="check-icon">✓</span> Free design consultation</li>
                  <li><span className="check-icon">✓</span> Pan-India delivery</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                    <rect x="9" y="3" width="6" height="4" rx="1"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <h3>What Happens Next?</h3>
                <div className="steps-list">
                  <div className="step">
                    <span className="step-num">1</span>
                    <div className="step-content">
                      <h4>Review</h4>
                      <p>We review your requirements</p>
                    </div>
                  </div>
                  <div className="step">
                    <span className="step-num">2</span>
                    <div className="step-content">
                      <h4>Prepare</h4>
                      <p>Our team prepares a detailed quote</p>
                    </div>
                  </div>
                  <div className="step">
                    <span className="step-num">3</span>
                    <div className="step-content">
                      <h4>Contact</h4>
                      <p>We contact you within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-card highlight-card">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h3>Need Immediate Help?</h3>
                <p>Call us for urgent requirements or quick consultation</p>
                <a href="+91 97731 54466" className="phone-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  +91 97731 54466 
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Quote
