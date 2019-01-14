import React, { Component } from 'react';

class MainGiveAwayStep4 extends Component {

  saveAndContinue = (event) => {
    event.preventDefault()
    this.props.nextStep()
  }

  back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
}

  render() {

    const { values } = this.props;

   return (
    <div className='checkboxes-form'>
      <div className='important-info'>
          <h3><span>Ważne!</span>Podaj adres odbioru rzeczy</h3>
      </div>
      <div className='wrap'>
          <div className='form-container'>
              <div className='form-step-info'>
                  <p>Krok: 4&#47;4</p>
              </div>
              <div className='chcekbox-container'>
                  <h2 className='chceckboxes-title'>Podaj adres odbioru rzeczy przez kuriera</h2>
                  <form>
                        <label>Imię</label>
                        <input
                        placeholder='Podaj imię'
                        onChange={this.props.handleChange('name')}
                        defaultValue={values.name}
                        />
                  </form> 
                  <form>
                        <label>Nazwisko</label>
                        <input
                        placeholder='Podaj nazwisko'
                        onChange={this.props.handleChange('surname')}
                        defaultValue={values.surname}
                        />
                  </form>   
                  <form>
                        <label>Ulica i numer</label>
                        <input
                        placeholder='Podaj ulicę i numer'
                        onChange={this.props.handleChange('street')}
                        defaultValue={values.street}
                        />
                  </form>   
                  <form>
                        <label>Miasto</label>
                        <input
                        placeholder='Podaj miasto'
                        onChange={this.props.handleChange('city')}
                        defaultValue={values.city}
                        />
                  </form>   
                  <form>
                        <label>Kod pocztowy</label>
                        <input
                        placeholder='Podaj kod pocztowy'
                        onChange={this.props.handleChange('postcode')}
                        defaultValue={values.postcode}
                        />
                  </form>           
              </div> 
              <div className='next-btn'>
                  <button onClick={this.saveAndContinue}>Dalej</button>
                  <button onClick={this.back}>Cofnij</button>
              </div>
          </div>  
      </div>
    </div>
   );
  }
}

export default MainGiveAwayStep4;