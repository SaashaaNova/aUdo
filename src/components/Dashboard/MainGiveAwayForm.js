import React, { Component } from 'react';
import MainGiveAwayStep1 from './MainGiveAwayStep1'
import MainGiveAwayStep2 from './MainGiveAwayStep2'
import MainGiveAwayStep3a from './MainGiveAwayStep3a'
import MainGiveAwayStep3b from './MainGiveAwayStep3b'
import MainGiveAwayStep4 from './MainGiveAwayStep4'

class MainGiveAwayForm extends Component {
  render() {
   return (
   <section className='dashboard-form-container' >
        <MainGiveAwayStep1 />
        <MainGiveAwayStep2 />
        <MainGiveAwayStep3a />
        <MainGiveAwayStep3b />
        <MainGiveAwayStep4 />
   </section>
   );
  }
}

export default MainGiveAwayForm;