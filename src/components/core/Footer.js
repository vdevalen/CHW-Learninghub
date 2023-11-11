import React from 'react';
import {  } from "../../styles/Profile.css";
import Dashboard from '../../pages/Dashboard'

const Footer = () => {
  return (
    <div style={{ padding: '40px', color: 'white', backgroundColor: '#003d6a' }}>
      <div>
        <div className="row">
          <div className="col-md-2 footer-logo">
            
          </div>
          <div className="col-md-5" style={{ borderRight: '1px solid #fff' }}></div>
          <div className="col-md-1">
            <dl>
              <dd>About</dd>
              <dd>Tools</dd>
              <dd>Games</dd>
              <dd>Forum</dd>
              <dd>Blog</dd>
            </dl>
          </div>
          <div className="col-md-1" style={{ borderRight: '1px solid #fff' }}></div>
          <div className="col-md-3">
            <p className="info-footer">
              info@organizacion.org <br />
              018000 00 00 <br /><br />
              1535 5 D<br />
              St Bernardino, CA 92408
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <a href="#">
              <img src="https://www.chwlearninghub.org/images/Ico_hub-facebook.svg" style={{ width: '35px' }} alt="Facebook" />
            </a>
            <a href="#">
              <img src="https://www.chwlearninghub.org/images/Ico_hub-youtube.svg" style={{ width: '35px' }} alt="YouTube" />
            </a>
            <a href="#">
              <img src="https://www.chwlearninghub.org/images/Ico_hub-instagram.svg" style={{ width: '35px' }} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <hr style={{ borderColor: '#fff' }} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Organizacion © 2023. All rights reserved.</p>
          </div>
          <div className="col-md-6" style={{textAlign: 'end'}}>
            <p>Develop by El Sol CHM P Tranning Center </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
