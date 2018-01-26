import React from 'react';
import './index.css';
import NewsPost from './NewsPost'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: "",
            newsItems: []
        }
    }

    handleChange = e => {
        this.setState({inputValue: e.target.value})
    }

    onButtonClicked = () => {
        let news = this.state.newsItems
        if (this.state.inputValue !== "") {
            news.push(this.state.inputValue)
        }
       
        this.setState({newsItems: news, inputValue: ""})
    }
    render() {
        return (
            <div className="news-wrapper">
                <input type="text" className="news-input" value={this.state.inputValue} onChange={this.handleChange} placeholder="Что нового?"/>
                <button className="news-btn" onClick={this.onButtonClicked}>Рассказать</button>
                <div className="news-feed">
                    {this.state.newsItems.map((item, i) => {
                        return (
                            <NewsPost key={i} newsItem={item}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}