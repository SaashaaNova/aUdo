import React, { Component } from 'react';
import MainGiveAwayStep1 from './MainGiveAwayStep1'
import MainGiveAwayStep2 from './MainGiveAwayStep2'
import MainGiveAwayStep3 from './MainGiveAwayStep3'
import MainGiveAwayStep4 from './MainGiveAwayStep4'
import Confirmation from './Confirmation';
import Success from './Success';

class MainGiveAwayForm extends Component {
  state = {
    step: 1,
    thingsToGiveAway: '',
    numberOfBags: '',
    helpGroup: '',
    fundationName: '',
    name: '',
    surname:'',
    street: '',
    city: '',
    postcode: '',
    phoneNumber: ''
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
        step : step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
        step : step - 1
    })
  }

  handleChange = input => event => {
    this.setState({ [input] : event.target.value })
  }


  render() {
    const {step} = this.state;
    const { thingsToGiveAway, numberOfBags, fundationName, name, surname, street, city, postcode, phoneNumber } = this.state;
    const values = { thingsToGiveAway, numberOfBags, fundationName, name, surname, street, city, postcode, phoneNumber };

      switch(step) {
        case 1:
        return <section className='dashboard-form-container' >  
                <MainGiveAwayStep1 
                nextStep={this.nextStep} 
                handleChange = {this.handleChange}
                values={values}
                />
                </section>
        case 2:
        return <section className='dashboard-form-container' >  
              <MainGiveAwayStep2
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange = {this.handleChange}
              values={values}
              />
              </section>
        case 3: 
        return  <section className='dashboard-form-container' >
              <MainGiveAwayStep3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              />
              </section>
        case 4: 
        return  <section className='dashboard-form-container' >
              <MainGiveAwayStep4
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange = {this.handleChange}
              values={values}
              />
              </section>
        case 5: 
        return  <section className='dashboard-form-container' >
              <Confirmation
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange = {this.handleChange}
              values={values}
              />
              </section>
        case 6: 
        return  <section className='dashboard-form-container' >
              <Success/>
              </section>
        }
  }
}

export default MainGiveAwayForm;