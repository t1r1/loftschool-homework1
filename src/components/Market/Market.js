import React, {Component} from 'react';
import './Market.css';
import {createOrder} from '../../actions/marketActions'
import {moveOrderToCustomer} from '../../actions/farmActions'

import {connect} from 'react-redux';
let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};


export class Market extends Component {
  state = {
    orders: []
  }

  handleClick = () => {
    let { orders } = this.state
    let order = getNewOrder()
    orders.push(order)
    this.setState({orders})

    this.props.addOrder(order)
    this.props.addPrice(order.price)
    this.props.addExpense(20)

  }

  render() {
    console.log(this.props)
    return (
      <div className="market">
        <button className="new-orders__create-button" onClick={this.handleClick}>Создать заказ</button>
        <button>Отправить заказ на ферму</button>
        <div className="order-list">
          {this.state.orders.map((item, i) => {
            return (
              <div className="order" key={item.id}>
                {item.id} Название: {item.name} Цена: {item.price} <br/> Создан: {String(item.createdAt)}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.marketState.orders,
    budget: state.budgetState
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOrder: (order) => {
      dispatch(createOrder(order))
    },
    addPrice: (orderPrice) => {
      dispatch(createOrder(orderPrice))
    },
    addExpense: (amount) => {
      dispatch(moveOrderToCustomer(amount))
    }

    //поменять на расходы продавцов
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Market);
