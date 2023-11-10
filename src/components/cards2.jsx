import React from 'react';
import "../style/card1.css";
import "../style/card2.css"


function Card2(props) {

  const { title, text,  imageUrl } = props;


  const handleClick = () => {
   
    console.log('Clic en la tarjeta');
  };

  return (
    <div className="card2" onClick={handleClick}>
      <img src={imageUrl} alt={title} />
      <h2><b>{title}</b></h2>
      <p>{text}</p>
    </div>
  );
}

export default Card2;
