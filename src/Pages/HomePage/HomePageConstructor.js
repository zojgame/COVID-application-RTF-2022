import React, {Component, useEffect, useState} from "react";
import HomePage from "./HomePage";

export default function HomePageConstructor(props){
    let [sickData,changeData]=useState([])
    useEffect(()=>{
        covid().then(data=>changeData(data));
    },[])
    return(
        <HomePage newSick={sickData.NewCases} newDeaths={sickData.NewDeaths} />
    )
}

async function covid(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
            'X-RapidAPI-Key': 'b6dc7f20c1msh782f7e53afa0c87p1049b2jsna6fb61add859'
        }
    };
    const data=await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe', options)
        .then(data=>data.json())
        .then(data=> data[3])
    return data;
}