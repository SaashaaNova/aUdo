import React, { Component } from 'react';

class MainGiveAwayStep3 extends Component {
  state = { 
    namesOfFundationes: [
      {
        id: 1,
        title: "Fundacja Dbam o Zdrowie", 
        mission: 'Pomoc osobom potrzebujacym w trudnej sytuacji życiowej', 
    },
    {
        id: 2,
        title: "Fundacja Dla dzieci", 
        mission: 'Pomoc dzieciom z ubogich rodzin', 
    },
    {
        id: 3,
        title: "Fundacja Bez domu", 
        mission: 'Pomoc dla osób nie posiadjących miejsca zamieszkania', 
    }
    ]
    
}

saveAndContinue = (event) => {
    event.preventDefault()
    this.props.nextStep()
}

back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
}

handleCheckElement = (event) => {
    let  namesOfFundation = this.state.namesOfFundationes
    
    if ( namesOfFundation.id === event.target.id) {
        this.setState({ 
            isChecked: !this.state.namesOfFundationes.isChecked
        })
    } 
}

  render() {

    const Checkbox = ({ type = 'checkbox', checked, onChange, id}) => (
        <input type={type} id={id} checked={checked} onChange={onChange}/>
    );

    const renderFundationes = this.state.namesOfFundationes.map((e, i) => {
        return <div className='checkbox-item' key={i}>
                    <Checkbox id={e.id} checked={this.state.checked} onChange={this.handleCheckElement}/>
                    <div>
                      <span>{e.title}</span><br></br>
                      <span>Cel i misja: {e.mission}</span>
                    </div>
                </div>
    }
    )

   return (
    <div className='checkboxes-form'>
      <div className='important-info'>
          <h3><span>Ważne!</span> Wybierz jedną organizację do której trafi Twoja przesyłka</h3>
      </div>
      <div className='wrap'>
          <div className='form-container'>
              <div className='form-step-info'>
                  <p>Krok: 3&#47;4</p>
              </div>
              <div className='chcekbox-container'>
                  <h2 className='chceckboxes-title'>Zaznacz corganizację, której chcesz pomóc:</h2>
                  {renderFundationes}  
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

export default MainGiveAwayStep3;