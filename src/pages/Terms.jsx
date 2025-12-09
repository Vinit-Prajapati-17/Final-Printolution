import { Link } from 'react-router-dom'

function Terms() {
  const lastUpdated = "December 2024"

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        {
          text: "By accessing and using the Printolution website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
        }
      ]
    },
    {
      title: "2. Services",
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
      title: "3. Orders and Payment",
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
      title: "4. Design and Artwork",
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
      title: "5. Production and Delivery",
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
      title: "6. Returns and Refunds",
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
      title: "7. Intellectual Property",
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
      title: "8. Limitation of Liability",
      content: [
        {
          text: "To the maximum extent permitted by law, Printolution shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid for the specific order in question."
        }
      ]
    },
    {
      title: "9. Indemnification",
      content: [
        {
          text: "You agree to indemnify and hold Printolution harmless from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms."
        }
      ]
    },
    {
      title: "10. Governing Law",
      content: [
        {
          text: "These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat."
        }
      ]
    },
    {
      title: "11. Changes to Terms",
      content: [
        {
          text: "We reserve the right to modify these terms at any time. Changes will be effective upon posting to this page. Your continued use of our services constitutes acceptance of any modified terms."
        }
      ]
    },
    {
      title: "12. Contact",
      content: [
        {
          text: "For questions about these Terms of Service, please contact us:",
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
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-updated">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="legal-content">
        <div className="container">
          <div className="legal-intro">
            <p>
              Welcome to Printolution. These Terms of Service govern your use of our website and services. By using our services, you agree to these terms. Please read them carefully.
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
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Terms
