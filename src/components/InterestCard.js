import React from 'react';
import '../style/Profile.css';

const InterestCard = ({ img, text }) => {
  return (
    <div>
      <div className="card my-2" style={{ width: "270px", height: '75px', borderRadius: '10px', borderColor: '#47BBC6' }}>
        <div className="card-body" style={{ color: '#666666', borderRadius: '10px' }}>
          <div className="row no-gutters"> {/* Cambiado a "no-gutters" para evitar márgenes internos */}
            <div className="col-4 pr-0">
              <img src={img} alt="interest icon"></img>
            </div>
            <div className="col-6 mt-2 px-0">
              <div className="row">
                <p className="card-text">{text}</p>
              </div>
            </div>
            <div className="col-1 ml-2 mt-3">
              <div className="row">
                <img src='../mg-2/next_icon.svg' alt="next icon"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestCard;
