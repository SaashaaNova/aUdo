import React, { Component } from 'react';
import '../stylesheets/main.scss';
import FrontPicture from './LandingPage/FrontPicture.js';
import HeaderLandingPage from './LandingPage/HeaderLandingPage.js';
import CounterSection from './LandingPage/CounterSection.js';
import StepsSection from './LandingPage/StepsSection.js';
import AboutUs from './LandingPage/AboutUs.js';
import FundationList from './LandingPage/FundationList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderLandingPage />
        <FrontPicture />
        <CounterSection />
        <StepsSection />
        <AboutUs />
        <FundationList />
      </div>
    );
  }
}

export default App;
