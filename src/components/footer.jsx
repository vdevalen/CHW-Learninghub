import React from 'react';
import "../style/footer.css"; // Importa el archivo CSS que contiene los estilos

function Footer() {
  return (
    <>
      <div className="container-primary-navigation">
        <div>
          <img src="/pix/footer/top-footer-background.svg" alt="Top Footer Background" />
        </div>
      </div>

      <div className="container-main">
        <div className="container-sm">
          <div className="container">
            <div className="row">
              <div className="col-md-2 footer-logo">
                <img src="/images/Footer-LogoCHWLearningHUB.png" alt="Footer Logo" />
              </div>
              <div className="col-md-5 border-right"></div>
              <div className="col-md-1">
                <dl>
                  <dd>About</dd>
                  <dd>Tools</dd>
                  <dd>Games</dd>
                  <dd>Forum</dd>
                  <dd>Blog</dd>
                </dl>
              </div>
              <div className="col-md-1 border-right"></div>
              <div className="col-md-3">
                <p className="info-footer">
                  info@elsolnec.org <br />
                  (909) 550-1868 <br /><br />
                  1535 South D Street<br />
                  San Bernardino, CA 92408
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-sm">
          <div className="row">
            <div className="col-md-12">
              <a href="https://www.facebook.com/profile.php?id=100086619173459">
                <img src="https://www.chwlearninghub.org/images/Ico_hub-facebook.svg" alt="Facebook" style={{ width: '35px' }} />
              </a>
              <a href="https://www.youtube.com/channel/UCuXMAtZHh22Rm5CvPVg8TMA">
                <img src="https://www.chwlearninghub.org/images/Ico_hub-youtube.svg" alt="YouTube" style={{ width: '35px' }} />
              </a>
              <a href="https://www.instagram.com/chwlearninghub/">
                <img src="https://www.chwlearninghub.org/images/Ico_hub-instagram.svg" alt="Instagram" style={{ width: '35px' }} />
              </a>
              <a href="https://twitter.com/CHWLearningHub">
                <img src="https://www.chwlearninghub.org/images/Ico_hub-twitter.svg" alt="Twitter" style={{ width: '35px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="align-center">
        <hr className="border-bottom" />
      </div>

      <div className="container-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>CHW Learning HUB © 2023. All rights reserved.</p>
            </div>
            <div className="col-md-6 d-flex right-to-left">
              <p>Developed by El Sol CHW/P Training Center</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
