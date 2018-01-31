import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput'

class CardNumberHolder extends Component {
  static displayName = 'Card number formating'

  handleChange = value => {
    console.log(value)
  }
  render() {
    return (
      <div>
        CardNumberHolder
        <CardNumberInput cardNumber="" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default CardNumberHolder;
