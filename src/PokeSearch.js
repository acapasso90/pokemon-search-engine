import React, {useState, useEffect} from "react"
import axios from "axios";
import loading from "./loading.gif";
import PokeInfo from "./PokeInfo.js";

export default function PokeSearch(){
const [pokemon, Setpokemon] = useState("alcremie");
const [pokeinfo, Setpokeinfo] = useState("");
const [loaded, setLoaded] = useState(false);


function setInfo(response){
    Setpokeinfo(response.data)
setLoaded(true);
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
    <PokeInfo data={pokeinfo} />
        </div>)}

else{ searchPokemon();
    return(
<div className="loading">
<form onSubmit={handleSubmit} >
    <input type="text" onChange={setPokemon} placeholder="Type a Pokemon Name" />
    <input type="submit" placeholder="Submit" />
    </form>
    <h2>currently loading pokemon</h2> 
</div>

)}
}