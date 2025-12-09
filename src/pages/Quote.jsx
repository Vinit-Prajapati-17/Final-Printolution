import { useState } from 'react'
import { Link } from 'react-router-dom'

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
    file: null,
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
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
      if (name === 'serviceType') {
        setFormData(prev => ({ ...prev, [name]: value, projectType: '' }))
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.honeypot) return

    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="quote-hero">
        <div className="quote-hero-bg"></div>
        <div className="container">
          <div className="quote-hero-content">
            <span className="page-badge">GET A QUOTE</span>
            <h1 className="quote-hero-title">
              Tell Us About Your <span className="highlight">Project</span>
            </h1>
            <p className="quote-hero-subtitle">
              Fill out the form below and we'll get back to you with a detailed quote within 24 hours.
            </p>
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
                      <label htmlFor="file">Attach Reference Files</label>
                      <div className="file-upload">
                        <input
                          type="file"
                          id="file"
                          name="file"
                          onChange={handleChange}
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.ai,.psd"
                        />
                        <div className="file-upload-label">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="17 8 12 3 7 8"/>
                            <line x1="12" y1="3" x2="12" y2="15"/>
                          </svg>
                          <span>{formData.file ? formData.file.name : 'Drop files or click to upload'}</span>
                          <small>PDF, DOC, JPG, PNG, AI, PSD (Max 10MB)</small>
                        </div>
                      </div>
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
                <h3>Why Choose Us?</h3>
                <ul className="benefits-list">
                  <li>✓ Fast turnaround times</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ Premium quality materials</li>
                  <li>✓ Free design consultation</li>
                  <li>✓ Pan-India delivery</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>What Happens Next?</h3>
                <div className="steps-list">
                  <div className="step">
                    <span className="step-num">1</span>
                    <p>We review your requirements</p>
                  </div>
                  <div className="step">
                    <span className="step-num">2</span>
                    <p>Our team prepares a quote</p>
                  </div>
                  <div className="step">
                    <span className="step-num">3</span>
                    <p>We contact you within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="sidebar-card highlight-card">
                <h3>Need Immediate Help?</h3>
                <p>Call us for urgent requirements</p>
                <a href="tel:+919724718880" className="phone-link">+91 97247 18880</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Quote
