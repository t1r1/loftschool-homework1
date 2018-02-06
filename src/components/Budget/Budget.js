import React from 'react';
import {connect} from 'react-redux'

class Budget extends React.Component {

    sumAll() {
        return this.props.budget.profit - this.props.budget.deliveryExpanse
    }
    render () {
        let {deliveryExpanse} = this.props.budget
        return (
            <div className="budget">
                <p>Всего получено денег {this.props.budget.profit}</p>
                <p>Расходы продавцов</p>
                <p>Расходы на ферме</p>
                <p>Расходы на доставку -{deliveryExpanse}</p>
                <p>Итого {this.sumAll()}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        budget: state.budgetState
    }
  }

  
export default connect(
    mapStateToProps
)(Budget)
    