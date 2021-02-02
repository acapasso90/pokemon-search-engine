import React, {useEffect, useState} from "react";


export default function ExtendedEvolutionInfo(props){
    const official = "official-artwork";
    const loaded = props.data.loaded;
    const [pokePicture, setPokePicture] = useState("");
    const [pokeName, setPokeName] = useState("");

// If loaded and data is sent pokePicture and PokeName are set.
    useEffect(() => {
        let mounted = true;
        if (mounted){
        if (loaded === "loaded" && props.data.info !== null) {
            setPokePicture(props.data.info.sprites.other.[official].front_default)
            setPokeName(props.data.info.forms[0].name); 
            //Runs anytime props changes
        }}}, [props.data]);




//if data is sent from EvolutionInfo extended name and picture is displayed
if (loaded === "loaded" && props.data.info !== null){
    return( <div className="ExtendedEvolvesFrom">
        <h2 className="evolveHeader">Evolves From</h2>
        <img src={pokePicture} alt={pokeName} className="evolutionImg"/>
        <h2 className="nameTitle">{pokeName}</h2>
    </div>
    )} 
    else if (loaded === "loaded" && props.data.info === null) {return(null)}
    else {return("loading");}
}