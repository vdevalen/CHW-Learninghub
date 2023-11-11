import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ChwsPromoter from './pages/ChwsPromoter';
import ChwIntegrationHealthcare  from "./pages/ChwIntegrationHealthcare"
import Profile from "./pages/Profile"
import CommunityHealthEducation from "./pages/CommunityHealthEducation"
import CoordinatorsAndSupervisors from "./pages/CoordinatorsAndSupervisors"
import AgenciesAndOrganizations from "./pages/AgenciesAndOrganizations"
import Error404Component from "../src/pages/404Page.js";
import "../src/App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/chws-promoter" element={<ChwsPromoter />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ChwIntegrationHealthcare" element={<ChwIntegrationHealthcare />} />
        <Route path="/CommunityHealthEducation" element={<CommunityHealthEducation />} />
        <Route path="/Error404" element={<Error404Component />} />
        <Route path="/CoordinatorsAndSupervisors" element={<CoordinatorsAndSupervisors />} />
        <Route path="/AgenciesAndOrganizations" element={<AgenciesAndOrganizations />} />
      </Routes>
    </Router>
  );
}

export default App;
