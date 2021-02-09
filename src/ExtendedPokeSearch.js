import React, {useState} from "react"
import axios from "axios";
import loading from "./loading.gif";
import ExtendedPokeInfo from "./ExtendedPokeInfo.js"


export default function PokeSearch(){
    const [pokemonType, setPokemonType] = useState("dark");
    const [nameType, setNameType] = useState("");
    const [arrayLength, setArrayLength] = useState("");
    const [pokeinfo, Setpokeinfo] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [loadedStatus, setLoadedStatus] = useState(" ");

// Sets pokemon name, length of array in that pokemon type, and pokemonType
    function setInfo(response){
      setNameType(response.data.name);
        Setpokeinfo(response.data.pokemon);
       setArrayLength(response.data.pokemon.length);
    setLoaded(true);
    setLoadedStatus("loaded");
    }

// Sets pokemonType to lowercase search input then runs extendedSearch with new value
    function handleSubmit(event){  event.preventDefault();
        extendedSearch();
    }
    
// Sets search input to lowercase and sets that lowercase value to pokemonTypeLowercase
    function setPokemon(event){
        event.preventDefault();
       const pokemonTypeLowercase = (event.target.value).toLowerCase();
       setPokemonType(pokemonTypeLowercase);
    }
    
// Axios makes APIrequest with pokemonType as search parameter
    function extendedSearch() { const APIurl = `https://pokeapi.co/api/v2/type/${pokemonType}`;
    axios.get(APIurl).then(setInfo);}
    
// if Loaded displays search bars and pokemon of default type set in useState. Runs loops for as long as arrayLength is to display extendedPokeinfo.
    if(loaded){
        return(
            <div className="PokeSearch">
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={setPokemon} placeholder="Search by Pokémon Type" 
        className="searchBar" />
        <input type="submit" placeholder="Submit" className="submitButton" />
        </form>
        <h4>Current type: {nameType} </h4>
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