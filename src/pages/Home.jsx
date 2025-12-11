import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [activeService, setActiveService] = useState('design')
  const [activeTestimonial, setActiveTestimonial] = useState(1)
  const [countersAnimated, setCountersAnimated] = useState(false)
  const [darkSectionActive, setDarkSectionActive] = useState(false)
  const [bottomSectionActive, setBottomSectionActive] = useState(false)
  const highlightsRef = useRef(null)
  const darkSectionRef = useRef(null)
  const bottomSectionRef = useRef(null)

  // Section theme transition on scroll
  useEffect(() => {
    const handleSectionTransitions = () => {
      // Dark section - transitions from white to black when entering
      if (darkSectionRef.current) {
        const rect = darkSectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const triggerPoint = windowHeight * 0.7
        
        // Activate dark theme when section is 30% into viewport
        if (rect.top < triggerPoint && rect.bottom > windowHeight * 0.3) {
          setDarkSectionActive(true)
        } else {
          setDarkSectionActive(false)
        }
      }

      // Bottom section - transitions from black to white when entering
      if (bottomSectionRef.current) {
        const rect = bottomSectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const triggerPoint = windowHeight * 0.7
        
        // Activate white theme when bottom section enters
        if (rect.top < triggerPoint) {
          setBottomSectionActive(true)
        } else {
          setBottomSectionActive(false)
        }
      }
    }

    // Initial check
    handleSectionTransitions()

    // Add scroll listener with throttle
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleSectionTransitions()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersAnimated) {
          setCountersAnimated(true)
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    if (highlightsRef.current) {
      observer.observe(highlightsRef.current)
    }

    return () => observer.disconnect()
  }, [countersAnimated])

  const animateCounters = () => {
    const counters = document.querySelectorAll('.highlight-number')
    counters.forEach(counter => {
      const target = counter.getAttribute('data-target')
      const numericTarget = parseInt(target.replace(/\D/g, ''))
      const suffix = target.replace(/\d/g, '')
      const duration = 2000
      const increment = numericTarget / (duration / 16)
      let current = 0

      const updateCounter = () => {
        current += increment
        if (current < numericTarget) {
          counter.textContent = Math.floor(current) + suffix
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target
        }
      }
      updateCounter()
    })
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => prev >= 6 ? 1 : prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const services = {
    design: {
      title: "Design Studio",
      icon: (
        <svg className="service-icon-large" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
          <path d="M8 12h8"/>
        </svg>
      ),
      description: "We craft custom design solutions that perfectly represent your brand identity. From concept to final artwork, we ensure every detail reflects your vision.",
      features: ["Logo & branding design", "Stationery design", "Brochures & catalogs", "Brand identity integration"]
    },
    printing: {
      title: "Printing Solutions",
      icon: (
        <svg className="service-icon-large" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 6 2 18 2 18 9"/>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
          <rect x="6" y="14" width="12" height="8"/>
        </svg>
      ),
      description: "Premium quality printing services with state-of-the-art technology. We deliver exceptional results for all your printing needs.",
      features: ["Offset & digital printing", "Corporate & commercial printing", "Wedding cards & invitations", "High-quality materials"]
    },
    promotional: {
      title: "Promotional Products",
      icon: (
        <svg className="service-icon-large" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 12 20 22 4 22 4 12"/>
          <rect x="2" y="7" width="20" height="5"/>
          <line x1="12" y1="22" x2="12" y2="7"/>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
        </svg>
      ),
      description: "Eye-catching promotional materials that amplify your brand presence. Perfect for events, marketing campaigns, and brand awareness.",
      features: ["Posters, banners & hoardings", "Stickers & labels", "Merchandise printing", "Event materials"]
    },
    packaging: {
      title: "Custom Packaging",
      icon: (
        <svg className="service-icon-large" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      description: "Custom packaging solutions that protect and promote your products. Stand out on shelves with unique, professional packaging.",
      features: ["Custom box design", "Food packet design", "Label & sticker design", "Eco-friendly options"]
    }
  }

  const testimonials = [
    { id: 1, name: "Rajesh Kumar", company: "CEO, TechVista", text: "Printolution transformed our brand identity with their creative designs and flawless printing. The attention to detail and commitment to quality exceeded our expectations. Highly recommend their services!" },
    { id: 2, name: "Priya & Arjun", company: "Wedding Clients", text: "The team delivered our wedding cards on time, and the quality was beyond our expectations. Every detail was perfect, from the paper quality to the printing. Thank you for making our special day even more memorable!" },
    { id: 3, name: "Sneha Desai", company: "Marketing Head, BrightWave", text: "Professional, reliable, and affordable. Printolution is our go-to partner for all printing needs. Their quick turnaround time and consistent quality make them stand out in the industry." },
    { id: 4, name: "Amit Patel", company: "Founder, StartupHub", text: "Outstanding service from start to finish. The design team understood our vision perfectly and delivered exceptional results. Their expertise in branding helped us establish a strong market presence." },
    { id: 5, name: "Kavita Sharma", company: "Owner, Boutique Fashion", text: "The custom packaging designs they created for our products are absolutely stunning. Our customers love the premium feel, and it has significantly enhanced our brand image. Highly professional team!" },
    { id: 6, name: "Vikram Singh", company: "Director, Events & More", text: "We've worked with Printolution for multiple events, and they never disappoint. From banners to brochures, everything is top-notch. Their ability to handle tight deadlines is impressive!" }
  ]

  const faqs = [
    { q: "What file formats do you accept?", a: "We accept AI, PSD, PDF, PNG, and JPEG files. For best results, provide vector files (AI or PDF)." },
    { q: "Do you deliver pan-India?", a: "Yes, we deliver across India with reliable courier partners." },
    { q: "What is the minimum order quantity?", a: "MOQ depends on the product. Contact us for specific requirements." },
    { q: "Do you provide in-house design services?", a: "Yes, our creative team offers complete design services from concept to final artwork." }
  ]

  const [activeFaq, setActiveFaq] = useState(null)

  return (
    <>
      {/* Top Section Wrapper */}
      <div className={`top-section-wrapper ${darkSectionActive ? 'transitioning-out' : ''}`}>
        <div className="gradient-wave"></div>
        <div className="floating-particles">
          {[...Array(6)].map((_, i) => <div key={i} className="particle"></div>)}
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-blob"></div>
          <div className="hero-grain"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="hero-headline">
                  <span className="word">Your</span>{' '}
                  <span className="word">One-Stop</span>{' '}
                  <span className="word">Destination</span>{' '}
                  <span className="word">for</span>{' '}
                  <span className="word highlight-yellow">Creative</span>{' '}
                  <span className="word highlight-yellow">Printing</span>{' '}
                  <span className="word highlight-yellow">&</span>{' '}
                  <span className="word highlight-yellow">Designing</span>{' '}
                  <span className="word">Solutions.</span>
                </h1>
                <p className="hero-subtext">We turn your ideas into reality through innovative design and premium-quality printing services tailored to your needs.</p>
                <div className="hero-cta">
                  <Link to="/quote" className="btn btn-primary">Get a Quote</Link>
                  <Link to="/portfolio" className="btn btn-secondary">See Work</Link>
                </div>
              </div>
              <div className="hero-right">
                <div className="mockup-stack">
                  <div className="mockup mockup-1"></div>
                  <div className="mockup mockup-2"></div>
                  <div className="mockup mockup-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-cue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14m0 0l7-7m-7 7l-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </section>

        {/* Highlights & Banner */}
        <section className="highlights-banner-section">
          <div className="container">
            <div className="banner-top">
              <img src="/Final-Printolution/img/Web Banner.gif" alt="Printolution Services Banner" className="banner-img" />
            </div>
            <div className="highlights-horizontal" ref={highlightsRef}>
              <div className="highlight-card">
                <div className="highlight-number" data-target="45">0</div>
                <div className="highlight-label">Satisfied Clients</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-number" data-target="1000">0</div>
                <div className="highlight-label">Projects Completed</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-number" data-target="2023">0</div>
                <div className="highlight-label">Year Founded</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-number" data-target="100%">0</div>
                <div className="highlight-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services" id="services">
          <div className="container">
            <div className="services-wrapper">
              <div className="services-sidebar">
                <div className="services-badge">OUR SERVICES</div>
                <p className="services-intro">Creative and digital solutions to help your brand grow, connect, and stand out.</p>
                <div className="services-menu">
                  {[
                    { key: 'design', num: '01', name: 'Design Studio' },
                    { key: 'printing', num: '02', name: 'Printing Solutions' },
                    { key: 'promotional', num: '03', name: 'Promotional Products' },
                    { key: 'packaging', num: '04', name: 'Custom Packaging' }
                  ].map(item => (
                    <button
                      key={item.key}
                      className={`service-menu-item ${activeService === item.key ? 'active' : ''}`}
                      onClick={() => setActiveService(item.key)}
                    >
                      <span className="service-number">{item.num}</span>
                      <span className="service-name">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="services-content">
                {Object.entries(services).map(([key, service]) => (
                  <div key={key} className={`service-panel ${activeService === key ? 'active' : ''}`}>
                    <div className="service-header">
                      <div className="service-icon-box">{service.icon}</div>
                      <h3 className="service-title">{service.title}</h3>
                    </div>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, i) => (
                        <li key={i}><span className="feature-check">✓</span> {feature}</li>
                      ))}
                    </ul>
                    <Link to="/services" className="service-cta-btn">Get Started →</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Dark Section Wrapper */}
      <div className={`dark-section-wrapper ${darkSectionActive ? 'theme-active' : ''}`} ref={darkSectionRef}>
        <div className="section-transition-overlay"></div>
        <div className="dark-floating-particles">
          {[...Array(6)].map((_, i) => <div key={i} className="dark-particle"></div>)}
        </div>

        {/* Why Choose Us */}
        <section className="why-choose">
          <div className="container">
            <div className="why-choose-content">
              <div className="why-choose-left">
                <div className="why-circle">
                  <h2>WHY<br/>Choose<br/>US?</h2>
                </div>
              </div>
              <div className="why-choose-right">
                {["Creative & Custom Designs", "High-Quality Technology", "On-Time & Competitive", "Eco-Friendly Practices", "Trusted by 45+ Brands"].map((text, i) => (
                  <div key={i} className="why-reason">
                    <div className="why-reason-content">
                      <span className="why-checkmark">✓</span>
                      <span className="why-text">{text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="process">
          <div className="container">
            <div className="process-header">
              <h2 className="section-title">Our Process</h2>
              <p className="section-subtitle">From sketch to print — perfection in every layer.</p>
            </div>
            <div className="process-flow">
              {[
                { num: '01', title: 'Concept', desc: 'Understanding your vision and requirements', icon: 'sun' },
                { num: '02', title: 'Design', desc: 'Creating stunning visuals that captivate', icon: 'pen' },
                { num: '03', title: 'Print', desc: 'Premium quality production with precision', icon: 'printer' },
                { num: '04', title: 'Deliver', desc: 'On-time delivery to your doorstep', icon: 'truck' }
              ].map((step, i) => (
                <div key={i} className="process-card" data-step={i + 1}>
                  <div className="process-card-inner">
                    <div className="process-icon">
                      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {step.icon === 'sun' && <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/></>}
                        {step.icon === 'pen' && <><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></>}
                        {step.icon === 'printer' && <><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></>}
                        {step.icon === 'truck' && <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>}
                      </svg>
                    </div>
                    <div className="process-number">{step.num}</div>
                    <h3 className="process-title">{step.title}</h3>
                    <p className="process-desc">{step.desc}</p>
                    {i < 3 ? <div className="process-arrow">→</div> : <div className="process-checkmark">✓</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Section Wrapper */}
      <div className={`bottom-section-wrapper ${bottomSectionActive ? 'theme-active' : ''}`} ref={bottomSectionRef}>
        <div className="section-transition-overlay"></div>
        <div className="bottom-floating-particles">
          {[...Array(6)].map((_, i) => <div key={i} className="bottom-particle"></div>)}
        </div>

        {/* Our Work - Portfolio Style */}
        <section className="our-work-portfolio">
          <div className="container">
            <div className="our-work-header">
              <h2 className="section-title">Our Work</h2>
              <p className="section-subtitle">Discover our portfolio of creative solutions that have helped brands stand out and succeed.</p>
            </div>
            <div className="work-list">
              <Link
                to="/portfolio"
                className="work-item-portfolio"
              >
                {/* Hover Video */}
                <div className="work-hover-image">
                  <video autoPlay loop muted playsInline>
                    <source src={`${import.meta.env.BASE_URL}img/portlogo.mp4`} type="video/mp4" />
                  </video>
                </div>
                
                {/* Content */}
                <div className="work-content-portfolio">
                  <span className="work-category">DESIGN</span>
                  <div className="work-title-row">
                    <span className="work-number">01.</span>
                    <h2 className="work-title">Logo Design & Branding</h2>
                  </div>
                </div>
                
                {/* Divider Line */}
                <div className="work-divider"></div>
              </Link>

              <Link
                to="/portfolio"
                className="work-item-portfolio"
              >
                {/* Hover Video */}
                <div className="work-hover-image">
                  <video autoPlay loop muted playsInline>
                    <source src={`${import.meta.env.BASE_URL}img/portlogo.mp4`} type="video/mp4" />
                  </video>
                </div>
                
                {/* Content */}
                <div className="work-content-portfolio">
                  <span className="work-category">BRANDING</span>
                  <div className="work-title-row">
                    <span className="work-number">02.</span>
                    <h2 className="work-title">Broucher & Catalogue</h2>
                  </div>
                </div>
                
                {/* Divider Line */}
                <div className="work-divider"></div>
              </Link>

              <Link
                to="/portfolio"
                className="work-item-portfolio"
              >
                {/* Hover Video */}
                <div className="work-hover-image">
                  <video autoPlay loop muted playsInline>
                    <source src={`${import.meta.env.BASE_URL}img/portlogo.mp4`} type="video/mp4" />
                  </video>
                </div>
                
                {/* Content */}
                <div className="work-content-portfolio">
                  <span className="work-category">BRANDING</span>
                  <div className="work-title-row">
                    <span className="work-number">03.</span>
                    <h2 className="work-title">Product label & Packaging</h2>
                  </div>
                </div>
                
                {/* Divider Line */}
                <div className="work-divider"></div>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Clients */}
        <section className="our-clients">
          <div className="container">
            <h2 className="section-title">Our Clients</h2>
            <p className="section-subtitle">Trusted by leading brands across industries</p>
          </div>
          <div className="clients-marquee">
            <div className="clients-track clients-track-1">
              {[...Array(18)].map((_, i) => (
                <div key={i} className="client-logo">
                  <img src={`/Final-Printolution/OUR CLIENT/${(i % 9) + 1}.png`} alt={`Client ${(i % 9) + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="clients-marquee">
            <div className="clients-track clients-track-2">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="client-logo">
                  <img src={`/Final-Printolution/OUR CLIENT/${(i % 8) + 10}.png`} alt={`Client ${(i % 8) + 10}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us on Social Media */}
        <section className="social-media-section">
          <div className="container">
            <p className="section-subtitle-small">Instagram Feed</p>
            <h2 className="section-title">Join Us on Social Media</h2>
            <div className="social-gallery">
              {[
                { img: '/Final-Printolution/img/Lemongrass.jpg', link: 'https://www.instagram.com/p/DRRdRJDjdxy/?igsh=bzI4Mnphb3I5OXNv' },
                { img: '/Final-Printolution/img/billboard.jpg', link: 'https://www.instagram.com/p/DSC5gRsk7kf/?igsh=dmNiMGNiajIweW44' },
                { img: '/Final-Printolution/img/box.jpg', link: 'https://www.instagram.com/p/DMhvQu7Tn8H/?igsh=bHRhczk3MHlmY3Rr' },
                { img: '/Final-Printolution/img/hoarding.jpeg', link: 'https://www.instagram.com/p/DSCtb93jdz2/?igsh=MXF6MDZucHcyYnp6Mg==' },
                { img: '/Final-Printolution/img/BodyLotion.jpeg', link: 'https://www.instagram.com/p/DRRdbDujfTt/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==' }
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="social-gallery-item">
                  <img src={item.img} alt={`Instagram post ${i + 1}`} />
                  <div className="social-overlay">
                    <svg className="instagram-icon" viewBox="0 0 24 24" fill="white" width="48" height="48">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="container">
            <div className="testimonials-header">
              <h2 className="testimonials-title">
                <span className="title-light">Customer</span> Voices:<br/>
                <span className="title-bold">Hear What</span> <span className="title-light">They Say!</span>
              </h2>
            </div>
            <div className="testimonials-avatars">
              {testimonials.map(t => (
                <button
                  key={t.id}
                  className={`avatar-btn ${activeTestimonial === t.id ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(t.id)}
                >
                  <div className={`avatar-img avatar-${t.id}`}></div>
                </button>
              ))}
            </div>
            <div className="testimonials-content">
              {testimonials.map(t => (
                <div key={t.id} className={`testimonial-item ${activeTestimonial === t.id ? 'active' : ''}`}>
                  <div className="quote-icon">"</div>
                  <h3 className="client-name">{t.name}</h3>
                  <p className="client-company">{t.company}</p>
                  <p className="testimonial-text">{t.text}</p>
                </div>
              ))}
            </div>
            <div className="testimonials-nav">
              <button className="nav-arrow nav-prev" onClick={() => setActiveTestimonial(prev => prev <= 1 ? 6 : prev - 1)}>←</button>
              <button className="nav-arrow nav-next" onClick={() => setActiveTestimonial(prev => prev >= 6 ? 1 : prev + 1)}>→</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item ${activeFaq === i ? 'active' : ''}`}
                  onMouseLeave={() => setActiveFaq(null)}
                >
                  <button
                    className="faq-question"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    onMouseEnter={() => setActiveFaq(i)}
                    onFocus={() => setActiveFaq(i)}
                    onBlur={() => setActiveFaq(null)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">{activeFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container">
          <h2>Let's create something impactful — together.</h2>
          <Link to="/quote" className="btn btn-primary">Start Your Project</Link>
        </div>
      </section>
    </>
  )
}

export default Home
