import React from 'react';
import './index.css';

export default class NewsPost extends React.Component {
    render() {
        return (
            <div className="news-item">{this.props.newsItem}</div>
        )
    }
}