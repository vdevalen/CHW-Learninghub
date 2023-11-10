import React from 'react';
import '../components/Button'; 
import '../components/ButtonSkills'; 
import {  } from "../style/Profile.css";
import Header from '../components/header';
import InterestCard from '../components/InterestCard'
import TopicsCard from '../components/TopicsCard'
import {} from '../style/header.css'

const AgenciesAndOrganizations = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className='row'>
            <div className='col-1'></div>
            <div className='col-11'>
  <p style={{ paddingTop: '40px', fontWeight: 'bold', fontSize: '12px'}}>Home - Coordinators and Supervisors</p>
  <div>
        <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}> CHW Recruitment </h1>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'react_components/dashboard/src/img/resume.svg'} text='Recruitment ' style={{ marginRight: '10px' }} />
  </div>
</div>
<div>
  <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>CHW Supervision </h1>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'react_components/dashboard/src/img/resume.svg'} text='Supervision' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'react_components/dashboard/src/img/message_icon.svg'} text='Mentoring ' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'react_components/dashboard/src/img/message_icon.svg'} text='Management' style={{ marginRight: '10px' }} />
  </div>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'react_components/dashboard/src/img/resume.svg'} text='Communication ' style={{ marginRight: '10px' }} />
  </div>
</div>
<div>
  <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>Training and Professional Development</h1>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'react_components/dashboard/src/img/resume.svg'} text='Professional Development' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'react_components/dashboard/src/img/resume.svg'} text='Performance Appraisals ' style={{ marginRight: '10px' }} />
  </div>
</div>
<div>
  <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>Program Planning & Evaluation </h1>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'react_components/dashboard/src/img/resume.svg'} text='Planning & Evaluation ' style={{ marginRight: '10px' }} />
  </div>
</div>
<div>
  <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>Sustainability  </h1>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'react_components/dashboard/src/img/resume.svg'} text='CBOs Sustainability ' style={{ marginRight: '10px' }} />
  </div>
</div>
                <div className="title-h1-chws my-4" style={{paddingTop: "15px"}}>Featured</div>
                <div className="row">
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'}  title="House of Popular Education" subtitle="Introduction to CHWs/Ps" text="Community Health Workers (CHWs) are recognized leaders and trusted members of the communities where…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} className="mx-4" title="Popular Education Activities for Awareness Guide" subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Popular Education Group Icebreakers Guide" subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
                <div className="row" style={{paddingTop: "40px"}}>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Intro to Cultural Humility" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} className="mx-4" title="Conflict Resolution " subtitle="Group Facilitation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'react_components/dashboard/src/img/card5.png'} title="Conflict Resolution Diagram" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
                <div className="title-h1-chws my-4" style={{paddingTop: "50px"}}>Other topics to exploree</div>
            </div>
        </div>
    </div>
    
  );
};
export default AgenciesAndOrganizations;
