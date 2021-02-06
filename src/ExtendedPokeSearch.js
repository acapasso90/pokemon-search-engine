import React, {useState} from "react"
import axios from "axios";
import loading from "./loading.gif";
import ExtendedPokeInfo from "./ExtendedPokeInfo.js"


export default function PokeSearch(){
    const [pokemonType, setPokemonType] = useState("dark");
    const [nameType, setNameType] = useState("");
    const [pokemonTypeReady, setPokemonTypeReady] = useState("");
    const [arrayLength, setArrayLength] = useState("");
    const [pokeinfo, Setpokeinfo] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [loadedStatus, setLoadedStatus] = useState(" ");
    
    function setInfo(response){
      setNameType(response.data.name);
        Setpokeinfo(response.data.pokemon);
       setArrayLength(response.data.pokemon.length);
    setLoaded(true);
    setLoadedStatus("loaded");
    }
    
    function handleSubmit(event){  event.preventDefault();
        setPokemonType(pokemonTypeReady);
        const APIurl = `https://pokeapi.co/api/v2/type/${pokemonType}`;
    axios.get(APIurl).then(setInfo);
    }
    
    
    function setPokemon(event){
        event.preventDefault();
       const pokemonTypeLowercase = (event.target.value).toLowerCase();
       setPokemonTypeReady(pokemonTypeLowercase);
    }
    
    function extendedSearch() {
        const APIurl = `https://pokeapi.co/api/v2/type/${pokemonType}`;
    axios.get(APIurl).then(setInfo);}
    
    
    if(loaded){
        return(
            <div className="PokeSearch">
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={setPokemon} placeholder="Search by Pokémon Type" 
        className="searchBar" />
        <input type="submit" placeholder="Submit" className="submitButton" />
        </form>
        <h4>Current type: {pokemonType} </h4>
        {pokeinfo.slice(0, arrayLength).map(function(pokemonNumber){
            return(<ExtendedPokeInfo data={pokemonNumber.pokemon.url} type={nameType} loading={loadedStatus}/>)})}
            </div>)}
    
    else{ extendedSearch();
        return(
    <div className="loading">
        <img src={loading} alt="loading" />
    </div>
    
    )}
    }