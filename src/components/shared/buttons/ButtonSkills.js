import React from 'react';
import './styles/ButtonSkills.css'; 

const ButtonSkills = ({ text }) => {

  return (
    <div>
      <button class="button-skills mr-2" type="button" >{text}</button>
    </div>
  );
};
export default ButtonSkills;
