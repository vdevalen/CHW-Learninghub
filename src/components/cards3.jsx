import React from 'react';
import "../style/cards3.css"

function Card3(props) {
  const { title, text, imageUrl } = props;

  const handleClick = () => {
    console.log('Clic en la tarjeta');
  };

  return (
    <div className="card3" onClick={handleClick}>
      <div className="card3-inner">
        <div className="card3-front">
          <img src={imageUrl} alt={title} />
          <h2><b>{title}</b></h2>
        </div>
        <div className="card3-back">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card3;
