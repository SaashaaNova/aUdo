import React, { Component } from 'react';
import { Element} from 'react-scroll';

class AboutUs extends Component {
render() {
return (
    <Element name="Onas" className="element">
        <div className='about-container'>
            <div className='about-text'>
                <h2>O nas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt voluptatibus tenetur adipisci quidem eligendi, quasi est numquam nesciunt, alias fugit, iste accusamus autem cupiditate ea.</p>
            </div>
            <div className='about-img'></div>
        </div>
    </Element>
);
}
}

export default AboutUs;

