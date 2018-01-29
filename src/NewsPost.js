import React from 'react';
import './index.css';

export default class NewsPost extends React.Component {
    render() {
        return (
            <p className="news-item">{this.props.text}</p>
        )
    }
}