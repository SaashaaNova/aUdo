import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTshirt, faBoxOpen, faSearchPlus, faTruck } from '@fortawesome/free-solid-svg-icons';

library.add(faTshirt, faBoxOpen, faSearchPlus, faTruck);

class StepsSection extends Component {
render() {
return (
    <div className='steps-container container'>
        <div className='steps-title'>
            <h1>Wystarczą 4 proste kroki</h1>           
        </div>
        <div className='steps'>
            <div className='one-step'>
                <div className='icon'>
                    <FontAwesomeIcon
                        icon="tshirt"
                    />
                </div> 
                <h3>Wybierz rzeczy</h3>
                <p>ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className='one-step'>
                <div className='icon'>
                    <FontAwesomeIcon
                        icon="box-open"
                    />
                </div> 
                <h3>Spakuj je</h3>
                <p>skorzystaj z worków na śmieci</p>
            </div>
            <div className='one-step'>
                <div className='icon'>
                    <FontAwesomeIcon
                        icon="search-plus"
                    />
                </div> 
                <h3>Zdecyduj komu chcesz pomóc</h3>
                <p>wybierz zaufane miejsce</p>
            </div>
            <div className='one-step'>
                <div className='icon'>
                    <FontAwesomeIcon
                        icon="truck"
                    />
                </div> 
                <h3>Zamów kuriera</h3>
                <p>kurier przyjedzie w dogodnym terminie</p>
            </div>
        </div>
        <div className='steps-register-btn'>
            <Link to="/signin">                          <button>Załóż konto</button>
            </Link>
        </div>
    </div>

);
}
}

export default StepsSection;