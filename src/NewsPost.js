import React from 'react';
import './index.css';

export default class NewsPost extends React.Component {
    render() {
        return (
            <div className="news-feed">
                {this.props.newsItems.map((item, i) => {
                    return (
                        <div className="news-item" key={i}>{item}</div>
                    )
                })}
            </div>
        )
    }
}