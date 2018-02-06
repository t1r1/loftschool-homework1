import React from 'react'
import {connect} from 'react-redux'
import store from '../../store'
import {moveOrderToCustomer} from '../../actions/farmActions'


class Farm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deliveryExpanse: 0
        }
    }
   

    handleClick = () => {
        let {deliveryExpanse} = this.state
        this.props.addExpense(deliveryExpanse + 20)
        this.setState({deliveryExpanse: deliveryExpanse + 20})
    }
    render() {
        console.log(this.props)
        return (
            <div className="farm">
                <button onClick={this.handleClick}>Отправить урожай клиенту</button>
                <div>
                    <div className="order">
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        deliveryExpanse: state.budgetState.deliveryExpanse
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addExpense: (amount) => {
        dispatch(moveOrderToCustomer(amount))
      }
    }
  }

  
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(Farm)
      
  