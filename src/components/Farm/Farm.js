import React from 'react'
import {connect} from 'react-redux'
import {moveOrderToCustomer} from '../../actions/farmActions'


class Farm extends React.Component {
   

    handleClick = () => {
        let {orders} = this.props
        this.props.deliverToCustomer(orders[orders.length - 1])
       
    }
    render() {
        console.log(this.props.orders, ' Farm')
        return (
            <div className="farm">
                <h1>Производство на ферме</h1>
                    <div className="order-list">
                        {this.props.orders.map((item, i) => {
                            return (
                            <div className="order" key={item.id}>
                                {item.id} Название: {item.name} Цена: {item.price} <br/> Создан: {String(item.createdAt)}
                            </div>
                            )
                        })}
            </div>
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
        deliveryExpanse: state.budgetState.deliveryExpanse,
        orders: state.farmState.orders
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      deliverToCustomer: (order) => {
          console.log('deliverToCustomer')
        dispatch(moveOrderToCustomer(order))
      }
    }
  }

  
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(Farm)
      
  