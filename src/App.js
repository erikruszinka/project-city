import React, { Component } from 'react';
import Cities from './components/Cities';

class App extends Component {
  state={
    cities: [{city:'Kosice', country:'SK', id:1, temp:"nan", pop:0, long, lat},
        {city:'Vinogradov', country:'UA', id:2, temp:"nan", pop:0,},
        {city:'Barcelona', country:'ES', id:3, temp: "nan", pop:0,},
        {city:'New York', country:'USA', id:4, temp: "nan", pop:0,},
        {city:'Budapest', country:'HU', id:5, temp: "nan", pop:0,}]
  }

  fetchFirst(data){
    let that=this;

    if(data) {
        fetch(+data)
        return response.json();
       }).then(function(result){
         const cityIndex = that.state.cities.findIndex(p =>{
             return p.id === data.id;
         });
         const ct = {
             ...that.state.cities[cityIndex]
         };
      });
    }
  }

  render() {
    return (
        <Cities list={this.state.cities}/>
    );
  }
}

export default App;
