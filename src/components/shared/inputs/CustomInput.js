import React, { useState } from 'react';
import './styles/CustomInput.css'; // Import your custom CSS file

const CustomInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="custom-input"
    />
  );
};

export default CustomInput;