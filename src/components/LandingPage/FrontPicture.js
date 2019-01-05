import React, { Component } from 'react';
import bgImg from '../../imgs/bgImg.jpg'

class FrontPicture extends Component {
render() {
return (
    <div className="main-bg-container">
        <div className="bg-pic">
            <img src={bgImg} alt='background-image'></img>
        </div>
        <div className="bg-left-section">
            <div className='bg-text'>
                <h2>Zacznij pomagać!</h2>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            </div>
            <div className='bg-buttons'>
                <button>Oddaj rzeczy</button>
                <button>Zorganizuj zbiórkę</button>
            </div>  
        </div>
    </div>
);
}
}

export default FrontPicture;