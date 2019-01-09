import React, { Component } from 'react';


class HeaderLandingPage extends Component {


  render() {

    configureAnchors({scrollDuration: 1000});

    return (
      <header className='land-page-header-top '>
        <div className='container'>
          <div className='page-header-top'>
            <div className='land-page-logo-top'>
              <a href="#Start">
                <h1>a<span>U</span>do</h1>
              </a>
            </div>

            <div className='header-container-top'>
              <div className='space-top'></div>
              <nav className='land-page-nav-list-top'>
                <ul>
                  <li className='nav-list-item-top'><a href="#">Start</a></li>
                  <li className='nav-list-item-top'><a href="#OCoChodzi">O co chodzi ?</a></li>
                  <li className='nav-list-item-top'><a href="#Onas">O nas</a></li>
                  <li className='nav-list-item-top'><a href="#FundacjeiOrganizacje">Fundacje i organizacje</a></li>
                  <li className='nav-list-item-top'><a href="#Kontakt">Kontakt</a></li>
                </ul>
              </nav>
              <div className='land-page-nav-log-top'>
                <div className='land-page-log-in-btn-top'> 
                  <button >Zaloguj</button>
                </div>
                <div className='land-page-register-btn-top'>
                  <button>Załóż konto</button>
                </div>
              </div>
            </div>
          </div>
{/* 
          <div className='page-header-scroll' style={{display: this.state.display}}>
            <div className='land-page-logo-scroll'>
              <a href="#Start">
                <h1>a<span>U</span>do</h1>
              </a>
              
              <div className='header-container-scroll'>
                <div className='space-scroll'></div>
                <nav className='land-page-nav-list-scroll'>
                  <ul>
                    <li className='nav-list-item-scroll'><a href="#Start">Start</a></li>
                    <li className='nav-list-item-scroll'><a href="#OCoChodzi">O co chodzi ?</a></li>
                    <li className='nav-list-item-scroll'><a href="#Onas">O nas</a></li>
                    <li className='nav-list-item-scroll'><a href="#FundacjeiOrganizacje">Fundacje i organizacje</a></li>
                    <li className='nav-list-item-scroll'><a href="#Kontakt">Kontakt</a></li>
                  </ul>
                </nav>
                <div className='land-page-nav-log-scroll'>
                  <div className='land-page-log-in-btn-scroll'> 
                    <button >Zaloguj</button>
                  </div>
                  <div className='land-page-register-btn-scroll'>
                    <button>Załóż konto</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

      </header>
    );
  }
}

export default HeaderLandingPage;