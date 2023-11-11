import React from 'react';

const Card = ({ color, title, imageUrl }) => {
  return (
    <div className="card" style={{ width: "350px", height: "220px", backgroundColor: color, color: 'white', borderRadius: '3px', position: 'relative' }}>
      <img
        src={imageUrl}
        alt="Logo"
        style={{ position: 'absolute', top: '5px', left: '20px', width: '60px', height: '90px' }}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ marginTop: '9.5rem' }}>{title}</h5>
      </div>
    </div>
  );
};

export default Card;
