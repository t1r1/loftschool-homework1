import React, {Component} from 'react';
import './Market.css';
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
  state = {
    orders: []
  }

  createOrder = () => {
    let { orders } = this.state
    let order = getNewOrder()
    orders.push(order)
    this.setState({orders})
    console.log(orders[orders.length - 1])
    this.props.addOrder(order)

  }

  sendToFarm = () => {
    let {orders} = this.props
    this.props.moveOrderToFarm(orders[orders.length - 1])
  }



  render() {
    console.log(this.props)
    return (
      <div className="market">
        <button className="new-orders__create-button" onClick={this.createOrder}>Создать заказ</button>
        <button onClick={this.sendToFarm}>Отправить заказ на ферму</button>
        <div className="order-list">
          {this.props.orders.map((item, i) => {
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
    moveOrderToFarm: (amount) => {
      dispatch(moveOrderToFarm(amount))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Market);
