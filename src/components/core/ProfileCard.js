import React, { useState } from 'react';
import '../../styles/Profile.css'; 
import 'react-calendar/dist/Calendar.css';
import '../../styles/Calendar.css'
import Calendar from 'react-calendar';
import Button from '../shared/buttons/Button';

const ProfileCard = ({ color, title, subtitle, text, text2, wwwroot, usersData}) => {
  let imgProfileCard = wwwroot + "/mg-2/img_avatar.png";

  if (usersData !== undefined && usersData !== null && usersData.length !== undefined && usersData.length > 0) {
    if (usersData[0].profileimageurl !== undefined && usersData[0].profileimageurl !== null && usersData[0].profileimageurl !== '') {
        imgProfileCard = usersData[0].profileimageurl;
    }
    subtitle = subtitle + usersData[0].firstname + '!';
  }

  const [date, setDate] = useState('');

  const onChange = (newDate) => {
    console.log(newDate.toISOString())
    setDate(newDate.toISOString());
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-1"/>
            <div className="col-4 mr-4 card"style={{ marginTop:'50px', padding: 0, border: 'none'}}>
                <div className="card-body" style={{ paddingTop: '115px', backgroundColor: color , color: 'white', borderRadius: '5px'}}>
                    <h5 className="card-title" style={{ paddingBottom: "20px"}}>{subtitle}</h5>
                    <p className="card-text">{text}</p>
                    <p className="card-text">{text2}</p>
                </div>
            </div>
            <div className="col-6 card"style={{ marginTop:'50px', padding: 0, border: 'none'}}>
                <div className="card-body p-0" style={{ backgroundColor: color , color: 'white', borderRadius: '5px'}}>
                    <div className="row">
                        <div className="col-6">
                            <h5 className="card-title mb-0" style={{ backgroundColor: '#F4F4F4' , color: '#143d6a',paddingLeft: '10px'}}>Calendar</h5>
                                <Calendar onChange={onChange} value={date} /> 
                        </div>
                        <div className="col-6 mt-4">
                            <div className='row'>
                                <div className='col-3'>
                                    <img src="/mg-2/event_icon.svg"/>
                                </div>
                                <div className='col-8 mb-4'>
                                    <h5 className="card-text">Webinar</h5>
                                </div>
                                <h5 className="card-title mb-0">{date}</h5>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-3'>
                                    <img src="/mg-2/location_icon.svg"/>
                                </div>
                                <div className='col-8'>
                                    <p className="card-text">https://elsolnec.zoom.us/j/82691041203?pwd</p>
                                </div>
                            </div>
                            <div className='row mt-6'>
                                <div className='col-6 pl-0'>
                                    <Button text={'Save event'} style={true}/>
                                </div>
                                <div className='col-6'>
                                    <Button text={'Next event >'} />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-profile"> 
                <img
                src={imgProfileCard}
                width="150"
                height="150"
                className="d-inline-block align-top rounded-circle"
                alt="Img"
                />
            </div>
            <div style={{position:'relative' , left:'275px', bottom:'300px'}}> 
                <h6 className="title-h1" style={{ textAlign: "left" }}>{title}</h6>
            </div>
        </div>
    </div>
);
};

export default ProfileCard;
