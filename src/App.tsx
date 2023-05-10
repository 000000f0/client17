import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home_page';
import AboutPage from './pages/about_page';
import MintPage from './pages/mint_page';
import ContactPage from './pages/contact_page';

import DiscordPage from './pages/discord_page';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import EmailPage from './pages/email_page';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "#fff" : "#000";
  };

  return (
    <Router>
      <div  style={{ background: isDarkMode ? '#000' : '#fff' }}>
      <header  >
        <nav style={{ background: isDarkMode ? '#000' : '#fff' }}>
         
            
            <ul className="nav-links">
            <li>
            <Link to="/">
            <img height="40px" src={isDarkMode ? "https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_dark.jpg" : "https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_light.jpg"} alt="Logo" />
          
              </Link>
              </li>
              <li>
                <Link to="/" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>Home</Link>
              </li>
              <li>
                <Link to="/about" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>About</Link>
              </li>
              <li>
                <Link to="/mint" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>Mint</Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>Contact</Link>
              </li>
              <li>
                <Link to="/email" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>Email</Link>
              </li>
              <li>
                <Link to="/discord" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>Discord</Link>
              </li>
              </ul>
            <div className="toggle-container" onClick={handleToggle}>
            <div style={{ color: isDarkMode ? '#fff' : '#000' }}>
            &nbsp;&nbsp;  <FontAwesomeIcon icon={isDarkMode ? faToggleOn : faToggleOff} className="icon" />
            &nbsp;&nbsp;  <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} className="icon" />
            </div>
          </div>
          </nav>
        </header>
        <Routes>
  <Route path="/" element={<HomePage isDark={isDarkMode} />} />
  <Route path="/about" element={<AboutPage isDark={isDarkMode} />} />
  <Route path="/mint" element={<MintPage isDark={isDarkMode} />} />
  <Route path="/contact" element={<ContactPage isDark={isDarkMode} />} />

  <Route path="/email" element={<EmailPage isDark={isDarkMode} />} />
<Route path="/discord" element={<DiscordPage isDark={isDarkMode} />} />
</Routes>

        <footer  style={{ background: isDarkMode ? '#000' : '#fff' }}>
        <div className="social-icons">
          <a href="/" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="/" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="/" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="/" style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
       
      </footer>

      </div>
    </Router>
  );
}

export default App;
