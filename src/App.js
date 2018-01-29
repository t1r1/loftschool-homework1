import React from 'react';
import './index.css';
import NewsPost from './NewsPost'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsInput: "",
            news: []
        }
    }

    handleChange = e => {
        this.setState({newsInput: e.target.value})
    }

    handleNewPost = () => {
        const { newsInput, news } = this.state
        if (newsInput !== "") {
            news.push({ text: newsInput })
        }
       
        this.setState({ news, newsInput: "" })
    }
    render() {
        return (
            <div className="App news-wrapper">
                <input 
                    type="text" 
                    className="news-input" 
                    value={this.state.newsInput} 
                    onChange={this.handleChange} 
                    placeholder="Что нового?"/>
                <button className="news-btn" onClick={this.handleNewPost}>Рассказать</button>
                <div className="news-feed">
                    {this.state.news.map((item, i) => {
                        return (
                            <NewsPost key={i} text={item.text}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}