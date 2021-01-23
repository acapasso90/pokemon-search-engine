import React, {useState} from "react"
import axios from "axios";
import loading from "./loading.gif";
import ExtendedPokeInfo from "./ExtendedPokeInfo.js"


export default function PokeSearch(){
    const [pokemon, Setpokemon] = useState("alcremie");
    const [pokeinfo, Setpokeinfo] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [loadedStatus, setLoadedStatus] = useState(" ");
    
    function setInfo(response){
        Setpokeinfo(response.data)
    setLoaded(true);
    setLoadedStatus("loaded");
    }
    
    function handleSubmit(event){  event.preventDefault();
        const APIurl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    axios.get(APIurl).then(setInfo);
    }
    
    
    function setPokemon(event){
        event.preventDefault();
       const pokemonLowercase = (event.target.value).toLowerCase();
        Setpokemon(pokemonLowercase);
    }
    
    function extendedSearch() {const APIurl = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    axios.get(APIurl).then(setExtendedInfo);}
    
    if(loaded){return(
            <div className="PokeSearch">
        <form onSubmit={handleSubmit} >
        <input type="text" onChange={setPokemon} placeholder="Type a Pokemon Name" 
        className="searchBar" />
        <input type="submit" placeholder="Submit" className="submitButton" />
        </form>
        <ExtendedPokeInfo data={pokeinfo[0].url} />
   <ExtendedPokeInfo data={pokeinfo[50].url} />
            </div>)}
    
    else{ extendedSearch();
        return(
    <div className="loading">
        <img src={loading} alt="loading" />
    </div>
    
    )}
    }