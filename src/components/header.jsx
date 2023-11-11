// Import React and useState from the 'react' library
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import the CSS file for styling (make sure to adjust the path as needed)
import '../style/header.css';

// Import the image for the logo (adjust the path accordingly)
import ElSol from "../img/CHWLearningHUB_Logo.png"


  //traductor de idioma importacion 

  import LanguageSelector from './languageSelector';
// Define a functional component named Header
function Header() {
  

  
  // Use the 'useState' hook to manage the 'menuOpen' state
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state (open/close)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Render the header component
  return (
    <header>
      <nav>
        
  <div className="LanguageSelectorC">

    <LanguageSelector />
  </div>
        <div className='divContainer'>
   
          <img 
            className='logo'
            src={ElSol}
            alt="Logo"    
          />
        </div>
        
        {/* Button to toggle the menu on smaller screens */}
        <button id='Menu' className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}
        </button>
        <div className="line"></div>

        {/* Main menu */}
        <ul id='Menu' className={`menu ${menuOpen ? 'open' : ''}`}>
          
          <Link to="/Home"><li> <a href="#">HOME</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">ABOUT</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">TOPICS</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">RESOUCES</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">GAMES</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">BLOG</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">FORUM</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">CONTACT</a> </li> </Link>
          <div className="botnCont">
          <li><a href="#" id='loguinBottomm' className="login-buttonn">Log In</a></li>
          <li><a href="#" id='singupBottomm' className="signup-buttonn">Sign Up</a></li>
          </div>
        </ul>
          
      </nav>
    </header>
  );
}

// Export the Header component as the default export
export default Header;
