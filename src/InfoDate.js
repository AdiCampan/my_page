import { useEffect, useState } from 'react';
import { getWeatherInfo } from './WeatherInfo';
import './App.css';

const InfoDate = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [hour, setHour] = useState('');
  const dateStr = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  const temperature = weatherData?.main ? Math.round(weatherData.main.temp) : null;
  const weatherIcon = weatherData?.weather?.[0]?.icon;

  const techStack = [
    { category: "Frontend", items: ["React", "JavaScript", "React Native", "Expo", "MUI", "Redux"] },
    { category: "Backend", items: ["Node.js", "Firebase", "Firestore", "Socket.io", "WebRTC"] },
    { category: "Tools", items: ["Git", "GitHub Actions", "Google Cloud", "NPM", "Vite"] }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHour(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    getWeatherInfo().then((data) => {
      setWeatherData(data);
    }).catch(err => console.error("Error fetching weather:", err));

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="widgets-column stretch-column">
      <div className="glass-card clock-widget">
        <div className="widget-label">Current Time</div>
        <div className="big-time">{hour}</div>
        <div className="widget-date">{dateStr}</div>
      </div>

      <div className="glass-card weather-widget">
        <div className="widget-label">{weatherData ? weatherData.name : 'Location'}</div>
        <div className="weather-main">
          {weatherIcon && (
            <img
              className="weather-icon-img"
              src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
              alt="weather"
            />
          )}
          <span className="temp-display">{temperature !== null ? `${temperature}°` : '--°'}</span>
        </div>
        <div className="weather-desc">
          {weatherData?.weather?.[0]?.description || 'Loading...'}
        </div>
      </div>

      <div className="glass-card skills-widget flex-grow">
        <div className="widget-label">Professional Tech Stack</div>
        <div className="tech-categories">
          {techStack.map((group, idx) => (
            <div key={idx} className="tech-group">
              <span className="tech-group-name">{group.category}:</span>
              <div className="skills-mini-grid">
                {group.items.map((skill, i) => (
                  <span key={i} className="skill-mini-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoDate;