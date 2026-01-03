import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import '../styles/legal.css'

const AnimatedTitle = ({ text, className }) => {
  const letters = text.split('')
  return (
    <motion.h1 className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 100, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: i * 0.05, type: "spring", stiffness: 100 }}
          style={{ display: 'inline-block', transformOrigin: 'bottom' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}

const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i, size: Math.random() * 6 + 2, x: Math.random() * 100, y: Math.random() * 100, duration: Math.random() * 20 + 10
  }))
  return (
    <div className="particles-container">
      {particles.map((p) => (
        <motion.div key={p.id} className="particle"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -30, 0], x: [0, Math.random() * 20 - 10, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  )
}

const Section3D = ({ section, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({ x: (e.clientX - rect.left - rect.width / 2) / 25, y: (e.clientY - rect.top - rect.height / 2) / 25 })
  }

  return (
    <motion.div ref={ref} className="legal-section-3d"
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePosition({ x: 0, y: 0 }) }}
      style={{ transform: isHovered ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)` : 'perspective(1000px) rotateY(0deg) rotateX(0deg)', transition: 'transform 0.1s ease-out' }}
    >
      <div className="section-glow" />
      <motion.div className="section-number-3d" animate={{ rotateY: isHovered ? 360 : 0, scale: isHovered ? 1.2 : 1 }} transition={{ duration: 0.6 }}>
        {String(index + 1).padStart(2, '0')}
      </motion.div>
      <motion.h2 initial={{ x: -50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.05 + index * 0.02 }}>
        {section.title}
      </motion.h2>
      {section.content.map((item, i) => (
        <motion.div key={i} className="section-content-3d" initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.03 }}>
          {item.subtitle && <motion.h3 whileHover={{ x: 10, color: '#FFC107' }} transition={{ duration: 0.3 }}><span className="subtitle-icon">◆</span>{item.subtitle}</motion.h3>}
          {item.text && <p>{item.text}</p>}
          {item.list && (
            <ul className="animated-list">
              {item.list.map((listItem, j) => (
                <motion.li key={j} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: 0.15 + j * 0.02 }} whileHover={{ x: 15, scale: 1.02 }}>
                  <span className="list-bullet" />{listItem}
                </motion.li>
              ))}
            </ul>
          )}
          {item.contactInfo && (
            <motion.div className="contact-card-3d" whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(255,193,7,0.3)' }}>
              <div className="contact-glow" />
              <p><strong>Printolution</strong></p>
              <p>Email: <a href="mailto:printolution2025@gmail.com">printolution2025@gmail.com</a></p>
              <p>Phone: <a href="tel:+919773154466">+91 97731 54466</a></p>
              <p>Address: Ahmedabad, Gujarat, India - 380001</p>
            </motion.div>
          )}
        </motion.div>
      ))}
      <div className="card-shine" />
    </motion.div>
  )
}


function Disclaimer() {
  const lastUpdated = "December 2024"
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const sections = [
    { title: "General Disclaimer", content: [{ text: "The information provided on the Printolution website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website." }] },
    { title: "Product Colors and Appearance", content: [{ text: "Due to variations in screen displays and printing processes, the colors you see on our website may differ slightly from the actual printed product. We recommend requesting physical samples for color-critical projects." }] },
    { title: "Professional Advice Disclaimer", content: [{ text: "The content on this website does not constitute professional design, legal, or business advice. For specific guidance related to your business needs, please consult with appropriate professionals." }] },
    { title: "Third-Party Links", content: [{ text: "Our website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies." }] },
    { title: "Limitation of Liability", content: [{ text: "In no event shall Printolution be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our website or services. This includes:", list: ["Loss of profits or revenue", "Loss of data or information", "Business interruption", "Personal injury or property damage", "Any other damages arising from use of our services"] }] },
    { title: "Accuracy of Information", content: [{ text: "While we endeavor to keep the information on this website accurate and up-to-date, we cannot guarantee that all information is current or complete at all times. Prices, specifications, and availability are subject to change without notice." }] },
    { title: "User Responsibilities", content: [{ text: "Users are responsible for:", list: ["Ensuring the accuracy of information provided in orders", "Reviewing and approving proofs before production", "Providing print-ready artwork that meets specifications", "Ensuring they have rights to use submitted content", "Complying with all applicable laws and regulations"] }] },
    { title: "Intellectual Property", content: [{ text: "All content on this website, including text, graphics, logos, and images, is the property of Printolution or its content suppliers and is protected by intellectual property laws." }] },
    { title: "Website Availability", content: [{ text: "We do not guarantee that our website will be available at all times or that it will be free from errors, viruses, or other harmful components." }] },
    { title: "Changes to This Disclaimer", content: [{ text: "We reserve the right to update or modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting to this page." }] },
    { title: "Governing Law", content: [{ text: "This disclaimer shall be governed by and construed in accordance with the laws of India. Any disputes arising from this disclaimer shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat." }] },
    { title: "Contact Information", content: [{ text: "If you have any questions about this disclaimer, please contact us:", contactInfo: true }] }
  ]


  return (
    <div className="legal-page-ultra" ref={containerRef}>
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
      <div className="cyber-grid" />
      
      <section className="legal-hero-ultra disclaimer-hero">
        <motion.div className="hero-orb hero-orb-1" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.div className="hero-orb hero-orb-2" animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 5, repeat: Infinity }} />
        <div className="container">
          <motion.span className="page-badge-ultra" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
            <span className="badge-glow" />LEGAL NOTICE
          </motion.span>
          <AnimatedTitle text="Disclaimer" className="legal-title-ultra" />
          <motion.p className="legal-updated-ultra" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            <svg className="update-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="currentColor"/>
            </svg>Last Updated: {lastUpdated}
          </motion.p>
          <motion.div className="scroll-indicator" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <span>Scroll to explore</span><div className="scroll-arrow">↓</div>
          </motion.div>
        </div>
      </section>

      <section className="legal-intro-ultra">
        <div className="container">
          <motion.div className="intro-card" initial={{ opacity: 0, y: 50, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="intro-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="#FFC107"/>
              </svg>
            </div>
            <p>Please read this disclaimer carefully before using the Printolution website and services. By accessing or using our website, you acknowledge that you have read, understood, and agree to this disclaimer.</p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content-ultra">
        <div className="container">
          <div className="sections-grid">
            {sections.map((section, index) => (<Section3D key={index} section={section} index={index} />))}
          </div>
          <motion.div className="legal-nav-ultra" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to="/privacy" className="nav-link-ultra">
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1 2 14 2.9 14 4V6H16C17.1 6 18 6.9 18 8V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8C6 6.9 6.9 6 8 6H10V4C10 2.9 10.9 2 12 2ZM12 4C11.4 4 11 4.4 11 5V6H13V5C13 4.4 12.6 4 12 4Z" fill="currentColor"/>
              </svg>
              <span className="nav-text">Privacy Policy</span><span className="nav-arrow">→</span>
            </Link>
            <Link to="/terms" className="nav-link-ultra">
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
              </svg>
              <span className="nav-text">Terms of Service</span><span className="nav-arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Disclaimer
