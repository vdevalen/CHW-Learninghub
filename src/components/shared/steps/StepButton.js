import React from 'react';
import './styles/StepButton.css'; 

const StepButton = ({ icon, text, onClick, className }) => {

  console.log('esto es icon',icon)
  return (
    <div>
      {
        icon === undefined ?(
          <button class={className} type="button" onClick={onClick}>{text}</button> ) : 
          (<button class={className} type="button" onClick={onClick} >
              <div className='row'>
                  <div className='col-3'>
                      <img src={icon} alt="img" />
                  </div>
                  <div className='col-9'>
                    {text}
                  </div>
              </div>
          </button>)
      }
      
    </div>
  );
};

export default StepButton;
