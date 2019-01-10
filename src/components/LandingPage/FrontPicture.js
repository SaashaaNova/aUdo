import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom'

class FrontPicture extends Component {


render() {

return (
     <div className="main-bg-container">
        <div className="bg-empty"></div>
        <div className="bg-right-section">
            <div className='bg-text'>
                <h2>Zacznij pomagać!</h2>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            </div>
            <div className='bg-buttons'>
                <Link to="/signin">
                    <button>Oddaj rzeczy</button>
                </Link>
                <Link to="/signin">
                    <button>Zorganizuj zbiórkę</button>
                </Link>
            </div>  
        </div>
    </div>
    );
}
}

export default FrontPicture;