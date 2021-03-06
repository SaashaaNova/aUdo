import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faCog);

class HeaderDashboard extends Component {

    state = {
        listOpen: false,
    }

    handleDropDown = () => {
        this.setState({
            listOpen: !this.state.listOpen,
        })
    }

  render() {
   return (
    <header className="header-dashboard-container">
        <div className='header-user-profile'>
            <p>Witaj Agata</p>
            <button onClick={this.handleDropDown} className={!this.state.listOpen ?'unactive' :'active'}>
                <FontAwesomeIcon
                    icon = 'cog'
                />
            </button>
            <ul className='profile-options' style={{display: !this.state.listOpen ?'none' :'block'}}>
                <li className='profile-option-item'>Profil</li>
                <li className='profile-option-item'>Ustawienia</li>
                <li className='profile-option-item'>Moje zbórki</li>
                <li className='profile-option-item'>Wyloguj</li>
            </ul>
        </div>
        <div style={{clear: "both"}}></div>
    </header>
   );
  }
}

export default HeaderDashboard;