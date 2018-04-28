import React, {Component} from 'react'
import './WeatherCard.css'


export default class WeatherCard extends Component{



render() {
    return (
        <div className = "Card">
           <span>{this.props.data.date.weekday} </span>
           <span> {this.props.data.conditions} </span>
           <span> High: {this.props.data.high.fahrenheit} </span>
           <span> Low: {this.props.data.low.fahrenheit}</span>
        </div>
    )
}
}