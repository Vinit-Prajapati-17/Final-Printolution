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

function Terms() {
  const lastUpdated = "December 2024"
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        {
          text: "By accessing and using the Printolution website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
        }
      ]
    },
    {
      title: "Services",
      content: [
        {
          text: "Printolution provides design and printing services including but not limited to:",
          list: [
            "Graphic design and branding",
            "Digital and offset printing",
            "Promotional materials and merchandise",
            "Custom packaging solutions",
            "Wedding cards and invitations"
          ]
        },
        {
          text: "We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice."
        }
      ]
    },
    {
      title: "Orders and Payment",
      content: [
        {
          subtitle: "Order Placement",
          text: "All orders are subject to acceptance and availability. We reserve the right to refuse any order for any reason."
        },
        {
          subtitle: "Pricing",
          text: "Prices are quoted based on specifications provided by the customer. Final pricing may vary based on changes in specifications, materials, or quantities. All prices are in Indian Rupees (INR) unless otherwise specified."
        },
        {
          subtitle: "Payment Terms",
          text: "Payment terms will be specified in your quotation. Generally, we require an advance payment before production begins. Full payment must be received before delivery unless credit terms have been approved."
        }
      ]
    },
    {
      title: "Design and Artwork",
      content: [
        {
          subtitle: "Customer-Provided Artwork",
          text: "When providing artwork, customers are responsible for ensuring files are print-ready and meet our specifications. We are not responsible for errors in customer-provided files unless proofing services are requested."
        },
        {
          subtitle: "Design Services",
          text: "For design projects, we provide a specified number of revision rounds as agreed upon. Additional revisions may incur extra charges."
        },
        {
          subtitle: "Approval",
          text: "Customers must approve digital proofs before production begins. Once approved, we are not liable for errors that were present in the approved proof."
        }
      ]
    },
    {
      title: "Production and Delivery",
      content: [
        {
          subtitle: "Turnaround Time",
          text: "Estimated production and delivery times are provided as guidelines and are not guaranteed. Delays may occur due to factors beyond our control."
        },
        {
          subtitle: "Shipping",
          text: "We ship to addresses across India. Shipping charges are calculated based on destination and package weight. Risk of loss transfers to the customer upon delivery to the shipping carrier."
        },
        {
          subtitle: "Quantity Tolerance",
          text: "Industry standard allows for a ±10% variation in final quantity for commercial printing. You will be billed for the actual quantity delivered."
        }
      ]
    },
    {
      title: "Returns and Refunds",
      content: [
        {
          subtitle: "Defective Products",
          text: "If products are defective due to our error, please notify us within 7 days of delivery. We will replace defective items or issue a refund at our discretion."
        },
        {
          subtitle: "Non-Returnable Items",
          text: "Custom printed products cannot be returned unless they are defective or do not match the approved proof."
        },
        {
          subtitle: "Cancellation",
          text: "Orders may be cancelled before production begins. Once production has started, cancellation may result in partial or no refund depending on the work completed."
        }
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        {
          text: "Customers represent that they have all necessary rights to use any artwork, images, logos, or content provided for printing. Printolution is not responsible for copyright infringement resulting from customer-provided materials."
        },
        {
          text: "We reserve the right to use completed work for portfolio and promotional purposes unless otherwise agreed in writing."
        }
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        {
          text: "To the maximum extent permitted by law, Printolution shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid for the specific order in question."
        }
      ]
    },
    {
      title: "Indemnification",
      content: [
        {
          text: "You agree to indemnify and hold Printolution harmless from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms."
        }
      ]
    },
    {
      title: "Governing Law",
      content: [
        {
          text: "These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat."
        }
      ]
    },
    {
      title: "Changes to Terms",
      content: [
        {
          text: "We reserve the right to modify these terms at any time. Changes will be effective upon posting to this page. Your continued use of our services constitutes acceptance of any modified terms."
        }
      ]
    },
    {
      title: "Contact",
      content: [
        {
          text: "For questions about these Terms of Service, please contact us:",
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
      <section className="legal-hero-ultra">
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
            LEGAL DOCUMENT
          </motion.span>
          
          <AnimatedTitle text="Terms of Service" className="legal-title-ultra" />
          
          <motion.p 
            className="legal-updated-ultra"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <svg className="update-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6V9L16 5L12 1V4C7.58 4 4 7.58 4 12C4 13.57 4.46 15.03 5.24 16.26L6.7 14.8C6.25 13.97 6 13 6 12C6 8.69 8.69 6 12 6ZM18.76 7.74L17.3 9.2C17.74 10.04 18 11 18 12C18 15.31 15.31 18 12 18V15L8 19L12 23V20C16.42 20 20 16.42 20 12C20 10.43 19.54 8.97 18.76 7.74Z" fill="currentColor"/>
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
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 12H16V14H8V12ZM8 16H13V18H8V16ZM8 8H16V10H8V8Z" fill="#FFC107"/>
              </svg>
            </div>
            <p>
              Welcome to Printolution. These Terms of Service govern your use of our website and services. 
              By using our services, you agree to these terms. Please read them carefully.
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
            <Link to="/privacy" className="nav-link-ultra">
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2ZM12 4C11.4 4 11 4.4 11 5V6H13V5C13 4.4 12.6 4 12 4Z" fill="currentColor"/>
              </svg>
              <span className="nav-text">Privacy Policy</span>
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

export default Terms