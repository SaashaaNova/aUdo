import React, { Component } from 'react';

class Confirmation extends Component {

  saveAndContinue = (event) => {
    event.preventDefault()
    this.props.nextStep()
  }

  back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
}

  render() {
 
    const {values: { thingsToGiveAway, numberOfBags, fundationName, name, surname, street, city, postcode, phoneNumber }} = this.props;

   return (
    <div className='checkboxes-form'>
        <div className='important-info'>
        </div>
        <div className='wrap'>
            <div className='form-container'>
                <div className='chcekbox-container'>
                    <h2 className='chceckboxes-title'>Podsumowanie twojej darowizny</h2>
                    <div className='bags-fundation-confirmation'>
                        <h3>Oddajesz: {thingsToGiveAway}</h3>
                        <p>Ile 60l worków: {numberOfBags}</p>
                        <p>Fundacja: {fundationName}</p>
                    </div>
                    <div className='adress-confirmation'>
                        <div>
                            <p>Imię</p>
                            <p>{name}</p>
                        </div>
                        <div>
                            <p>Nazwisko</p>
                            <p>{surname}</p>
                        </div>
                        <div>
                            <p>Ulica</p>
                            <p>{street}</p>
                        </div>
                        <div>
                            <p>Miasto</p>
                            <p>{city}</p>
                        </div>
                        <div>
                            <p>Kod pocztowy</p>
                            <p>{postcode}</p>
                        </div>
                        <div>
                            <p>Numer telefonu</p>
                            <p>{phoneNumber}</p>
                        </div>
                    </div>
                    
                </div> 
                <div className='next-btn'>
                    <button onClick={this.saveAndContinue}>Zatwierdź</button>
                    <button onClick={this.back}>Cofnij</button>
                </div>
            </div>  
        </div>
    </div>
   );
  }
}

export default Confirmation;