import React, { Component } from 'react';


class HeaderLandingPage extends Component {
  render() {
    return (
      <header className='land-page-header'>
        <div className='container'>

          <div className='land-page-logo'>
            <h1>a<span>U</span>do</h1>
          </div>

          <div className='header-container'>

            <div className='space'></div>

            <nav className='land-page-nav-list'>
              <ul>
                <li className='nav-list-item'>Start</li>
                <li className='nav-list-item'>O co chodzi ?</li>
                <li className='nav-list-item'>O nas</li>
                <li className='nav-list-item'>Fundacje i organizacje</li>
                <li className='nav-list-item'>Kontakt</li>
              </ul>
            </nav>

            <div className='land-page-nav-log'>
              <div className='land-page-log-in-btn'> 
                <button >Zaloguj</button>
              </div>
              <div className='land-page-register-btn'>
                <button>Załóż konto</button>
              </div>
            </div>

          </div>

        </div>

      </header>
    );
  }
}

export default HeaderLandingPage;