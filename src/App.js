import './App.css';
import Header from './Header';
import InfoDate from './InfoDate';
import Body from './Body';
import Projects from './Projects';

function App() {
  const contactActions = [
    { icon: "📧", label: "Email", link: "mailto:adicampan1974@gmail.com" },
    { icon: "📞", label: "Call", link: "tel:+34637951683" },
    { icon: "💬", label: "WhatsApp", link: "https://wa.me/34637951683" }
  ];

  const socialLinks = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      link: "https://github.com/AdiCampan"
    },
    { icon: "💼", label: "LinkedIn", link: "https://www.linkedin.com/in/adrian-campan-244613232/" }
  ];

  return (
    <div className="App">
      <Header />

      <main className="main-content">
        {/* Left Column: Widgets & Tech */}
        <InfoDate />

        {/* Center Column: Main Content (About Me) */}
        <div className="center-column stretch-column">
          <Body />
        </div>

        {/* Right Column: Contact, Socials & Map */}
        <div className="widgets-column stretch-column">
          <div className="glass-card contact-card full-height-card">
            <div className="widget-label">Professional Contact</div>
            <h3 className="contact-name">ADRIAN CAMPAN</h3>
            <div className="contact-details">
              <p>📍 Onda, Castellón, Spain</p>
              <p>📱 <a href="tel:+34637951683" style={{ color: 'inherit', textDecoration: 'none' }}>+34 637 951 683</a></p>
              <p>📧 <a href="mailto:adicampan1974@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>adicampan1974@gmail.com</a></p>
            </div>

            <div className="contact-actions-grid">
              {contactActions.map((action, i) => {
                const isExternal = action.link.startsWith('http');
                return (
                  <a
                    key={i}
                    href={action.link}
                    className="contact-action-btn"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <span className="action-icon">{action.icon}</span>
                    <span className="action-text">{action.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="social-links-area">
              <div className="widget-label">Find me on</div>
              <div className="social-links-grid">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.link} className="social-item-btn" target="_blank" rel="noreferrer">
                    <span className="social-icon">{social.icon}</span>
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="map-area-wrapper">
              <div className="widget-label">Location</div>
              <iframe
                className="iframe"
                src="https://maps.google.com/?ll=39.969731129782595, -0.25753234645673917&z=10&t=m&output=embed"
                frameBorder="0"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Projects Row (Full Width) */}
        <Projects />
      </main>
    </div>
  );
}

export default App;
