import React from 'react'
import './index.css';
import './Step.css';
import classNames from 'classnames';

export default class Step extends React.Component {
    handleClick = () => {
        if (this.props.isClickable) {
            this.props.onClick(this.props.number)
        }
    }
    
    render() {
        var stepClass = classNames({
            'step': true,
            'step-clickable': this.props.isClickable,
            'step-selected': this.props.isSelected
          });
        return (
            <div className={stepClass} onClick={this.handleClick}>
                <div className="step__number">{this.props.number}</div>
                <div className="step__title">{this.props.children}</div>
            </div>
        )
    }
}