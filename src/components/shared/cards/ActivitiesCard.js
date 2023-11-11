import React from 'react';
import '../../../styles/Profile.css'; 
import '../../../styles/Profile.css'; 
import ButtonSkills from '../buttons/ButtonSkills';

const ActivitiesCard = ({ color, subtitle, text1, text2, styleProps }) => {
  return (
    <div>
      <div className="title-h1 my-4">Activities in progress</div>
      <div className="card" style={{border: 'none'}}>
        <div className="card-body" style={{ ...styleProps }}>
          <div className="row">
            <div className="col-md-4">
              <img src="/mg-2/activities.png" alt="img" className="img-fluid"/>
            </div>
            <div className="col-md-8">
              <h5 className="card-title">{subtitle}</h5>
              <p className="card-text" style={{ color: '#ABB3CD' }}>{text1}</p>
              <div className="card-text-container">
                <p className="card-text">{text2}</p>
                <button className="button-skills-md2">Continue learning</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;

