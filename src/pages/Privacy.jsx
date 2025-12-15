import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import '../styles/legal.css'

// Animated text that reveals letter by letter
const AnimatedTitle = ({ text, className }) => {
  const letters = text.split('')
  return (
    <motion.h1 className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 100, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.05,
            type: "spring",
            stiffness: 100
          }}
          style={{ display: 'inline-block', transformOrigin: 'bottom' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }))

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// 3D Card Section Component
const Section3D = ({ section, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 25
    const y = (e.clientY - rect.top - rect.height / 2) / 25
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={ref}
      className="legal-section-3d"
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePosition({ x: 0, y: 0 }) }}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div className="section-glow" />
      <motion.div 
        className="section-number-3d"
        animate={{ 
          rotateY: isHovered ? 360 : 0,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.6 }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>
      
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.05 + index * 0.02 }}
      >
        {section.title}
      </motion.h2>

      {section.content.map((item, i) => (
        <motion.div 
          key={i} 
          className="section-content-3d"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.03 }}
        >
          {item.subtitle && (
            <motion.h3
              whileHover={{ x: 10, color: '#FFC107' }}
              transition={{ duration: 0.3 }}
            >
              <span className="subtitle-icon">◆</span>
              {item.subtitle}
            </motion.h3>
          )}
          {item.text && <p>{item.text}</p>}
          {item.list && (
            <ul className="animated-list">
              {item.list.map((listItem, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.15 + j * 0.02 }}
                  whileHover={{ x: 15, scale: 1.02 }}
                >
                  <span className="list-bullet" />
                  {listItem}
                </motion.li>
              ))}
            </ul>
          )}
          {item.contactInfo && (
            <motion.div 
              className="contact-card-3d"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(255,193,7,0.3)' }}
            >
              <div className="contact-glow" />
              <p><strong>Printolution</strong></p>
              <p>Email: <a href="mailto:printolutionrjk@gmail.com">printolutionrjk@gmail.com</a></p>
              <p>Phone: <a href="tel:+919724718880">+91 97247 18880</a></p>
              <p>Address: Rajkot, Gujarat, India - 360001</p>
            </motion.div>
          )}
        </motion.div>
      ))}
      
      <div className="card-shine" />
    </motion.div>
  )
}

function Privacy() {
  const lastUpdated = "December 2024"
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you use our services, we may collect personal information such as your name, email address, phone number, shipping address, and payment details. This information is collected when you place an order, request a quote, sign up for our newsletter, or contact us."
        },
        {
          subtitle: "Business Information",
          text: "If you represent a business, we may also collect your company name, job title, and business contact information."
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and time spent on our site."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          text: "We use the information we collect for the following purposes:",
          list: [
            "To process and fulfill your orders",
            "To communicate with you about your orders and provide customer support",
            "To send you marketing communications (with your consent)",
            "To improve our website and services",
            "To prevent fraud and ensure security",
            "To comply with legal obligations"
          ]
        }
      ]
    },
    {
      title: "Information Sharing",
      content: [
        {
          text: "We do not sell, trade, or rent your personal information to third parties. We may share your information with:",
          list: [
            "Service providers who assist us in operating our business (payment processors, shipping partners)",
            "Professional advisors (lawyers, accountants) when necessary",
            "Law enforcement or government authorities when required by law",
            "Business partners with your explicit consent"
          ]
        }
      ]
    },
    {
      title: "Data Security",
      content: [
        {
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
        }
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        {
          text: "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings, though some features may not function properly if cookies are disabled."
        }
      ]
    },
    {
      title: "Your Rights",
      content: [
        {
          text: "You have the right to:",
          list: [
            "Access the personal information we hold about you",
            "Request correction of inaccurate information",
            "Request deletion of your personal information",
            "Opt-out of marketing communications",
            "Lodge a complaint with a data protection authority"
          ]
        }
      ]
    },
    {
      title: "Data Retention",
      content: [
        {
          text: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Order information is typically retained for 7 years for tax and legal purposes."
        }
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        {
          text: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it."
        }
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        {
          text: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically."
        }
      ]
    },
    {
      title: "Contact Us",
      content: [
        {
          text: "If you have any questions about this Privacy Policy or our data practices, please contact us at:",
          contactInfo: true
        }
      ]
    }
  ]

  return (
    <div className="legal-page-ultra" ref={containerRef}>
      {/* Progress Bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Animated Background Grid */}
      <div className="cyber-grid" />
      
      {/* Hero Section */}
      <section className="legal-hero-ultra privacy-hero">
        <motion.div 
          className="hero-orb hero-orb-1"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="hero-orb hero-orb-2"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="container">
          <motion.span 
            className="page-badge-ultra"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <span className="badge-glow" />
            YOUR DATA MATTERS
          </motion.span>
          
          <AnimatedTitle text="Privacy Policy" className="legal-title-ultra" />
          
          <motion.p 
            className="legal-updated-ultra"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <svg className="update-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2ZM12 4C11.4 4 11 4.4 11 5V6H13V5C13 4.4 12.6 4 12 4Z" fill="currentColor"/>
            </svg>
            Last Updated: {lastUpdated}
          </motion.p>
          
          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span>Scroll to explore</span>
            <div className="scroll-arrow">↓</div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="legal-intro-ultra">
        <div className="container">
          <motion.div 
            className="intro-card"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="intro-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10V11.5C15.4 11.5 16 12.1 16 12.7V16.2C16 16.8 15.4 17.4 14.8 17.4H9.2C8.6 17.4 8 16.8 8 16.2V12.7C8 12.1 8.6 11.5 9.2 11.5V10C9.2 8.6 10.6 7 12 7ZM12 8.2C11.2 8.2 10.4 8.8 10.4 10V11.5H13.6V10C13.6 8.8 12.8 8.2 12 8.2Z" fill="#FFC107"/>
              </svg>
            </div>
            <p>
              At Printolution, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="legal-content-ultra">
        <div className="container">
          <div className="sections-grid">
            {sections.map((section, index) => (
              <Section3D key={index} section={section} index={index} />
            ))}
          </div>

          {/* Navigation Links */}
          <motion.div 
            className="legal-nav-ultra"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/terms" className="nav-link-ultra">
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
              </svg>
              <span className="nav-text">Terms of Service</span>
              <span className="nav-arrow">→</span>
            </Link>
            <Link to="/disclaimer" className="nav-link-ultra">
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="currentColor"/>
              </svg>
              <span className="nav-text">Disclaimer</span>
              <span className="nav-arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Privacy