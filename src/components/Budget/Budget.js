import React from 'react';
import {connect} from 'react-redux'

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
    