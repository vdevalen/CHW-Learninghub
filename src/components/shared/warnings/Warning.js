import React from 'react';
import './styles/Warning.css'; 

const Warning = () => {
  return (
    <div>
      {
        <div className='row'>
        <div class="alert alert-success warning d-flex align-items-center" role="alert" style={{background: '47BBC6'}}>
          <div className="col-0">
            <img src="https://www.chwlearninghub.org/pix/ico/dash/ico_alert-profile.svg" width="60" height="60"></img>
          </div>
          <div className="col-11">
            <p style={{fontSize: '16px', color: 'white',fontWeight: '400'}}>We are delighted to have you as part of our community. Now that we have verified your account and created your personal space, please complete your profile by filling out the fields in this section. We value your privacy and will not share your information with third parties. If you have any questions or need assistance, feel free to contact us.</p>
            <p class="mb-0" style={{fontSize: '16px', color: 'white', fontWeight: '400'}}>Thank you for joining our community and we look forward to seeing you around!</p>
          </div>
        </div>
      </div>
      
      }
    </div>
  );
};

export default Warning;
