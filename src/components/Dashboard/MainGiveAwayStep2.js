import React, { Component } from 'react';

class MainGiveAwayStep2 extends Component {
  
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
            <h3><span>Ważne!</span> Wszystkie rzeczy do oddania zapakuj w worki. Dokładną instrukcje jak poprawnie zapakować rzeczy znajdziesz TUTAJ</h3>
        </div>
        <div className='wrap'>
            <div className='form-container'>
                <div className='form-step-info'>
                    <p>Krok: 2&#47;4</p>
                </div>
                <div className='chcekbox-container'>
                    <h2 className='chceckboxes-title'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy</h2>
                    <form>
                        <label>First Name</label>
                        <input
                        placeholder='Ilość worków'
                        onChange={this.props.handleChange('numberOfBags')}
                        defaultValue={values.numberOfBags}
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

export default MainGiveAwayStep2;