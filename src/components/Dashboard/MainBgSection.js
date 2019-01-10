import React, { Component } from 'react';

class MainBgSection extends Component {
  render() {
   return (
   <section className='main-dashboard-dashboard-container'>
        <div className='dashboard-empty'></div>
        <div className='dashboard-right-section'>
            <div className='dashboard-text'>
                <div className='dashboard-title'>
                    <h2>Oddaj rzeczy których juz nie chcesz
                        <br></br>
                        <span>Potrzebujacym</span>
                    </h2>
                </div>
                <div className='dashboard-container-steps'>
                    <h3>Wystarczą 4 proste kroki</h3>
                    <div className='dashboard-steps'>
                        <div className='dashboard-step'>
                            <p className='number'>1</p>
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div className='dashboard-step'>
                            <p className='number'>2</p>
                            <p>Spakuj je w worki</p>
                        </div>
                        <div className='dashboard-step'>
                            <p className='number'>3</p>
                            <p>Wybierz fundacje</p>
                        </div>
                        <div className='dashboard-step'>
                            <p className='number'>4</p>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
   );
  }
}

export default MainBgSection;