import React from 'react';
import './styles/select.css'; 

const Select = ({ options, value, onChange }) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div class="custom-select">
            <select value={value} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
