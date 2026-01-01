import React from 'react';
import './App.css';
import Gallery from './Gallery';

// Import A3D Images
import a3dCover from './Assets/A3D/A3D Web -inicio.PNG';
import a3dFichajes from './Assets/A3D/A3D -Fichajes.PNG';
import a3dObras from './Assets/A3D/A3D -Obras.PNG';
import a3dHerramientas from './Assets/A3D/A3D- Herramientas.PNG';
import a3dInformes from './Assets/A3D/A3d - Informes.PNG';
import a3dTrabajadores from './Assets/A3D/A3d -trabajadores.PNG';

// Import Mobile A3D Images
import mobileAlmacen from './Assets/A3D/El Almacen.jpeg';
import mobileFichar from './Assets/A3D/Fichar.jpeg';
import mobileMisHerramientas from './Assets/A3D/Mis Herramientas.jpeg';
import mobileObras from './Assets/A3D/Obras.jpeg';

// Import WebRTC Images
import webrtcHome from './Assets/WebRTC/WbRTC Home.PNG';
import webrtcBroadcaster from './Assets/WebRTC/WebRTC Broadcaster.PNG';
import webrtcListener from './Assets/WebRTC/WebRTC Listener.PNG';
import webrtcMobile from './Assets/WebRTC/Image.jpeg';

// Import Secretariat Images
import secrCover from './Assets/Secretariat/Capture.PNG';
import secr2 from './Assets/Secretariat/Capture2.PNG';
import secr3 from './Assets/Secretariat/Capture3.PNG';
import secr4 from './Assets/Secretariat/Capture4.PNG';

// Import Carti Cu stele Images
import cartiCover from './Assets/Carti Cu stele/Capture.PNG';
import carti2 from './Assets/Carti Cu stele/Capture2.PNG';
import carti3 from './Assets/Carti Cu stele/Capture3.PNG';

// Import ChurchTeams Images
import churchCover from './Assets/ChurchTeams/Capture.PNG';
import church2 from './Assets/ChurchTeams/Capture2.PNG';
import church3 from './Assets/ChurchTeams/Capture3.PNG';
import churchImg from './Assets/ChurchTeams/Image.jpeg';

