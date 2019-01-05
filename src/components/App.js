import React, { Component } from 'react';
import FrontPicture from './LandingPage/FrontPicture.js';
import HeaderLandingPage from './LandingPage/HeaderLandingPage.js';
import '../stylesheets/main.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderLandingPage />
        <FrontPicture />
      </div>
    );
  }
}

export default App;
