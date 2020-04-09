import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import Weather from './components/Weather';

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      weather:null
    }
  }
  async getWeatherData(){
    try{
       const response= await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=london&units=metric&APPID="+API_KEY);
       console.log(response.data);
       this.setState({weather:response.data})
      }
    catch(error){
      //console.log(response.error);
      console.error(error);
    }
  }


//   getWeatherData(){
//    axios.get("")
//    .then(response => {
//     console.log(response.data);
//     this.setState({weather:response.data});
//   }).catch(error => console.error(error));
// }  
componentDidMount(){
    //this.getWeatherData();
    console.log(API_KEY)

  //   const array = [1, 2, 3]
  //  // array.map(number => console.log(number));

  //  const newArray = array.map(number => number +1000);
  //  console.log(array)
  //  console.log(newArray)
  }

  nullCheck(){

    

      if(this.state.weather ===null) {
       return <h3>No Information</h3>
      }else{
        // this.state.weather.list.map(listItem => console.log(listItem));

      this.state.weather.list.map(listItem => console.log(listItem));
      
    }
  }
  render() {
    return (
      <div className="App">
         <header className="App-header">
          Hello
{/*         
          {this.nullCheck()} */}
        </header>
      </div>
    )
  }
}


