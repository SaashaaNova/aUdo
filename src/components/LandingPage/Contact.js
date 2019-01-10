import React, { Component } from 'react';
import { Element} from 'react-scroll';

class Contact extends Component {
    render() {
    return (
        <Element name="Kontakt" className="element">
            <div className='contact-container'>
                <div className='left-container'></div>
                <div className='contact-form'>
                    <h1>Skontaktuj się z nami</h1>
                    <form action="">
                        <div className='form-title'>
                            <h2>Formularz kontaktowy</h2>
                        </div>

                        <div className='form-contianer'>
                            <div className='form-data'>
                                <input type='text' placeholder='Imię' className='form-name'/>
                                <input type="text" placeholder='Email' className='email-form'/>
                            </div>
                            <div className='message-form'>
                                <textarea cols='5' rows='8' wrap='hard' type="text" placeholder='Wiadomość' />
                            </div>
                            <button>Wyślij</button>
                        </div>
                    </form> 
                </div>
            </div>
        </Element>
    );
    }
}

export default Contact;