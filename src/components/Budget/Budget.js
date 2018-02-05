import React from 'react';

export default class Budget extends React.Component {
    render () {
        return (
            <div className="budget">
                <p>Всего получено денег</p>
                <p>Расходы продавцов</p>
                <p>Расходы на ферме</p>
                <p>Расходы на доставку</p>
                <p>Итого</p>
            </div>
        )
    }
}