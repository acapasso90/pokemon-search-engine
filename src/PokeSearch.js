import React, {useState, useEffect} from "react"
import axios from "axios";
import loading from "./loading.gif";
import PokeInfo from "./PokeInfo.js";

export default function PokeSearch(){
const [pokemon, Setpokemon] = useState("alcremie");
const [pokeinfo, setPokeinfo] = useState("");
const [pokeType, setPokeType] = useState("");
const [borderColor, setBorderColor] = useState("");
const [loaded, setLoaded] = useState(false);
const [loadedStatus, setLoadedStatus] = useState(" ");
const borderstyle = {border: `7px solid ${borderColor}`,}
// sets Pokemon iinfo and sets loaded status for PokeInfo.js
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


useEffect(() => {
// sets color for border around PokeInfo dependant on pokemon type
if (pokeType === "fairy"){setBorderColor("#e87a9c");}
else if (pokeType === "poison" || pokeType === "ghost" || pokeType === "psychic"){setBorderColor("#800fc1");}
else if (pokeType === "water"){setBorderColor("#1078c0");}
else if (pokeType === "ground"){setBorderColor("#872619");}
else if (pokeType === "rock"){setBorderColor("#5b4231");}
else if (pokeType === "fighting"){setBorderColor("#fa2f00");}
else if (pokeType === "electric"){setBorderColor("#efc10b");}
else if (pokeType === "grass"){setBorderColor("#05bb0e");}
else if (pokeType === "fire"){setBorderColor("#ea0600");}
else if (pokeType === "ice"){setBorderColor("#00d7ea");}
else if (pokeType === "dark"){setBorderColor("#000000");}
else if (pokeType === "dragon" || pokeType === "bug" ){setBorderColor("#7caa4e");}
else if (pokeType === "normal" || pokeType === "flying" || pokeType === "steel"){setBorderColor("#a6a6a6");}
  }, [pokeType]);

// once loaded shows input forms and displays PokeInfo from default search
if(loaded){return(
        <div className="PokeSearch" key={pokeinfo}>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={setPokemon} placeholder="Type a Pokémon Name" 
    className="searchBar" />
    <input type="submit" placeholder="Submit" className="submitButton" />
    </form>
    <div className="pokesearchBorderBox" style={borderstyle}>
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