import React, {Component} from 'react';
import './Market.css';

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

  }

  render() {
    return (
      <div className="market">
        <button className="new-orders__create-button" onClick={this.handleClick}>Создать заказ</button>
        <button>Отправить заказ на ферму</button>
        <div className="order-list">
          {this.state.orders.map((item, i) => {
            return (
              <div className="order" key={item.id}>
                {item.id} {item.name} {item.price}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
