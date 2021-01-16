import React, {useState} from "react"
import axios from "axios";
import loading from "./loading.gif";

export default function PokeSearch(){
const [pokemon, Setpokemon] = useState("null");
const [shinyIcon, setShinyIcon] = useState("null");
const [regularIcon, setRegularIcon] = useState("null");
const [ability1, setability1] = useState("null");
const [ability2, setability2] = useState("null");
const [loaded, setLoaded] = useState(false);


function setPokeInfo(response){
setShinyIcon(response.data.sprites.front_shiny);
setRegularIcon(response.data.sprites.front_default);
setability1(response.data.abilities[0].ability);
setability2(response.data.abilities[1].ability);
setLoaded(true);
}

function handleSubmit(event){  event.preventDefault();
    const APIurl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
axios.get(APIurl).then(setPokeInfo);
}

function setPokemon(event){
    event.preventDefault();
   const pokemonLowercase = (event.target.value).toLowerCase();
    Setpokemon(pokemonLowercase);
}

if(loaded && shinyIcon !=null ){return(
        <div className="PokeSearch">
    <form onSubmit={handleSubmit} >
    <input type="text" onChange={setPokemon} placeholder="Type a Pokemon Name" />
    <input type="submit" placeholder="Submit" />
    </form>
    <div className="row">
    <div className="card"> <img src={regularIcon} alt="icon" /> </div>
    <div className="card">
    <img src={shinyIcon} alt="shiny" /> </div></div>

        </div>)}
else if (loaded && shinyIcon === null){ return(
    <div className="PokeSearch">
<form onSubmit={handleSubmit} >
<input type="text" onChange={setPokemon} placeholder="Type a Pokemon Name" />
<input type="submit" placeholder="Submit" />
</form>
<div className="card">
<img src={regularIcon} alt="icon" /> </div>


    </div>)}

else{return(
<div className="loading">
<form onSubmit={handleSubmit} >
    <input type="text" onChange={setPokemon} placeholder="Type a Pokemon Name" />
    <input type="submit" placeholder="Submit" />
    </form>
    <h2>currently loading pokemon</h2> 
    <img src={loading} alt="loading spinner" />
</div>

)}
}