import React, {useEffect, useState} from "react";
import axios from "axios";
import EvolutionInfo from "./EvolutionInfo.js"


export default function PokeInfo(props){

const official = "official-artwork"
let loaded = props.loading;
let shinyIcon = props.data.sprites.front_shiny;
let regularIcon = props.data.sprites.front_default;
let pokePicture = props.data.sprites.other.[official].front_default;
let ability1 = props.data.abilities[0].ability.name;
let abilityList = props.data.abilities;
let ability2 = null;
if (abilityList.length > 1){ability2 = props.data.abilities[1].ability.name;}
let stat1name = props.data.stats[0].stat.name;
let stat1 = props.data.stats[0].base_stat;
let stat2name = props.data.stats[1].stat.name;
let stat2 = props.data.stats[1].base_stat;
let stat3name = props.data.stats[2].stat.name;
let stat3 = props.data.stats[2].base_stat;
let stat4name = props.data.stats[3].stat.name;
let stat4 = props.data.stats[3].base_stat;
let stat5name = props.data.stats[4].stat.name;
let stat5 = props.data.stats[4].base_stat;
let stat6name = props.data.stats[5].stat.name;
let stat6 = props.data.stats[5].base_stat;
let evolutionURL = props.data.species.url;
const cancelTokenSource = axios.CancelToken.source();
const [pokeInfo, setPokeInfo] = useState("");

function showEvolutionExtendedInfo(response){
    setPokeInfo(response.data);}

function showEvolutionInfo(response){
let evolutionName = response.data.evolves_from_species.name;
const APIurl = `https://pokeapi.co/api/v2/pokemon/${evolutionName}`;
axios.get(APIurl).then(showEvolutionExtendedInfo);}


useEffect(() => {
    let mounted = true;
    if (mounted) {axios.get(evolutionURL, {
        cancelToken: cancelTokenSource.token
      }).then(showEvolutionInfo);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, []);


let type = props.data.types[0].type.name;
let pokename = (props.data.forms[0].name);
let card = document.querySelector('.card');
let shinyCard = document.getElementById('card2');
if(loaded === "loaded"){
if (type === "water") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('bug');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('ground');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('bug');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('water'); shinyCard.classList.add('water');} 

    else if (type === "bug"){card.classList.remove('steel'); card.classList.remove('psychic');
    card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
    card.classList.remove('grass'); card.classList.remove('ghost');
    card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
    card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('ground');
    card.classList.remove('darkness'); card.classList.remove('fighting');
    shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
    shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice'); 
    shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('ground');
    shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
    shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('poison');
    shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
        card.classList.add('bug'); shinyCard.classList.add('bug');} 

    else if (type === "ground") {card.classList.remove('steel'); card.classList.remove('psychic');
    card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
    card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('water');
    card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
    card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('bug');
    card.classList.remove('darkness'); card.classList.remove('fighting');
    shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
    shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('bug');
    shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('water');
    shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
    shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('poison');
    shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
        card.classList.add('ground'); shinyCard.classList.add('ground');} 

    else if (type === "steel") {card.classList.remove('water'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('ground');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('poison');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('bug');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('water'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('bug');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('steel'); shinyCard.classList.add('steel');}

    else if (type === "normal" || type === "flying"){card.classList.remove('water'); card.classList.remove('psychic');
    card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('bug');
    card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('ground');
    card.classList.remove('steel'); card.classList.remove('fairy'); card.classList.remove('rock');
    card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('poison');
    card.classList.remove('darkness'); card.classList.remove('fighting');
    shinyCard.classList.remove('water'); shinyCard.classList.remove('psychic');
    shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('ground');
    shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');  shinyCard.classList.remove('steel');
    shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('bug');
    shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('poison');
    shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
        card.classList.add('normal'); shinyCard.classList.add('normal');}

    else if (type === "psychic") {
    card.classList.remove('steel'); card.classList.remove('water');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('bug');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('water');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting'); shinyCard.classList.remove('bug');
    card.classList.add('psychic'); shinyCard.classList.add('psychic');}

    else if (type === "poison"){card.classList.remove('steel'); card.classList.remove('psychic');
    card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('water');
    card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('bug');
    card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
    card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('ground');
    card.classList.remove('darkness'); card.classList.remove('fighting'); 
    shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
    shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
    shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('ground');
    shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
    shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');  shinyCard.classList.remove('bug');
    shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting'); shinyCard.classList.remove('water');
        card.classList.add('poison'); shinyCard.classList.add('poison');} 

else if (type === "electric") {    card.classList.remove('steel'); card.classList.remove('water');
card.classList.remove('psychic'); card.classList.remove('ice'); card.classList.remove('bug');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('poison');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('water');
shinyCard.classList.remove('psychic'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('bug');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('electric'); shinyCard.classList.add('electric');}

else if (type === "ice") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('water');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('poison');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('ground');
card.classList.remove('darkness'); card.classList.remove('fighting'); card.classList.remove('bug');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('water');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting'); shinyCard.classList.remove('bug');
    card.classList.add('ice'); shinyCard.classList.add('ice');}

else if (type === "grass") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('water'); card.classList.remove('ghost'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('bug');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('water'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting'); shinyCard.classList.remove('bug');
    card.classList.add('grass'); shinyCard.classList.add('grass');
    }


else if (type === "ghost") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('water'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('bug');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('water'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('bug');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('ghost'); shinyCard.classList.add('ghost');}

else if (type === "fire") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('bug');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('poison');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('water'); card.classList.remove('dragon'); card.classList.remove('ground');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('bug');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('water'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting'); shinyCard.classList.remove('normal');
    card.classList.add('fire'); shinyCard.classList.add('fire');
    }

else if (type === "fairy") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('bug');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('poison');
card.classList.remove('water'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('ground');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('bug');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('water'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('fairy'); shinyCard.classList.add('fairy');}

else if (type === "rock") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('normal');
card.classList.remove('fairy'); card.classList.remove('water'); card.classList.remove('ground');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('bug');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('bug');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('water'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('rock'); shinyCard.classList.add('rock');
    }
else if (type === "dragon") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('water'); card.classList.remove('bug');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('bug');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('water'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('dragon'); shinyCard.classList.add('dragon');}

else if (type === "dark"){card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('bug');
card.classList.remove('water'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('bug');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('water'); shinyCard.classList.remove('fighting'); shinyCard.classList.remove('poison');
    card.classList.add('darkness'); shinyCard.classList.add('darkness');} 

else {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('bug');
card.classList.remove('darkness'); card.classList.remove('water');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('water'); shinyCard.classList.remove('bug');
    card.classList.add('fighting'); shinyCard.classList.add('fighting');
}}


if (shinyIcon != null && abilityList.length <= 1){
    return(<div className="pokeInfo">
    <div className="row">
    <div className="card"> 
    <h3 className="pokeName">{pokename}</h3> <img src={regularIcon} className="icon" alt="icon" />
    Ability: {ability1}  
  </div>
    <div className="card" id="card2">
    <h3 className="pokeName">Shiny {pokename}</h3>
    <img src={shinyIcon} className="icon" alt="shiny" /> 
 Ability: {ability1}
</div></div>
    <img src={pokePicture} className="officialImg" alt="officialArtwork" />
    <div className="right">
    <div className="column">
    {stat1name}: {stat1} <br />
    {stat2name}: {stat2} <br />
    {stat3name}: {stat3} <br />
        {stat4name}: {stat4} <br />
        {stat5name}: {stat5} <br />
        {stat6name}: {stat6} <br />
</div>
    </div>
    </div>    )}

    else if (abilityList.length > 1) {return(<div className="pokeInfo">
    <div className="row">
    <div className="card"> 
    <h3 className="pokeName">{pokename}</h3> <img src={regularIcon} className="icon" alt="icon" />
    Ability: {ability1} 
    <br />
    Ability: {ability2}
  </div>
    <div className="card" id="card2">
    <h3 className="pokeName">Shiny {pokename}</h3>
    <img src={shinyIcon} className="icon" alt="shiny" /> 
 Ability: {ability1}
 <br />
 Ability: {ability2}
</div></div>
    <img src={pokePicture} className="officialImg" alt="officialArtwork" />
    <div className="right">
        <div className="column">
        {stat1name}: {stat1} <br />
    {stat2name}: {stat2} <br />
    {stat3name}: {stat3} <br />
        {stat4name}: {stat4} <br />
        {stat5name}: {stat5} <br />
        {stat6name}: {stat6} <br />
        </div>
    </div>
    <EvolutionInfo data={pokeInfo} />
    </div>    )}


else { return(<div className="pokeInfo">
<div className="row">
<div className="card" id="card" > 
<h3 className="pokeName">{pokename}</h3> <img src={regularIcon} className="icon" alt="icon" />  Ability: {ability1}
<div className="hidden2">Hidden</div> Ability: {ability2}
</div>
</div>
    <img src={pokePicture} className="officialImg" alt="officialArtwork" />
    <div className="right">
        <div className="column">
    {stat1name}: {stat1} <br />
    {stat2name}: {stat2} <br />
    {stat3name}: {stat3} <br />
        {stat4name}: {stat4} <br />
        {stat5name}: {stat5} <br />
        {stat6name}: {stat6} <br />
        </div>
    </div>

</div>)}}