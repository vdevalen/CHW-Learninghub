import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../style/Profile.css'; 

const Profile = (props) => {

  let nameUser = 'Development Name';
  let cityProfile = 'Lima, PE';
  let imgProfileCard = props.wwwroot + "../mg-2/img_avatar.png";

  if (props.usersData !== undefined && props.usersData !== null && props.usersData.length !== undefined && props.usersData.length > 0) {
    nameUser = props.usersData[0].fullname;
    cityProfile = props.usersData[0].city + ', ' + props.usersData[0].country;
    if (props.usersData[0].profileimageurl !== undefined && props.usersData[0].profileimageurl !== null && props.usersData[0].profileimageurl !== '') {
      imgProfileCard = props.usersData[0].profileimageurl;
    }
  }

  return (
    <Navbar bg="light" expand="lg" className="flex-column">
      <Navbar.Brand href="#home">
        <img
          src={imgProfileCard}
          width="150"
          height="150"
          className="d-inline-block align-top rounded-circle"
          alt="Img"
        />
      </Navbar.Brand>

      <Nav className="mr-auto flex-column">
        <h1 className='title-h1-chws'style={{ paddingTop: '20px', fontWeight: 'bold'}}>{nameUser}</h1>
        <p style={{ fontSize: '19px' ,color: '#143F6A' }}>Current Job Title / Designation</p>
        <p style={{ fontSize: '15px' ,fontWeight: 'bold', color: '#646464'}} >Add introduction: Example</p>
        <p style={{ paddingBottom:'10px', fontSize: '15px', color: '#646464'}}>Dedicated Community Health Worker (CHW) with a passion for improving the well-being of her community. Born and raised in a small town, Andrea witnessed firsthand the health disparities and lack of access to healthcare services. </p>
        <div>
        <div p style={{ paddingBottom: '30px' }} >
          <p style={{ fontSize: '15px', color: '#646464' }}>Areas of interest <br></br>
          Community Engagement / Outreach <br></br>
          Community Education</p>
        </div>
        </div>
        <img src="https://www.chwlearninghub.org/pix/ico/dash/ico_location.svg" width="29" height="29"></img>
        <div>
          <p style={{ fontSize: '15px',  fontWeight: 'bold' , color: '#646464'}}>{cityProfile}</p>
        </div>
        <div style={{ paddingTop:'20px'}}>
        <img src="https://www.chwlearninghub.org/pix/ico/dash/ico_languages.svg" width="29" height="29" ></img>
        </div>
        <div>
          <p style={{ fontSize: '15px',  fontWeight: 'bold' , color: '#646464'}}>Language Proficiency <br></br>
          Spanish, French, English
          </p>
        </div>
        <div>
          <p style={{ paddingBottom:'20px', paddingTop: '20px',fontSize: '15px',  fontWeight: 'bold', color: '#47BBC6', }}>
          + Add your language proficiency levels
          </p>
        </div>
        <Button style={{color: 'white', background: '#FF8A34', width: '11rem', height: '3.5rem', border: '1px solid #FF8A34'
}}>Complete your profile <br></br> 10% </Button>
        <div>
          <p style={{ paddingTop: '110px',paddingBottom:'80px', fontSize: '15px',  fontWeight: 'bold', color: '#47BBC6', }}>
          Edit personal details
          </p>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Profile;
