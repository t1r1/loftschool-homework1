import React, {Component} from 'react';

class Switcher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedChild: 0
        }
    }

    handleChangeChild = (e) => {
        let { id } = e.target.dataset
        this.setState({selectedChild: id})
    }
    
    renderNavigation() {
        let { children } = this.props
        return (
            <nav>
                <ul>
                    {   
                        React.Children.map(children, (item, i) => {
                            let { name, displayName } = item.type
                            return (
                                <li 
                                    key={i} 
                                    className="component-list__name" 
                                    data-id={i}
                                    onClick={this.handleChangeChild}>
                                        {displayName ? displayName : name}
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
    render() {
        let { children } = this.props
        let { selectedChild } = this.state
        return (
            <div>
                {this.renderNavigation()}
                <hr/>
                {React.Children.toArray(children)[selectedChild]}
            </div>
        );
    }
}

export default Switcher;
