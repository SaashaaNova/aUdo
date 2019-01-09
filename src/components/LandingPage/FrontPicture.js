import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

class FrontPicture extends Component {


render() {

return (
    <ScrollableAnchor id={'Start'} >
        <div className="main-bg-container">
        <div className="bg-empty"></div>
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
    </ScrollableAnchor>
);
}
}

export default FrontPicture;