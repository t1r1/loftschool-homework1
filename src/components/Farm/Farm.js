import React from 'react'
import {connect} from 'react-redux'
import {moveOrderToCustomer} from '../../actions/marketActions'


class Farm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deliveryExpanse: 0
        }
    }
   

    handleClick = () => {
        console.log('farm, handleclick')
        this.props.deliverToCustomer(20)
       
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
      deliverToCustomer: () => {
          console.log('deliverToCustomer')
        dispatch(moveOrderToCustomer())
      }
    }
  }

  
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(Farm)
      
  