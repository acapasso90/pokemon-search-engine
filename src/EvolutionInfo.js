import React, {useState, useEffect} from "react";
import axios from "axios";


export default function EvolutionInfo(props){
    const official = "official-artwork";
    const loaded = props.data.loaded;
    const [pokePicture, setPokePicture] = useState("");
    const [pokeName, setPokeName] = useState("");
    useEffect(() => {
        if (loaded === "loaded" && props.data.info !== null) { setPokePicture(props.data.info.sprites.other.[official].front_default)
            setPokeName(props.data.info.forms[0].name); }
        }, [props.data.info]);
    
    if (loaded === "loaded" && props.data.info !== null){ 
    return(<div className="evolvesFrom">
        <h2 className="evolvesFromHeader">Evolves from</h2>
        <img src={pokePicture} alt="evolvedFrom" className="evolutionImg"/>
        <h2 className="nameTitle">{pokeName}</h2></div>)}
else if (loaded === "loaded" && props.data.info === null) {return(null)}
else{return("loading")}}
    