import React from 'react'
import './index.css';


export default class PersonalForm extends React.Component {

    handleChangeForm = (e) => {
        let { onChangeForm } = this.props
        onChangeForm(e.target.name, e.target.value)
    }

    render() {
        let { firstName, lastName, email } = this.props
        return (
            <div className="personal-form">
                <div>
                    <input 
                        name="firstName" 
                        onChange={this.handleChangeForm} 
                        placeholder="Имя"
                        value={firstName}/>
                </div>
                <div>
                    <input 
                        name="lastName" 
                        onChange={this.handleChangeForm} 
                        placeholder="Фамилия"
                        value={lastName}/>
                </div>
                <div>
                    <input 
                        name="email" 
                        onChange={this.handleChangeForm} 
                        placeholder="E-mail"
                        value={email}/>
                </div>
            </div>
        )
    }
}