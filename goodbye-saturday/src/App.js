import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import WeatherGetter from './Components/WeatherGetter'
import WeatherCard from './Components/WeatherCard'
import { read } from 'fs';

const apiurl = 'http://api.wunderground.com/api/be1b6c68814dd6cb/forecast10day/q/'

class App extends Component {
  constructor(){
    super()
    this.state={
      weather :[],
      recent:[]
    }
  }

  getWeather = (state, city ) => {
    axios.get(`${apiurl}${state}/${city}/.json`).then((res)=>{
      let fiveDay = res.data.forecast.simpleforecast.forecastday.splice(0,5)
      this.setState({weather: fiveDay})
    })
  } 

  updateRecent = (city) => {
    axios.get("http://localhost:3001/api/places/").then(res => {
      console.log(res.data)
      this.setState({recent: res.data})
      console.log(this.state.recent)
    })
    let body = {
      place: city
    }
    
    if(this.state.recent.length>=3){
      axios.delete("http://localhost:3001/api/places/").then(res => {
        this.setState({recent: res.data})
      })
      axios.post("http://localhost:3001/api/places/", body).then(res => {
        this.setState({recent:res.data})
      })
    } else {
      axios.post("http://localhost:3001/api/places/", body).then(res => {
        this.setState({recent:res.data})
    })
  }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Weather</h1>
        </header>
        <div className = "MainBody">
          <WeatherGetter getWeather = {this.getWeather} updateRecent = {this.updateRecent}/>
          <div className = "DisplayResults">
            {this.state.weather.map(day => <WeatherCard data={day}/>)}
          </div>
          <div className="RecentSearchesBox">
            <div className="RSHead">
                Recent Searches 
            </div>
            <div className="ShowRecent">
              <span>{this.state.recent[0]}</span>
              <span>{this.state.recent[1]}</span>
              <span>{this.state.recent[2]}</span>
              {/* {this.state.recent.map((city)=>{
              <span>{city}</span>
            })} */}
            </div>
           

          </div>
        </div>
      </div>
    );
  }
}

export default App;
