import React, {Component} from 'react'

const allStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

export default class WeatherGetter extends Component{
    constructor(props){
        super(props)
        this.state = {
            state: '',
            city: ''
        }
    }

handleClick = () => {
    this.props.getWeather(this.state.state, this.state.city)
    this.props.updateRecent(this.state.city)
}

render(){
    return (
        <div className="Inputs">
            <span> State </span>
            <select name="text" onChange={(e)=>{this.setState({state:e.target.value})}}>
                {allStates.map(state => <option value={state}> {state}</option>)}
            </select>
            <span> City </span>
            <input type = "text" value={this.state.city} onChange={(e)=>{
                this.setState({city: e.target.value})
            }} />
            <button onClick = {this.handleClick}>GO</button>
        </div>
    )
}
}