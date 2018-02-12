import React from 'react';
import {connect} from 'react-redux'
import './Budget.css'

class Budget extends React.Component {
    sumAll() {
        let {profit, deliveryExpanse, farmExpanse,  marketExpanse} = this.props.budget
        return profit - deliveryExpanse - farmExpanse -  marketExpanse
    }
    render () {
        let {profit, deliveryExpanse, farmExpanse, marketExpanse} = this.props.budget
        return (
            <div className="budget">
                <p>Всего получено денег {profit}</p>
                <p>Расходы продавцов {-marketExpanse} </p>
                <p>Расходы на ферме {-farmExpanse}</p>
                <p>Расходы на доставку {-deliveryExpanse}</p>
                <span className="t-total">Итого {this.sumAll()}</span>
            </div>
        )
    }
}

const getBudget = state => state.budgetState
const mapStateToProps = (state) => {
    return {
        budget: getBudget(state)
    }
  }

  
export default connect(
    mapStateToProps
)(Budget)
    