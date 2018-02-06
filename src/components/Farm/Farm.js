import React from 'react'
import {moveOrderToCustomer} from '../../actions/farmActions'
import {connect} from 'react-redux'
import store from '../../store'

class Farm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deliveryExpanse: props.deliveryExpanse
        }
    }
   

    handleClick = () => {
        // store.dispatch({type: moveOrderToCustomer})
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
        deliveryExpanse: state.deliveryExpanse
    }
  }
  
  export default connect(
      mapStateToProps
  )(Farm)
      
  