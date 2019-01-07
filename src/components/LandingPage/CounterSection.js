import React, { Component } from 'react';

class CounterSection extends Component {
render() {
return (
    <div className='counter-container'>
        <div className='container flex-container'>
            <div className='counter-info-section'>
                <h2>10</h2>
                <h3>oddanych worków</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolorum delectus doloremque modi molestias.</p>
            </div>
            <div className='counter-info-section'>
                <h2>5</h2>
                <h3>wspartych organizacji</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolorum delectus doloremque modi molestias.</p>
            </div>
            <div className='counter-info-section'>
                <h2>7</h2>
                <h3>zorganizowanych zbiórek</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolorum delectus doloremque modi molestias.</p>
            </div>
        </div>
    </div>
);
}
}

export default CounterSection;