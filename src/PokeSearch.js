import React, {useState, useEffect} from "react"
import axios from "axios";
import loading from "./loading.gif";
import PokeInfo from "./PokeInfo.js";

export default function PokeSearch(){
const [pokemon, Setpokemon] = useState("alcremie");
const [pokeinfo, setPokeinfo] = useState("");
const [pokeType, setPokeType] = useState("");
const [loaded, setLoaded] = useState(false);
const [borderStyle, setBorderStyle] = useState("");
const [loadedStatus, setLoadedStatus] = useState(" ");

// sets Pokemon info and sets loaded status for PokeInfo.js
function setInfo(response){
    setPokeinfo(response.data)
    setPokeType(response.data.types[0].type.name);
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


const fairyBorder = {borderTop: "7px solid #e87a9c", borderBottom: "7px solid #e87a9c", borderRight: "200px solid #e87a9c", borderLeft: "200px solid #e87a9c",};
const poisonBorder = {borderTop: "7px solid #800fc1", borderBottom: "7px solid #800fc1", borderRight: "200px solid #800fc1", borderLeft: "200px solid #800fc1",};
const waterBorder = {border: "7px solid #1078c0", borderWidth: "7px 200px",};
const groundBorder = {border: "7px solid #872619", borderWidth: "7px 200px",};
const rockBorder = {border: "7px solid #5b4231", borderWidth: "7px 200px",};
const fightingBorder = {border: "7px solid solid #fa2f00", borderWidth: "7px 200px",};
const electricBorder = {border: "7px solid #efc10b", borderWidth: "7px 200px",};
const grassBorder = {border: "7px solid #05bb0e", borderWidth: "7px 200px",};
const fireBorder =  {border: "7px solid #ea0600", borderWidth: "7px 200px",};
const iceBorder = {border: "7px solid #00d7ea", borderWidth: "7px 200px",};
const darkBorder = {border: "7px solid #000000", borderWidth: "7px 200px",};
const dragonBorder = {border: "7px solid #7caa4e", borderWidth: "7px 200px",};
const normalBorder = {border: "7px solid #a6a6a6", borderWidth: "7px 200px",}; 

useEffect(() => {
    
// sets color for border around PokeInfo dependant on pokemon type
if (pokeType === "fairy"){setBorderStyle(fairyBorder)}
else if (pokeType === "poison" || pokeType === "ghost" || pokeType === "psychic"){setBorderStyle(poisonBorder);}
else if (pokeType === "water"){setBorderStyle(waterBorder);}
else if (pokeType === "ground"){setBorderStyle(groundBorder);}
else if (pokeType === "rock"){setBorderStyle(rockBorder);}
else if (pokeType === "fighting"){setBorderStyle(fightingBorder);}
else if (pokeType === "electric"){setBorderStyle(electricBorder);}
else if (pokeType === "grass"){setBorderStyle(grassBorder)}
else if (pokeType === "fire"){setBorderStyle(fireBorder)}
else if (pokeType === "ice"){setBorderStyle(iceBorder)}
else if (pokeType === "dark"){setBorderStyle(darkBorder)}
else if (pokeType === "dragon" || pokeType === "bug" ){setBorderStyle(dragonBorder)}
else if (pokeType === "normal" || pokeType === "flying" || pokeType === "steel"){setBorderStyle(normalBorder)}
}, [pokeType]);


// once loaded shows input forms and displays PokeInfo from default search
if(loaded){return(
        <div className="PokeSearch" key={pokeinfo}>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={setPokemon} placeholder="Type a Pokémon Name" 
    className="searchBar" />
    <input type="submit" placeholder="Submit" className="submitButton" />
    </form>
    <div className="pokesearchBorderBox" id="BorderBox" style={borderStyle}>
    <PokeInfo data={pokeinfo} loading={loadedStatus} />
    </div>
        </div>)}
//  searches default pokemon and shows loading pokeball gif
else{ searchPokemon();
    return(
<div className="loading">
    <img src={loading} alt="loading" />
</div>

)}
}