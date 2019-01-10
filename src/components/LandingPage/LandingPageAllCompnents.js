import React, { Component } from 'react';
import '../../stylesheets/main.scss';
import FrontPicture from './FrontPicture.js';
import HeaderLandingPage from './HeaderLandingPage.js';
import CounterSection from './CounterSection.js';
import StepsSection from './StepsSection.js';
import AboutUs from './AboutUs.js';
import FundationList from './FundationList.js';
import Contact from './Contact';
import Footer from './Footer';

class LandingPageAllComponents extends Component {
  render() {
    return (
      <div>
        <HeaderLandingPage />
        <FrontPicture />
        <CounterSection />
        <StepsSection />
        <AboutUs />
        <FundationList />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default LandingPageAllComponents;