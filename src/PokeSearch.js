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


const fairyBorder = {borderTop: "40px solid #e87a9c", borderBottom: "40px solid #e87a9c", borderRight: "200px solid #e87a9c", borderLeft: "200px solid #e87a9c", borderRadius: "3px"};
const poisonBorder = {borderTop: "40px solid #800fc1", borderBottom: "40px solid #800fc1", borderRight: "200px solid #800fc1", borderLeft: "200px solid #800fc1", borderRadius: "3px"};
const waterBorder = {borderTop: "40px solid #1078c0", borderBottom: "40px solid #1078c0", borderRight: "200px solid #1078c0", borderLeft: "200px solid #1078c0", borderRadius: "3px"};
const groundBorder = {borderTop: "40px solid #872619", borderBottom: "40px solid #872619", borderRight: "200px solid #872619", borderLeft: "200px solid #872619", borderRadius: "3px"};
const rockBorder = {borderTop: "40px solid #5b4231", borderBottom: "40px solid #5b4231", borderRight: "200px solid #5b4231", borderLeft: "200px solid #5b4231", borderRadius: "3px"};
const fightingBorder = {borderTop: "40px solid #fa2f00", borderBottom: "40px solid #fa2f00", borderRight: "200px solid #fa2f00", borderLeft: "200px solid #fa2f00", borderRadius: "3px"};
const electricBorder = {borderTop: "40px solid #efc10b", borderBottom: "40px solid #efc10b", borderRight: "200px solid #efc10b", borderLeft: "200px solid #efc10b", borderRadius: "3px"};
const grassBorder = {borderTop: "40px solid #05bb0e", borderBottom: "40px solid #05bb0e", borderRight: "200px solid #05bb0e", borderLeft: "200px solid #05bb0e", borderRadius: "3px"};
const fireBorder =  { borderTop: "40px solid #ea0600", borderBottom: "40px solid #ea0600", borderRight: "200px solid #ea0600", borderLeft: "200px solid #ea0600", borderRadius: "3px"};
const iceBorder = {borderTop: "40px solid #00d7ea", borderBottom: "40px solid #00d7ea", borderRight: "200px solid #00d7ea", borderLeft: "200px solid #00d7ea", borderRadius: "3px"};
const darkBorder = {borderTop: "40px solid #000000", borderBottom: "40px solid #000000", borderRight: "200px solid #000000", borderLeft: "200px solid #000000", borderRadius: "3px"};
const dragonBorder = {borderTop: "40px solid #7caa4e", borderBottom: "40px solid #7caa4e", borderRight: "200px solid #7caa4e", borderLeft: "200px solid #7caa4e", borderRadius: "3px"};
const normalBorder = {borderTop: "40px solid #a6a6a6", borderBottom: "40px solid #a6a6a6", borderRight: "200px solid #a6a6a6", borderLeft: "200px solid #a6a6a6", borderRadius: "3px"}; 

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