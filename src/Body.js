import React from 'react'
import './App.css';

function Body() {
  return (
    <div className="glass-card about-card stretch-column">
      <h2 className="display-font section-title">About Me</h2>
      <div className="experience-badge">Full Stack Journey • Since 2022</div>

      <div className="bio-text flex-grow">
        <p>
          My professional background started in the industrial sector as an <strong>electrician</strong>.
          Those years in the field taught me the value of precision, systematic problem-solving,
          and the importance of building robust systems that withstand real-world demands.
        </p>
        <p>
          Driven by a lifelong curiosity for technology, I transitioned into software development.
          Since 2022, I have been focused on mastering <strong>Modern JavaScript, React, and React Native</strong>.
          I don't just write code; I build tools that solve problems, like the <strong>A3D Workforce Suite</strong>
          which helps companies manage their daily operations more efficiently.
        </p>
        <p>
          I am passionate about creating clean, high-performance applications that provide
          great user experiences. Whether it's a real-time streaming platform or a mobile
          management tool, my goal is always to deliver modern, scalable solutions.
        </p>
      </div>

      <div className="action-area">
        <button
          className="primary-btn"
          onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}
        >
          Explore My Projects
        </button>
      </div>

      <div className="footer-info">
        <span className="email-link">adicampan1974@gmail.com</span>
        <span className="project-tag">A React Project • 2025</span>
      </div>
    </div>
  );
}

export default Body;
