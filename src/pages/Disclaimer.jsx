import { Link } from 'react-router-dom'

function Disclaimer() {
  const lastUpdated = "December 2024"

  const sections = [
    {
      title: "1. General Disclaimer",
      content: [
        {
          text: "The information provided on the Printolution website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website."
        }
      ]
    },
    {
      title: "2. Product Colors and Appearance",
      content: [
        {
          text: "Due to variations in screen displays and printing processes, the colors you see on our website may differ slightly from the actual printed product. We recommend requesting physical samples for color-critical projects. While we use professional calibration and quality control measures, minor variations in color between digital proofs and final prints are inherent to the printing process."
        }
      ]
    },
    {
      title: "3. Professional Advice Disclaimer",
      content: [
        {
          text: "The content on this website does not constitute professional design, legal, or business advice. For specific guidance related to your business needs, please consult with appropriate professionals. Our design suggestions and recommendations are provided as general guidance and should be evaluated based on your specific requirements."
        }
      ]
    },
    {
      title: "4. Third-Party Links",
      content: [
        {
          text: "Our website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies. Linking does not imply endorsement of the linked website."
        }
      ]
    },
    {
      title: "5. Limitation of Liability",
      content: [
        {
          text: "In no event shall Printolution, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services. This includes but is not limited to:",
          list: [
            "Loss of profits or revenue",
            "Loss of data or information",
            "Business interruption",
            "Personal injury or property damage",
            "Any other damages arising from use of our services"
          ]
        }
      ]
    },
    {
      title: "6. Accuracy of Information",
      content: [
        {
          text: "While we endeavor to keep the information on this website accurate and up-to-date, we cannot guarantee that all information is current or complete at all times. Prices, specifications, and availability are subject to change without notice. Please confirm details before placing orders."
        }
      ]
    },
    {
      title: "7. User Responsibilities",
      content: [
        {
          text: "Users are responsible for:",
          list: [
            "Ensuring the accuracy of information provided in orders",
            "Reviewing and approving proofs before production",
            "Providing print-ready artwork that meets specifications",
            "Ensuring they have rights to use submitted content",
            "Complying with all applicable laws and regulations"
          ]
        }
      ]
    },
    {
      title: "8. Intellectual Property",
      content: [
        {
          text: "All content on this website, including text, graphics, logos, and images, is the property of Printolution or its content suppliers and is protected by intellectual property laws. Unauthorized use of any content from this website may violate copyright, trademark, and other laws."
        }
      ]
    },
    {
      title: "9. Website Availability",
      content: [
        {
          text: "We do not guarantee that our website will be available at all times or that it will be free from errors, viruses, or other harmful components. We reserve the right to suspend or discontinue the website or any part of it at any time without notice."
        }
      ]
    },
    {
      title: "10. Changes to This Disclaimer",
      content: [
        {
          text: "We reserve the right to update or modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting to this page. Your continued use of the website after any changes indicates acceptance of the modified disclaimer."
        }
      ]
    },
    {
      title: "11. Governing Law",
      content: [
        {
          text: "This disclaimer shall be governed by and construed in accordance with the laws of India. Any disputes arising from this disclaimer shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat."
        }
      ]
    },
    {
      title: "12. Contact Information",
      content: [
        {
          text: "If you have any questions about this disclaimer, please contact us:",
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
          <h1 className="legal-title">Disclaimer</h1>
          <p className="legal-updated">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="legal-content">
        <div className="container">
          <div className="legal-intro">
            <p>
              Please read this disclaimer carefully before using the Printolution website and services. By accessing or using our website, you acknowledge that you have read, understood, and agree to this disclaimer.
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
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Disclaimer
