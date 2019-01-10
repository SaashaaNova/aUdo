import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faFacebookF, faInstagram);

class Footer extends Component {
  render() {
   return (
   <footer className='footer'>
        <div className='empty-footer'></div>
       <div className='logo-footer'>
            <h1>a<span>U</span>do</h1>
       </div>
       <div className="social-icons">
            <div className="icon-footer">
                <FontAwesomeIcon
                    icon={['fab', 'facebook-f']}
                />
            </div>
            <div className="icon-footer">
                <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                />
            </div>
       </div>
   </footer>
   );
  }
}

export default Footer;