import React from 'react';
import ButtonSkills from '../buttons/ButtonSkills'

const Input = ({titleSkills, pSkills}) => {
  return (
    <div className="col-16" style={{ backgroundColor: 'white'  }}>
      <div className="row" style={{ paddingBottom: '20px' }}>
        <div className="col-8">
          <h1 className="title-h1-chws">
            {titleSkills}
          </h1>
          <p>{pSkills}</p>
        </div>
        <div className="col-2" style={{ paddingLeft: '80px' }}>
          <ButtonSkills  text="+ Add Training"></ButtonSkills>
        </div>
      </div>
    </div>
  );
};

export default Input;
