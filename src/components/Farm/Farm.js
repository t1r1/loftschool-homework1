import React from 'react'
import {connect} from 'react-redux'
import {moveOrderToCustomer} from '../../actions/farmActions'
import './Farm.css'


class Farm extends React.Component {
    handleClick = () => {
        let {orders} = this.props
        this.props.deliverToCustomer(orders[orders.length - 1])
    }

    
    render() {
        return (
            <div className="farm">
                <h2>Производство на ферме</h2>
                    <div className="order-list">
                        {this.props.orders.map(item => {
                            return (
                            <div className="order" key={item.id}>
                                {item.id} Название: {item.name} Цена: {item.price} <br/> Создан: {String(item.createdAt)}
                            </div>
                            )
                        })}
            </div>
                <button onClick={this.handleClick}>Отправить урожай клиенту</button>
            </div>
        )
    }
}

const getBudget = state => state.budgetState.deliveryExpanse
const getOrders = state => state.farmState.orders

const mapStateToProps = (state) => {
    return {
        deliveryExpanse: getBudget(state),
        orders: getOrders(state)
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      deliverToCustomer: (order) => {
        dispatch(moveOrderToCustomer(order))
      }
    }
  }
  
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(Farm)
      
  