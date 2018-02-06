import React from 'react'
import {connect} from 'react-redux'
import store from '../../store'
import {moveOrderToCustomer} from '../../actions/farmActions'


class Farm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deliveryExpanse: props.deliveryExpanse
        }
    }
   

    handleClick = () => {
        store.dispatch(moveOrderToCustomer(20))
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
  
  export default connect(
      mapStateToProps
  )(Farm)
      
  