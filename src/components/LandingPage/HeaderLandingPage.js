import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'
import {
  Link
} from 'react-router-dom'

class HeaderLandingPage extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render() {

    return (
      <header className='land-page-header-top '>
        <div className='container'>
          <div className='page-header-top'>
            <div className='land-page-logo-top'>
              <a href='#' onClick={this.scrollToTop}>
                <h1>a<span>U</span>do</h1>
              </a>
            </div>
            <div className='header-container-top'>
              <div className='space-top'></div>
              <nav className='land-page-nav-list-top'>
                <ul>
                  <li className='nav-list-item-top'>
                    <a href='#' onClick={this.scrollToTop} activeclass="active-link">Start</a>
                  </li>
                  <Scroll.Link activeclass="active-link" to="OcoChodzi" spy={true} smooth={true} offset={50} duration={500}>
                    <li className='nav-list-item-top'>O co chodzi ?</li>
                  </Scroll.Link>
                  <Scroll.Link activeclass="active-link" to="Onas" spy={true} smooth={true} offset={50} duration={500}>
                    <li className='nav-list-item-top'>O nas</li>
                  </Scroll.Link>
                  <Scroll.Link activeclass="active-link" to="ListaFundacji" spy={true} smooth={true} offset={50} duration={500}>
                    <li className='nav-list-item-top'>Fundacje i organizacje</li>
                  </Scroll.Link>
                  <Scroll.Link activeClass="active-link" to="Kontakt" spy={true} smooth={true} offset={50} duration={500}>
                    <li className='nav-list-item-top'>Kontakt</li>
                  </Scroll.Link>
                </ul>
              </nav>
              <div className='land-page-nav-log-top'>
                <div className='land-page-log-in-btn-top'> 
                  <Link to="/signin">
                    <button >Zaloguj</button>
                  </Link>  
                </div>
                <div className='land-page-register-btn-top'>
                  <Link to="/register">
                    <button>Załóż konto</button>
                  </Link>
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