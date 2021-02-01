import React, {useState, useEffect} from "react";
import axios from "axios";
import ExtendedEvolutionInfo from "./ExtendedEvolutionInfo";


export default function EvolutionInfo(props){
    const official = "official-artwork";
    const loaded = props.data.loaded;
    const [evolutionLoaded, setEvolutionLoaded] = useState(false);
    const [pokePicture, setPokePicture] = useState("");
    const [pokeName, setPokeName] = useState("");
    const [pokeInfo, setPokeInfo] = useState("");
    const [pokeURL, setPokeURL] = useState("");

    function showEvolutionExtendedInfo(response){
        setPokeInfo({info: response.data,
          loaded: "loaded",});}

    function showEvolutionInfo(response){
        setEvolutionLoaded(true);
        if (evolutionLoaded === true){
        let doesEvolve = response.data.evolves_from_species;
        if (doesEvolve !== null){
            let evolutionName = response.data.evolves_from_species.name;
        const APIurl = `https://pokeapi.co/api/v2/pokemon/${evolutionName}`;
        axios.get(APIurl).then(showEvolutionExtendedInfo);
        }
        else {setPokeInfo({info: null,
        loaded: "loaded",})}}}


    useEffect(() => {
        let mounted = true;
        const cancelTokenSource = axios.CancelToken.source();
        if (mounted) { 
        if (loaded === "loaded" && props.data.info !== null) {
            setPokePicture(props.data.info.sprites.other.[official].front_default)
            setPokeName(props.data.info.forms[0].name); 
        setPokeURL(props.data.info.species.url)
        axios.get(pokeURL, {
            cancelToken: cancelTokenSource.token
          }).then(showEvolutionInfo);
          return function cleanup() {
            mounted = false
            cancelTokenSource.cancel();
        }}}}, [props.data.info]);
 
    if (loaded === "loaded" && props.data.info !== null){ 
        if (pokeInfo.info !== null){
    return(<div className="evolvesFrom">
        <h2 className="evolvesFromHeader">Evolves from</h2>
        <img src={pokePicture} alt={pokeName} className="evolutionImg"/>
        <h2 className="nameTitle">{pokeName}</h2>
        <ExtendedEvolutionInfo data={pokeInfo} /> </div>)}
        else { return(<div className="evolvesFrom">
        <h2 className="evolvesFromHeader">Evolves from</h2>
        <img src={pokePicture} alt={pokeName} className="evolutionImg"/>
        <h2 className="nameTitle">{pokeName}</h2></div>)}}
else if (loaded === "loaded" && props.data.info === null) {return(null)}
else {return("loading")}}
    