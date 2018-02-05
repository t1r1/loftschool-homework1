import React from 'react'
import {moveOrderToCustomer} from '../../actions/farmActions'
import {connect} from 'react-redux'
import Store from '../../store'

class Farm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deliveryExpanse: 0
        }
    }
   

    handleClick = () => {
        
    }
    render() {
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
    let {deliveryExpanse} = this.state
    return {
        deliveryExpanse: state.deliveryExpanse
    }
  }
  
  export default connect(
      mapStateToProps
  )(Farm)
      
  