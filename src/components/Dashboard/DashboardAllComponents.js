import React, { Component } from 'react';
import MainBgSection from './MainBgSection'
import MainGiveAwayForm from './MainGiveAwayForm';
import Contact from '../LandingPage/Contact';
import HeaderDashboard from './HeaderDashboard';


class DashboardAllComponents extends Component {
  render() {
   return (
   <div>
     <HeaderDashboard />
     <MainBgSection />
     <MainGiveAwayForm />
     <Contact />
   </div>
   );
  }
}

export default DashboardAllComponents;