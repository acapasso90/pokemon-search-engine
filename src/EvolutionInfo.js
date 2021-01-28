import React, {useState, useEffect} from "react";
import axios from "axios";


export default function EvolutionInfo(props){
    const official = "official-artwork";
    const loaded = props.data.loaded;
    if (loaded === "loaded"){ let pokePicture = props.data.info.sprites.other.[official].front_default
        let pokename = (props.data.info.forms[0].name);
    return(<div className="evolvesFrom">
        <h2 className="evolvesFromHeader">Evolves from</h2>
        <img src={pokePicture} alt="evolvedFrom" className="evolutionImg"/>
        <h2 className="nameTitle">{pokename}</h2></div>)}

else{return("loading")}}
    