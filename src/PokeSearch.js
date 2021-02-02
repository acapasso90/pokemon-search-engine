import React, {useState} from "react"
import axios from "axios";
import loading from "./loading.gif";
import PokeInfo from "./PokeInfo.js";

export default function PokeSearch(){
const [pokemon, Setpokemon] = useState("alcremie");
const [pokeinfo, Setpokeinfo] = useState("");
const [loaded, setLoaded] = useState(false);
const [loadedStatus, setLoadedStatus] = useState(" ");
// sets Pokemon iinfo and sets loaded status for PokeInfo.js
function setInfo(response){
    Setpokeinfo(response.data)
setLoaded(true);
setLoadedStatus("loaded");
}
// prevents page refreshing and searches pokemon with pokemon set in setPokemon
function handleSubmit(event){  event.preventDefault();
   searchPokemon();
}

// on text input pokemon is changed to what is typed
function setPokemon(event){
    event.preventDefault();
   const pokemonLowercase = (event.target.value).toLowerCase();
    Setpokemon(pokemonLowercase);
}

// Searches pokemon and makes axios request to setInfo
function searchPokemon () {    const APIurl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
axios.get(APIurl).then(setInfo);}

// once loaded shows input forms and displays PokeInfo from default search
if(loaded){return(
        <div className="PokeSearch">
    <form onSubmit={handleSubmit} >
    <input type="text" onChange={setPokemon} placeholder="Type a Pokémon Name" 
    className="searchBar" />
    <input type="submit" placeholder="Submit" className="submitButton" />
    </form>
    <PokeInfo data={pokeinfo} loading={loadedStatus} />
        </div>)}
//  searches default pokemon and shows loading pokeball gif
else{ searchPokemon();
    return(
<div className="loading">
    <img src={loading} alt="loading" />
</div>

)}
}