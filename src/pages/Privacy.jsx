import { Link } from 'react-router-dom'

function Privacy() {
  const lastUpdated = "December 2024"

  const sections = [
    {
      title: "1. Information We Collect",
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
      title: "2. How We Use Your Information",
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
      title: "3. Information Sharing",
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
      title: "4. Data Security",
      content: [
        {
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
        }
      ]
    },
    {
      title: "5. Cookies and Tracking",
      content: [
        {
          text: "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings, though some features may not function properly if cookies are disabled."
        }
      ]
    },
    {
      title: "6. Your Rights",
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
      title: "7. Data Retention",
      content: [
        {
          text: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Order information is typically retained for 7 years for tax and legal purposes."
        }
      ]
    },
    {
      title: "8. Children's Privacy",
      content: [
        {
          text: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it."
        }
      ]
    },
    {
      title: "9. Changes to This Policy",
      content: [
        {
          text: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically."
        }
      ]
    },
    {
      title: "10. Contact Us",
      content: [
        {
          text: "If you have any questions about this Privacy Policy or our data practices, please contact us at:",
          contactInfo: true
        }
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="container">
          <span className="page-badge">LEGAL</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="legal-content">
        <div className="container">
          <div className="legal-intro">
            <p>
              At Printolution, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div className="legal-sections">
            {sections.map((section, index) => (
              <div key={index} className="legal-section">
                <h2>{section.title}</h2>
                {section.content.map((item, i) => (
                  <div key={i} className="section-content">
                    {item.subtitle && <h3>{item.subtitle}</h3>}
                    {item.text && <p>{item.text}</p>}
                    {item.list && (
                      <ul>
                        {item.list.map((listItem, j) => (
                          <li key={j}>{listItem}</li>
                        ))}
                      </ul>
                    )}
                    {item.contactInfo && (
                      <div className="contact-info">
                        <p><strong>Printolution</strong></p>
                        <p>Email: <a href="mailto:printolutionrjk@gmail.com">printolutionrjk@gmail.com</a></p>
                        <p>Phone: <a href="tel:+919724718880">+91 97247 18880</a></p>
                        <p>Address: Rajkot, Gujarat, India - 360001</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="legal-nav">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Privacy
