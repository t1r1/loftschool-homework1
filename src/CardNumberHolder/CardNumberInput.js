import React, {Component} from 'react';

export default class CardNumberInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: this.format(props.cardNumber)
        }
    }

    componentWillReceiveProps(props) {
        this.setState({number: this.format(props.cardNumber)})
    }
   

    format(value) {
        if (!value) return ""
        value = "" + value
        value = this.normalize(value)
        let arr = value.split('')
        let insertPos = 4
        while (insertPos < arr.length) {
            arr.splice(insertPos, 0, " ")
            insertPos += 5
        }
        return arr.join("")
    }

    normalize(value) {
        return value.replace(/\s+/g, "")
    }

    handleChange = e => {
        let {value} = e.target
        value = this.format(value)
        this.setState({number: value})
        this.props.onChange(value)
    }

    render() {
        return (
            <input 
                type="text" 
                value={this.state.number} 
                onChange={this.handleChange}
                placeholder="Данные карты"/>
        )
    }

}