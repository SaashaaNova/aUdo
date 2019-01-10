import React, { Component } from 'react';
import MainBgSection from './MainBgSection'
import GiveAwayForm from './GiveAwayForm';
import Contact from '../LandingPage/Contact';


class DashboardAllComponents extends Component {
  render() {
   return (
   <div>
     <MainBgSection />
     <GiveAwayForm />
     <Contact />
   </div>
   );
  }
}

export default DashboardAllComponents;