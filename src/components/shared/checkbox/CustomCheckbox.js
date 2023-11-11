import React, { useState } from 'react';
import './styles/CustomCheckbox.css'; // Import your custom CSS file

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="custom-checkbox">
        <div className='col-2 pr-0 pl-4'>
          <input
            type="checkbox"
            // checked={checked}
            onChange={onChange}
            className="form-check-input"
          />
          <span className="checkbox-checkmark"></span>
        </div>
        <div className='col-10 px-0 mt-3'>
          <p>{label}</p>
      </div>
    </label>
  );
};

export default CustomCheckbox;