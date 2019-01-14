import React, { Component } from 'react';


class MainGiveAwayStep1 extends Component {
   
    state = { 
        checkboxesInfo: [
            {
                id: 1,
                value: 'used-clothes',
                label: 'ubrania które nadają się do ponownego użycia',
                isChecked: false
            },
            {   
                id: 2,
                value: 'throw-away-clothes',
                label: 'ubrania do wyrzucenia',
                isChecked: false
            },
            {
                id: 3,
                value: 'toys',
                label: 'zabawki',
                isChecked: false
            },
            {
                id: 4,
                value: 'books',
                label: 'książki',
                isChecked: false
            },
            {
                id: 5,
                value: 'others',
                label: 'inne',
                isChecked: false
            },
        ]
        
    }

    saveAndContinue = (event) => {
        event.preventDefault()
        this.props.nextStep()
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleCheckElement = (event) => {
        let checkboxInfo = this.state.checkboxesInfo
        
        if (checkboxInfo.id === event.target.id) {
            this.setState({ 
                isChecked: !this.state.checkboxesInfo.isChecked
            })
        } 
    }

    
    render() {
        const Checkbox = ({ type = 'checkbox', name, checked, onChange, id}) => (
            <input type={type} id={id} name={name} checked={checked} onChange={onChange}/>
        );

        const renderCheckboxes = this.state.checkboxesInfo.map((e, i) => {
            return <div className='checkbox-item' key={i}>
                        <Checkbox id={e.id} value={e.name} checked={this.state.checked} onChange={this.handleCheckElement}/>
                        <span className='chcekbox-input'></span>
                        <span className='text-input'>{e.label}</span>
                    </div>
        }
        )

    const { values } = this.props;
    
        
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
                        <button onClick={this.saveAndContinue}>Dalej</button>
                    </div>
                </div>  
            </div>
        </div>
    );
    }
}

export default MainGiveAwayStep1;