const projects = [
    {
        title: "WebRTC Streaming Platform",
        subtitle: "Real-time Translation & Streaming",
        description: "A high-performance solution for live audio and video broadcasting using P2P technology. Features low-latency streaming and synchronized multi-language translation channels.",
        tech: ["WebRTC", "Socket.io", "Node.js", "React"],
        status: "Production",
        link: "https://webrtc-live-ct59.onrender.com/",
        github: "https://github.com/AdiCampan/webrtc-live",
        cover: webrtcHome,
        gallery: [
            { url: webrtcHome, caption: "WebRTC Platform - Homepage" },
            { url: webrtcBroadcaster, caption: "Broadcaster Interface" },
            { url: webrtcListener, caption: "Listener Interface" }
        ]
    },
    {
        title: "EbenEzerLiveExpo",
        subtitle: "Mobile Companion App",
        description: "React Native + Expo application designed for real-time WebRTC communication. Optimized for mobile audio management and secure ICE server configuration on Android and iOS.",
        tech: ["React Native", "Expo", "WebRTC", "Android/iOS"],
        status: "Production",
        link: "https://github.com/AdiCampan/EbenEzerLive-MOBILE",
        github: "https://github.com/AdiCampan/EbenEzerLive-MOBILE",
        cover: webrtcMobile,
        gallery: [
            { url: webrtcMobile, caption: "Mobile App Interface" }
        ]
    },
    {
        title: "A3D Workforce Suite",
        subtitle: "Admin Dashboard & Mobile App",
        description: "A comprehensive solution for workforce management and legal compliance. Includes real-time clock-in monitoring, GPS worksite tracking, tool inventory management, and automated legal reporting on Google Cloud.",
        tech: ["React", "React Native", "Google Cloud", "Firebase"],
        status: "Production",
        link: "https://a3d-tools.web.app/",
        github: "https://github.com/AdiCampan/a3d_web",
        cover: a3dCover,
        gallery: [
            { url: a3dCover, caption: "Admin Dashboard - Main View" },
            { url: a3dFichajes, caption: "Clock-in Management" },
            { url: a3dObras, caption: "Worksite Tracking" },
            { url: a3dTrabajadores, caption: "Employee Records" },
            { url: a3dHerramientas, caption: "Tool Inventory" },
            { url: a3dInformes, caption: "Automated Reports" },
            { url: mobileFichar, caption: "Mobile App - Clocking In" },
            { url: mobileObras, caption: "Mobile App - Job Locations" },
            { url: mobileAlmacen, caption: "Mobile App - Warehouse" },
            { url: mobileMisHerramientas, caption: "Mobile App - Tools" },
        ]
    },
    {
        title: "Evidenta Bisericii",
        subtitle: "Church Management System",
        description: "Integral system for member tracking and administrative automation. Features a multi-language virtual secretary (ES/RO), visual statistics dashboard, and automated deployments with GitHub Actions.",
        tech: ["React", "Firebase", "MUI", "Redux", "i18next"],
        status: "Production",
        link: "https://evidenta-bisericii.web.app/",
        github: "https://github.com/AdiCampan/evidenta-biserica--firebase-",
        cover: secrCover,
        gallery: [
            { url: secrCover, caption: "Dashboard Overview" },
            { url: secr2, caption: "Member Records" },
            { url: secr3, caption: "Statistics and Reports" },
            { url: secr4, caption: "System Settings" }
        ]
    },
    {
        title: "Carti cu Stele",
        subtitle: "E-commerce Platform",
        description: "Collaborative project for a second-hand bookstore. Focused on providing an intuitive shopping experience, complex catalog management, and seamless navigation for book lovers.",
        tech: ["Web Development", "E-commerce", "UI/UX"],
        status: "Production",
        link: "https://carticustele.ro/",
        github: "https://github.com/nubica-t/carticustele-client",
        cover: cartiCover,
        gallery: [
            { url: cartiCover, caption: "E-commerce Homepage" },
            { url: carti2, caption: "Book Catalog" },
            { url: carti3, caption: "Product Details" }
        ]
    },
    {
        title: "Worship Team Toolkit",
        subtitle: "Team Organization App",
        description: "Innovative tool designed to coordinate worship teams. Manages rehearsal schedules, song libraries, and team availability to ensure seamless service preparation.",
        tech: ["React Native", "Firestore", "React"],
        status: "Development",
        link: "https://church-teams.web.app/",
        github: "https://github.com/AdiCampan/church-organizer",
        cover: churchCover,
        gallery: [
            { url: churchCover, caption: "Team Management Dashboard" },
            { url: church2, caption: "Rehearsal Scheduler" },
            { url: church3, caption: "Song Library" },
            { url: churchImg, caption: "Mobile View" }
        ]
    }
];

const Projects = () => {
    return (
        <section id="projects-section" className="projects-section">
            <div className="section-header">
                <h4 className="display-font">Featured Work</h4>
                <h2 className="display-font">Innovation in Motion</h2>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="glass-card project-card">
                        <div className="project-status">
                            <span className={`status-badge ${project.status.toLowerCase()}`}>
                                {project.status}
                            </span>
                        </div>

                        {project.cover && (
                            <div className="project-cover">
                                <img src={project.cover} alt={`${project.title} cover`} />
                            </div>
                        )}

                        <div className="project-info">
                            <h4 className="project-subtitle">{project.subtitle}</h4>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            {project.gallery && (
                                <div className="project-gallery-wrapper">
                                    <p className="gallery-label">Project Gallery:</p>
                                    <Gallery images={project.gallery} />
                                </div>
                            )}

                            <div className="tech-stack">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>

                        <div className="project-actions">
                            <div className="action-buttons">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <button className="secondary-btn">
                                            {project.status === "Production" ? "Visit Project" : "View Details"}
                                        </button>
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <button className="github-btn" title="View Source Code">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
