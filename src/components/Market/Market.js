import React, {Component} from 'react';
import './Market.css';
import '../Order/Order.css'
import {createOrder, moveOrderToFarm} from '../../actions/marketActions'
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
  createOrder = () => {
    let order = getNewOrder()
    this.props.addOrder(order)
  }

  sendToFarm = () => {
    let {orders} = this.props
    this.props.sendOrderToFarm(orders[orders.length - 1])
  }



  render() {
    let buttonDisabled = this.props.orders.length === 0
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button className="new-orders__create-button" onClick={this.createOrder}>Создать заказ</button>
        <button disabled={buttonDisabled} onClick={this.sendToFarm}>Отправить заказ на ферму</button>
        <div className="order-list">
          {this.props.orders.map(item => {
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

const getBudget = state => state.budgetState
const getOrders = state => state.marketState.orders

const mapStateToProps = (state) => {
  return {
    orders: getOrders(state),
    budget: getBudget(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOrder: (order) => {
      dispatch(createOrder(order))
    },
    sendOrderToFarm: (order) => {
      dispatch(moveOrderToFarm(order))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Market);
