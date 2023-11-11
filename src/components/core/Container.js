import React, { useState } from 'react';
import MoodleWs from "../../services/moodlews";
import FullProfile from '../../pages/FullProfile';
import Dashboard from '../../pages/Dashboard';
import StepsContainer from '../../pages/StepsContainer';
import ChwsPromoter from '../../pages/ChwsPromoter';
import ChwsPromoPhilosophy from '../../pages/ChwsPromoPhilosophy';
import ChwPCareerPathway from '../../pages/ChwPCareerPathway';
import PersProfessDevelop from '../../pages/persProfessDevelop';
import IntroductionCHWs from '../../pages/IntroductionChws';
import CommunityHealthWorker from '../../pages/CommunityHealthWorker';
import ResultsPopularEducation from '../../pages/ResultsPopularEducation';
import CommunityHealthEducation from '../../pages/CommunityHealthEducation';
import CoordinatorsAndSupervisors from '../../pages/CoordinatorsAndSupervisors'
import AgenciesAndOrganizations from '../../pages/AgenciesAndOrganizations';
import CommunityEngagement from '../../pages/CommunityEngagement';
import ChwIntegrationHealthcare from '../../pages/CHWIntegrationHealthcare';
import IntroductionToCHWsPs from '../../pages/IntroductionToCHWsPs';

const Container = (props) => {
  const moodleWsInstance = new MoodleWs(props.sesskey, props.wwwroot);

  let usersData = [''];
  let userWs = moodleWsInstance.getMoodleUser(parseInt(props.userid));
  if (userWs) {
    usersData = userWs;
  }

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="container">
      <div className="navbar">
        <button
          className={`navbar-button ${activeButton === 'profile' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('profile')}
        >
          Profile
        </button>
        <button
          className={`navbar-button ${activeButton === 'dashboard' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`navbar-button ${activeButton === 'chws' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('chws')}
        >
          CHW’s Promotores
        </button>
        <button
          className={`navbar-button ${activeButton === 'form' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('form')}
        >
          Form
        </button>
        <button
          className={`navbar-button ${activeButton === 'chwsPromoPhilosophy' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('chwsPromoPhilosophy')}
        >
          CHW/Promotor Philosophy
        </button>
        <button
          className={`navbar-button ${activeButton === 'persProfessDevelop' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('persProfessDevelop')}
        >
              Personal and Professional Development       
      </button>
        <button
          className={`navbar-button ${activeButton === 'chwPCareerPathway' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('chwPCareerPathway')}
        >
          CHW/P Career Pathway Opportunities        
        </button>
        <button
          className={`navbar-button ${activeButton === 'introductionCHWs' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('introductionCHWs')}
        >
          Introduction to CHWs/Ps
        </button>
        <button
          className={`navbar-button ${activeButton === 'communityHealthWorker' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('communityHealthWorker')}
        >
          What is a Community Health Worker?
        </button>
        <button
          className={`navbar-button ${activeButton === 'resultsPopularEducation' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('resultsPopularEducation')}
        >
          Search results: Results: Popular Education
        </button>
        <button
          className={`navbar-button ${activeButton === 'communityHealthEducation' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('communityHealthEducation')}
        >
          Community Health Education
        </button>
        <button
          className={`navbar-button ${activeButton === 'coordinatorsAndSupervisors' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('coordinatorsAndSupervisors')}
        >
          Coordinators And Supervisors
        </button>
        <button
          className={`navbar-button ${activeButton === 'agenciesAndOrganizations' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('agenciesAndOrganizations')}
        >
          Agencies And Organizations
        </button>
        <button
          className={`navbar-button ${activeButton === 'chwIntegrationHealthcare' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('chwIntegrationHealthcare')}
        >
          CHW Integration into Healthcare
        </button>
        <button
          className={`navbar-button ${activeButton === 'communityEngagement' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('communityEngagement')}
        >
          Community Engagement-Advocacy
        </button>
        <button
          className={`navbar-button ${activeButton === 'introductionToCHWsPs' ? 'active' : ''}`}
          type="button"
          onClick={() => handleButtonClick('introductionToCHWsPs')}
        >
          IntroductionToCHWsPs
        </button>
      </div>
      <div className="row">
        <div className="col-12">
          {activeButton === 'profile' && (
            <FullProfile usersData={usersData} wwwroot={props.wwwroot} />
          )}
          {activeButton === 'dashboard' && (
            <Dashboard usersData={usersData} wwwroot={props.wwwroot}></Dashboard>
          )}
          {activeButton === 'chws' && (
            <ChwsPromoter usersData={usersData} wwwroot={props.wwwroot} />
          )}
          {activeButton === 'form' && (
            <StepsContainer usersData={usersData} wwwroot={props.wwwroot}></StepsContainer>
          )}
          {activeButton === 'chwsPromoPhilosophy' && (
            <ChwsPromoPhilosophy usersData={usersData} wwwroot={props.wwwroot}></ChwsPromoPhilosophy>
          )}
          {activeButton === 'persProfessDevelop' && (
            <PersProfessDevelop usersData={usersData} wwwroot={props.wwwroot}></PersProfessDevelop>
          )}
          {activeButton === 'chwPCareerPathway' && (
            <ChwPCareerPathway usersData={usersData} wwwroot={props.wwwroot}></ChwPCareerPathway>
          )}
          {activeButton === 'introductionCHWs' && (
            <IntroductionCHWs usersData={usersData} wwwroot={props.wwwroot}></IntroductionCHWs>
          )}
          {activeButton === 'communityHealthWorker' && (
            <CommunityHealthWorker usersData={usersData} wwwroot={props.wwwroot}></CommunityHealthWorker>
          )}
          {activeButton === 'resultsPopularEducation' && (
            <ResultsPopularEducation usersData={usersData} wwwroot={props.wwwroot}></ResultsPopularEducation>
          )}
          {activeButton === 'communityHealthEducation' && (
            <CommunityHealthEducation usersData={usersData} wwwroot={props.wwwroot}></CommunityHealthEducation>
          )}
          {activeButton === 'coordinatorsAndSupervisors' && (
            <CoordinatorsAndSupervisors usersData={usersData} wwwroot={props.wwwroot}></CoordinatorsAndSupervisors>
          )}
          {activeButton === 'agenciesAndOrganizations' && (
            <AgenciesAndOrganizations usersData={usersData} wwwroot={props.wwwroot}></AgenciesAndOrganizations>
          )}
          {activeButton === 'chwIntegrationHealthcare' && (
            <ChwIntegrationHealthcare usersData={usersData} wwwroot={props.wwwroot}></ChwIntegrationHealthcare>
          )}
          {activeButton === 'communityEngagement' && (
            <CommunityEngagement usersData={usersData} wwwroot={props.wwwroot}></CommunityEngagement>
          )}
          {activeButton === 'introductionToCHWsPs' && (
            <IntroductionToCHWsPs usersData={usersData} wwwroot={props.wwwroot}></IntroductionToCHWsPs>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
