import { useState } from 'react'
import { Link } from 'react-router-dom'

function About() {

  return (
    <>
      {/* Hero Section - Marquee Style */}
      <section className="about-hero">
        <div className="hero-marquee">
          <div className="marquee-track">
            <span>CREATIVE</span>
            <span className="dot">●</span>
            <span>INNOVATIVE</span>
            <span className="dot">●</span>
            <span>QUALITY</span>
            <span className="dot">●</span>
            <span>TRUSTED</span>
            <span className="dot">●</span>
            <span>CREATIVE</span>
            <span className="dot">●</span>
            <span>INNOVATIVE</span>
            <span className="dot">●</span>
            <span>QUALITY</span>
            <span className="dot">●</span>
            <span>TRUSTED</span>
            <span className="dot">●</span>
          </div>
        </div>
        <div className="hero-center">
          <h1>ABOUT US</h1>
          <p>Transforming ideas into premium print since 2024</p>
        </div>
        <div className="hero-marquee reverse">
          <div className="marquee-track">
            <span>EXCELLENCE</span>
            <span className="dot">●</span>
            <span>PASSION</span>
            <span className="dot">●</span>
            <span>DEDICATION</span>
            <span className="dot">●</span>
            <span>SUCCESS</span>
            <span className="dot">●</span>
            <span>EXCELLENCE</span>
            <span className="dot">●</span>
            <span>PASSION</span>
            <span className="dot">●</span>
            <span>DEDICATION</span>
            <span className="dot">●</span>
            <span>SUCCESS</span>
            <span className="dot">●</span>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>Founded in 2024, Printolution was born out of a passion for creativity and a commitment to delivering excellence. What started as a small venture has grown into a trusted name in the printing and design industry, serving 45+ satisfied clients across diverse sectors.</p>
              <p>We believe that every project tells a story, and our mission is to bring those stories to life with precision, creativity, and care. From startups to established brands, we've partnered with businesses to create impactful designs and high-quality prints that leave a lasting impression.</p>
            </div>
            <div className="story-image">
              <img 
                src="/img/Main logo.png" 
                alt="Printolution Logo" 
                className="story-logo"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Founders */}
      <section className="founders">
        <div className="container">
          <h2 className="section-title">Meet Our Founders</h2>
          <div className="founders-grid">
            {/* Founder 1 */}
            <div className="card">
                
             
              <div className="profile-pic">
                <img src="/img/rutu.jpg" alt="Rutvi Vekariya" />
              </div>
              <div className="bottom">
                <div className="content">
                  <span className="name">Rutvi Satasiya</span>
                  <span className="about-me">Co-Founder & Creative Director. Visionary leader with a passion for design excellence and innovation in print media.</span>
                </div>
                <div className="bottom-bottom">
                  <div className="social-links-container">
                    <a href="https://www.instagram.com/rutu__2708?igsh=MXN4dzYwa3FpYWtldQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/rutvi-vekariya-b98972170/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                    </a>
                  </div>
                  <button className="button">Contact</button>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="card">
          
              <div className="profile-pic">
                <img src="/img/jatin.jpg" alt="Jatin Kateliya" />
              </div>
              <div className="bottom">
                <div className="content">
                  <span className="name">Jatin Kateliya</span>
                    <span className="about-me">Co-Founder & Operations Head. Expert in production management ensuring quality and timely delivery for every project.</span>
                </div>
                <div className="bottom-bottom">
                  <div className="social-links-container">
                    <a href="https://www.instagram.com/jatin_kateliya_06?igsh=d2ppMWgwaWc4OXBq" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/jatin-kateliya-018908216/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                    </a>
                  </div>
                  <button className="button">Contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="beliefs">
        <div className="container">
          <h2 className="section-title">What We Believe In</h2>
          <div className="beliefs-grid">
            <div className="belief-card">
              <div className="belief-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 0 0 0-1.41z"/>
                </svg>
              </div>
              <h3>Creativity First</h3>
              <p>Every design should be unique and tailored to your brand's identity</p>
            </div>
            <div className="belief-card">
              <div className="belief-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Quality Over Quantity</h3>
              <p>We never compromise on the quality of materials or craftsmanship</p>
            </div>
            <div className="belief-card">
              <div className="belief-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3>Customer-Centric Approach</h3>
              <p>Your satisfaction is our success, and we go the extra mile to ensure it</p>
            </div>
            <div className="belief-card">
              <div className="belief-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3>Sustainability Matters</h3>
              <p>We are committed to eco-friendly practices in all our operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="12" cy="12" r="1.5"/>
                  <path d="M12 3v2"/>
                  <path d="M12 19v2"/>
                  <path d="M3 12h2"/>
                  <path d="M19 12h2"/>
                </svg>
              </div>
              <h2>Our Vision</h2>
              <p>To become India's most trusted and innovative printing partner, setting new standards in quality, creativity, and customer satisfaction while championing sustainable practices in the industry.</p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 21V6"/>
                  <path d="M4 6c0 0 1-2 6-2s6 2 10 2 4-2 4-2v10s0 2-4 2-6-2-10-2-6 2-6 2"/>
                </svg>
              </div>
              <h2>Our Mission</h2>
              <p>To empower businesses and individuals with creative printing solutions that make lasting impressions. We strive to deliver exceptional quality, innovative designs, and outstanding service in every project we undertake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">45+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2024</div>
              <div className="stat-label">Year Founded</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to bring your vision to life?</h2>
          <Link to="/quote" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </>
  )
}

export default About
