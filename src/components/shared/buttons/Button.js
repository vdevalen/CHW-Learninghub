import React from 'react';
import './styles/Button.css'; 

const Button = ({ text, style, onClick }) => {
  return (
    <div>
      {
        style ?
          <button class="border-button" type="button"  onClick={onClick}>{text}</button>
          :
          <button class="next-button pl-0" type="submit" onClick={onClick} >{text}</button>
      }
    </div>
  );
};

export default Button;
