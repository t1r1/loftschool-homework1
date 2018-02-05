import React from 'react'
import Market from '../Market/Market'
import Farm from '../Farm/Farm'
import Budget from '../Budget/Budget'

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Market/>
                <Farm/>
                <Budget/>
            </div>
        )
    }
}