import React, { useState } from 'react';
import '../style/languageSelector.css';

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('es');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setSelectedLanguage(selectedLanguage === 'es' ? 'en' : 'es');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="language-selector">
      <a className='SupportCenter' href="#">Support Center</a>
      <div className="language-button" onClick={toggleMenu}>
        <img className="icoImg" src="https://www.chwlearninghub.org/images/Ico-Lang.svg" alt="Language Icon"  />
        {selectedLanguage === 'es' ? 'Español' : 'English'}
      </div>
      {menuOpen && (
        <div className="language-menu">
          <a href="#" onClick={toggleLanguage} className="language-option">
            Español
          </a>
          <a href="#" onClick={toggleLanguage} className="language-option">
            English
          </a>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
