import React, { Component } from 'react';

class Success extends Component {

  render() {


   return (
    <div className='checkboxes-form'>
        <div className='important-info'>
        </div>
        <div className='wrap'>
            <div className='form-container'>
                <div className='chcekbox-container'>
                    <p className='chceckboxes-title'>Dziekujemy za przesłanie formularza</p>
                    <p className='chceckboxes-title'>Na maila prześlemy wszelkie informacje o odbiorze</p> 
                </div> 
            </div>  
            <div>
                <p>Chcesz zorganizować nową zbiórkę ? Kliknij ponizej
                </p>
                <button >Oddaję kolejne rzeczy</button>
            </div>

        </div>
    </div>
   );
  }
}

export default Success;