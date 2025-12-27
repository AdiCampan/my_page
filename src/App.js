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
    { icon: "🐙", label: "GitHub", link: "https://github.com/AdiCampan" },
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
              <p>📱 +34 637 951 683</p>
            </div>

            <div className="contact-actions-grid">
              {contactActions.map((action, i) => (
                <a key={i} href={action.link} className="contact-action-btn" target="_blank" rel="noreferrer">
                  <span className="action-icon">{action.icon}</span>
                  <span className="action-text">{action.label}</span>
                </a>
              ))}
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
