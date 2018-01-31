import React from 'react'
import './index.css';
import CardForm from './CardForm';
import PersonalForm from './PersonalForm'
import Step from './Step'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            cardNumber: ''
        }
    }

    handleTabClick = (step) => {
        this.setState({step})
    }

    handleChangeForm = (key, value) => {
        this.setState({[key]: value})
    }

    handleClickNextForm = () => {
        let { step } = this.state
        step++
        this.setState({step})
    }

    isFormCommitable = () => {
        let { step } = this.state 
        let { firstName, lastName, email, cardNumber } = this.state 
       
        if (step === 1) {
            return firstName !== '' && lastName !== '' && email !== '' && email.includes('@')
        }
        else if (step === 2) {
            return cardNumber.length === 16
        }
    }

    renderForm = () => {
        switch (this.state.step) {
            case 1: 
                return (
                    <PersonalForm 
                        firstName={this.state.firstName} 
                        lastName={this.state.lastName} 
                        email={this.state.email} 
                        onChangeForm={this.handleChangeForm} 
                    />)
            case 2:
                return (
                    <CardForm 
                        cardNumber={this.state.cardNumber} 
                        onChangeForm={this.handleChangeForm} 
                        onChangeTimeOver={this.handleChangeTimeOver} 
                    />)
            case 3:
                return 'Поздравляем!'
            default: 
                return "Shouldn't get there"
        }
    }


    render() {
        return (
            <div className="container">
                <div className="tab-panel">
                    <Step 
                        number={1} 
                        isClickable={this.state.step > 1} 
                        isSelected={this.state.step === 1} 
                        onClick={this.handleTabClick}>
                        Personal Information
                    </Step>
                    <Step 
                        number={2} 
                        isClickable={this.state.step > 2} 
                        isSelected={this.state.step === 2} 
                        onClick={this.handleTabClick}>
                        Card Information
                    </Step>
                    <Step 
                        number={3} 
                        isClickable={this.state.step > 3} 
                        isSelected={this.state.step === 3} 
                        onClick={this.handleTabClick}>
                        Finish
                    </Step>
                </div>
                <div className="form-content">
                    <div>{this.renderForm()}</div>
                    <div className="button-panel">
                        <button 
                            className="button-next" 
                            onClick={this.handleClickNextForm} 
                            disabled={!this.isFormCommitable()}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}