import React, { Component } from 'react';
import Tabs from './Tabs'

class FundationList extends Component {
render() {
return (
    <div className='list-container'>
        <div className='container'>
            <h2 className='list-title'>Komu pomagamy</h2>
            <div className='Tabs'>
                <div className='list-description'>
                    <div></div>
                    <div>
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują</p>
                    </div>
                    <div></div> 
                </div>
                <Tabs>
                    <div label='Fundacje'>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Fundacja "Dbam o Zdrowie"</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Pomoc osobom potrzebujacym w trudnej sytuacji życiowej</p>
                                <p className="things">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                        </div>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Fundacja "Dla dzieci"</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin</p>
                                <p className="things">ubrania, meble, zabawki</p>
                            </div>
                        </div>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Fundacja "Bez domu"</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Pomoc dla osób nie posiadjących miejsca zamieszkania </p>
                                <p className="things">ubrania, jedzenie, ciepłe koce</p>
                            </div>
                        </div>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Fundacja "Dbam o Zdrowie"</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Pomoc osobom potrzebujacym w trudnej sytuacji życiowej</p>
                                <p className="things">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                        </div>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Fundacja "Dla dzieci"</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin</p>
                                <p className="things">ubrania, meble, zabawki</p>
                            </div>
                        </div>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Fundacja "Bez domu"</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Pomoc dla osób nie posiadjących miejsca zamieszkania </p>
                                <p className="things">ubrania, jedzenie, ciepłe koce</p>
                            </div>
                        </div>    
                    </div>

                    <div label='Organizacje pozarządowe'>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Lorem ipsum.</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <p className="things">sprzęt AGD, meble, zabawki</p>
                            </div>
                        </div>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Lorem ipsum.</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <p className="things">ubrania, jedzenie, meble, zabawki</p>
                            </div>
                        </div>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Lorem ipsum.</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <p className="things">ubrania, meble, zabawki</p>
                            </div>
                        </div>
                    </div>

                    <div label='Lokalne zbiórki'>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Ipsum lorem.</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Amet consectetur adipisicing elit.</p>
                                <p className="things">ubrania, sprzęt AGD, meble, zabawki</p>
                            </div>
                        </div>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Ipsum lorem.</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Amet consectetur adipisicing elit.</p>
                                <p className="things">sprzęt AGD, meble, zabawki</p>
                            </div>
                        </div>
                        <div className='one-list-item'>
                            <div className="fundation-title">
                                <h4>Ipsum lorem.</h4>
                            </div>
                            <div className="fundation-description">
                                <p>Cel i misja: Amet consectetur adipisicing elit.</p>
                                <p className="things">ubrania, jedzenie, zabawki</p>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>

        </div>
        
        
    </div>
);
}
}

export default FundationList;