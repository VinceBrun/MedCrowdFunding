import React from "react";
import { Route, Routes } from 'react-router-dom';

import "./styles/Home.css";
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Feature from './components/Feature.js';
import Step from './components/Step.js';
import Footer from './components/Footer.js';

import CreateCampaign from './pages/CreateCampaign';
import Home from './pages/Home';
import { DisplayCampaigns } from "./components";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/home" element={<Home />} />
          <Route path="/campaigns" element={<DisplayCampaigns />} />
        </Routes>  
      </div>

      <div>
        <Header />
      </div>

      <div>
        <Feature />
      </div>

      <div>
        <Step />  
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default App;