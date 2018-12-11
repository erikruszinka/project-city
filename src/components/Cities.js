import React from "react";
import City from './City';


const Cities=(props)=>
    props.list.map((city)=>{
        console.log(city.city)
        // return(<City name={city.city} country={city.country}/>)
    })

export default Cities;
