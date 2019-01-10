import React, { Component } from 'react';
import MainBgSection from './MainBgSection'
import GiveAwayForm from './GiveAwayForm';
import Contact from '../LandingPage/Contact';
import HeaderDashboard from './HeaderDashboard';


class DashboardAllComponents extends Component {
  render() {
   return (
   <div>
     <HeaderDashboard />
     <MainBgSection />
     <GiveAwayForm />
     <Contact />
   </div>
   );
  }
}

export default DashboardAllComponents;