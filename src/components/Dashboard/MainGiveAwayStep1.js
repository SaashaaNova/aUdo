import React, { Component } from 'react';
import checkboxesInfo from './checkboxesInfo.js'

class MainGiveAwayStep1 extends Component {
   
    state = { 
        checked: false 
    }

    handleChange = (e) => {
        this.setState({ 
            checked: e.target.checked 
        })
    }

    
    render() {
        const Checkbox = ({ type = 'checkbox', name, checked, onChange,}) => (
            <input type={type} name={name} checked={checked} onChange={onChange}/>
        );

        const renderCheckboxes = checkboxesInfo.map((e, i) => {
            return <div className='checkbox-item' key={i}>
                        <label key={i}>
                            <Checkbox name={e.name} checked={this.state.checked} onChange={this.handleChange}/>
                            <span className='chcekbox-input'></span>
                            <span className='text-input'>{e.label}</span>
                        </label> 
                    </div>
        }
        )

    return (
        <div className='checkboxes-form'>
            <div className='important-info'>
                <h3><span>Ważne!</span> Uzupełnij szczgóły dotyczące Twoich rzeczy. Dzieki temu bedziemy wiedzieć komu najlepiej je przekazać</h3>
            </div>
            <div className='wrap'>
                <div className='form-container'>
                    <div className='form-step-info'>
                        <p>Krok: 1&#47;4</p>
                    </div>
                    <div className='chcekbox-container'>
                        <h2 className='chceckboxes-title'>Zaznacz co chcesz dodać</h2>
                        {renderCheckboxes}  
                    </div> 
                    <div className='next-btn'>
                        <button>Dalej</button>
                    </div>
                </div>  
            </div>
        </div>
    );
    }
}

export default MainGiveAwayStep1;