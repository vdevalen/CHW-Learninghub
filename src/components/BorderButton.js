import React from 'react';
import './styles/ButtonSkills.css'; 
import './styles/BorderButton.css'; 

const BorderButton= ({ text }) => {

  return (
    <div style={{ paddingTop: '10px', paddingRight: '5px'}}>
      <button class="border-button" type="button" >{text}</button>
    </div>
  );
};
export default BorderButton;