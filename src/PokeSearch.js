import React, {useState} from "react"
import axios from "axios";
import loading from "./loading.gif";
import PokeInfo from "./PokeInfo.js";

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

function searchPokemon () {    const APIurl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
axios.get(APIurl).then(setInfo);}

if(loaded){return(
        <div className="PokeSearch">
    <form onSubmit={handleSubmit} >
    <input type="text" onChange={setPokemon} placeholder="Type a Pokemon Name" />
    <input type="submit" placeholder="Submit" />
    </form>
    <PokeInfo data={pokeinfo} loading={loadedStatus} />
        </div>)}

else{ searchPokemon();
    return(
<div className="loading">
    <img src={loading.gif} alt="loading" />
</div>

)}
}