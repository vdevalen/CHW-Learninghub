import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/shared/buttons/Button'; 
import '../components/shared/buttons/ButtonSkills'; 
import {  } from "../styles/Profile.css";
import Header from '../components/core/Header';
import InterestCard from '../components/shared/cards/InterestCard'
import TopicsCard from '../components/shared/cards/TopicsCard'
import {} from '../styles/Header.css'

const ChwsPromoter = () => {

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='row'>
            <div className='col-1'></div>
            <div className='col-11'>
  <p style={{ paddingTop: '40px', fontWeight: 'bold', fontSize: '12px'}}>Home - CHWs / Promotores</p>
  <div>
        <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>CHW/Promotor Philosophy</h1>
      </div>
      <div className="row">
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/message_icon.svg'} text='Messages' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
  </div>
</div>
<div>
  <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>Personal and Professional Development</h1>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/message_icon.svg'} text='Messages' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
  </div>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/message_icon.svg'} text='Messages' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
  </div>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'../mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/message_icon.svg'} text='Messages' style={{ marginRight: '10px' }} />
  </div>
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
  </div>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
  </div>
</div>
<div>
  <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>CHW/P Career Pathway Opportunities</h1>
</div>
<div className="row">
  <div className="col-sm-4">
    <InterestCard img={'/mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
  </div>
</div>
  {/* final cards */}
                <div className="title-h1-chws my-4" style={{paddingTop: "15px"}}>Featured</div>
                <div className="row">
                    <TopicsCard img={'/mg-2/card5.png'}  title="House of Popular Education" subtitle="Introduction to CHWs/Ps" text="Community Health Workers (CHWs) are recognized leaders and trusted members of the communities where…"/>
                    <TopicsCard img={'/mg-2/card5.png'} className="mx-4" title="Popular Education Activities for Awareness Guide" subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'/mg-2/card5.png'} title="Popular Education Group Icebreakers Guide" subtitle="Introduction to CHWs/Ps" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
                <div className="row" style={{paddingTop: "40px"}}>
                    <TopicsCard img={'/mg-2/card5.png'} title="Intro to Cultural Humility" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'/mg-2/card5.png'} className="mx-4" title="Conflict Resolution " subtitle="Group Facilitation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                    <TopicsCard img={'/mg-2/card5.png'} title="Conflict Resolution Diagram" subtitle="Conflict Resolution" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec consectetur sed, dignissim nec…"/>
                </div>
                <div className="title-h1-chws my-4" style={{paddingTop: "50px"}}>Other topics to exploree</div>
            </div>
        </div>
      
      
    </div>
    
  );
};

export default ChwsPromoter;
