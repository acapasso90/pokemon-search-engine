import React, {useEffect, useState} from "react";
import axios from "axios";
import EvolutionInfo from "./EvolutionInfo.js";
import grassIcon from "./grassIcon.png";
import groundIcon from "./groundIcon.png"
import bugIcon from "./bugIcon.png";
import darkIcon from "./darkicon.png";
import dragonIcon from "./dragonIcon.png";
import electricIcon from "./electricIcon.png";
import fairyIcon from "./fairyIcon.png";
import fightingIcon from "./fightingIcon.png";
import fireIcon from "./fireIcon.png";
import flyingIcon from "./flyingIcon.png";
import ghostIcon from "./ghostIcon.png";
import iceIcon from "./iceIcon.png";
import normalIcon from "./normalIcon.png";
import poisonIcon from "./poisonIcon.png";
import psychicIcon from "./psychicIcon.png";
import rockSymbol from "./rockSymbol.png";
import steelIcon from "./steelIcon.png";
import waterIcon from "./waterIcon.png";


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
const [pokeInfo, setPokeInfo] = useState("");
let bug = document.querySelector(".bugIcon");
let fire = document.querySelector(".fireIcon");
let ice = document.querySelector(".iceIcon");
let steel = document.querySelector(".steelIcon");
let poison = document.querySelector(".poisonIcon");
let flying = document.querySelector(".flyingIcon");
let fairy = document.querySelector(".fairyIcon");
let dark = document.querySelector(".darkIcon");
let ghost = document.querySelector(".ghostIcon");
let fighting = document.querySelector(".fightingIcon");
let psychic = document.querySelector(".psychicIcon");
let grass = document.querySelector(".grassIcon")
let rock = document.querySelector(".rockSymbol");
let normal = document.querySelector(".normalIcon");
let dragon = document.querySelector(".dragonIcon");
let ground = document.querySelector(".groundIcon");
let water = document.querySelector(".waterIcon");
let electric = document.querySelector(".electricIcon");
let bug2 = document.querySelector(".bugIconStr");
let fire2 = document.querySelector(".fireIconStr");
let ice2 = document.querySelector(".iceIconStr");
let steel2 = document.querySelector(".steelIconStr");
let poison2 = document.querySelector(".poisonIconStr");
let flying2 = document.querySelector(".flyingIconStr");
let fairy2 = document.querySelector(".fairyIconStr");
let dark2 = document.querySelector(".darkIconStr");
let ghost2 = document.querySelector(".ghostIconStr");
let fighting2 = document.querySelector(".fightingIconStr");
let psychic2 = document.querySelector(".psychicIconStr");
let grass2 = document.querySelector(".grassIconStr")
let rock2 = document.querySelector(".rockSymbolStr");
let normal2 = document.querySelector(".normalIconStr");
let dragon2 = document.querySelector(".dragonIconStr");
let ground2 = document.querySelector(".groundIconStr");
let water2 = document.querySelector(".waterIconStr");
let electric2 = document.querySelector(".electricIconStr");
let type = props.data.types[0].type.name;
let type2 = null;
if (props.data.types.length > 1){type2 = props.data.types[1].type.name;}
let pokename = (props.data.forms[0].name);
let pokeType = document.querySelector(".typeTitle");


let card = document.querySelector('.card');
let shinyCard = document.getElementById('card2');

function showEvolutionExtendedInfo(response){
    setPokeInfo({info: response.data,
      loaded: "loaded",});}

function showEvolutionInfo(response){
let doesEvolve = response.data.evolves_from_species;
if (doesEvolve != null){
    let evolutionName = response.data.evolves_from_species.name;
const APIurl = `https://pokeapi.co/api/v2/pokemon/${evolutionName}`;
axios.get(APIurl).then(showEvolutionExtendedInfo);}
else {setPokeInfo({info: null,
loaded: "loaded",})}}


useEffect(() => {
    let mounted = true;
    const cancelTokenSource = axios.CancelToken.source();
    if (mounted) {axios.get(evolutionURL, {
        cancelToken: cancelTokenSource.token
      }).then(showEvolutionInfo);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, [evolutionURL]);

  useEffect(() => {
    if(loaded === "loaded"){
        //  removes pre-existing classLists from typeIcons in Weak Against
    poison.classList.remove("weak2"); steel.classList.remove("weak2"); ice.classList.remove("weak2");  flying.classList.remove("weak2"); 
    ghost.classList.remove("weak2"); dark.classList.remove("weak2"); fire.classList.remove("weak2"); dragon.classList.remove("weak2");
    ground.classList.remove("weak2"); water.classList.remove("weak2"); rock.classList.remove("weak2"); electric.classList.remove("weak2"); grass.classList.remove("weak2");
    fairy.classList.remove("weak2"); bug.classList.remove("weak2"); fighting.classList.remove("weak2"); psychic.classList.remove("weak2");
    normal.classList.remove("weak2");
         //  removes pre-existing classLists from typeIcons in Effective Against
         poison2.classList.remove("weak2"); steel2.classList.remove("weak2"); ice2.classList.remove("weak2");  flying2.classList.remove("weak2"); 
         ghost2.classList.remove("weak2"); dark2.classList.remove("weak2"); fire2.classList.remove("weak2"); dragon2.classList.remove("weak2");
         ground2.classList.remove("weak2"); water2.classList.remove("weak2"); rock2.classList.remove("weak2"); electric2.classList.remove("weak2"); grass2.classList.remove("weak2");
         fairy2.classList.remove("weak2"); bug2.classList.remove("weak2"); fighting2.classList.remove("weak2"); psychic2.classList.remove("weak2");
         normal2.classList.remove("weak2");
         //  removes pre-existing classLists from cards and ShinyCards 
    card.classList.remove('steel'); card.classList.remove('psychic'); card.classList.remove('water');
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
    shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');    shinyCard.classList.remove('water');
         //adds new classLists on change
         if (type === "fairy" || type2 === "fairy") {steel.classList.add("weak2");  poison.classList.add("weak2"); fighting2.classList.add("weak2"); dark2.classList.add("weak2");  dragon2.classList.add("weak2");}
         if (type === "ghost" || type2 === "ghost") {ghost.classList.add("weak2"); dark.classList.add("weak2"); ghost2.classList.add("weak2"); psychic2.classList.add("weak2"); }
          if (type === "psychic" || type2 === "psychic"){dark.classList.add("weak2"); bug.classList.add("weak2"); ghost.classList.add("weak2"); fighting2.classList.add("weak2"); poison2.classList.add("weak2");} 
         if (type === "grass" || type2 === "grass"){ice.classList.add("weak2"); fire.classList.add("weak2"); poison.classList.add("weak2"); bug.classList.add("weak2"); flying.classList.add("weak2"); ground2.classList.add("weak2"); rock2.classList.add("weak2"); water2.classList.add("weak2");}
         if (type === "bug" || type2 === "bug"){fire.classList.add("weak2"); flying.classList.add("weak2"); rock.classList.add("weak2");grass2.classList.add("weak2"); psychic2.classList.add("weak2"); dark2.classList.add("weak2"); }
         if (type === "fire" || type2 === "fire"){ ground.classList.add("weak2"); water.classList.add("weak2"); rock.classList.add("weak2"); bug2.classList.add("weak2"); steel2.classList.add("weak2"); grass2.classList.add("weak2"); ice2.classList.add("weak2");}
         if (type === "water" || type2 === "water"){electric.classList.add("weak2"); grass.classList.add("weak2"); ground2.classList.add("weak2"); rock2.classList.add("weak2"); fire2.classList.add("weak2"); }
         if (type === "dark" || type2 === "dark") {fairy.classList.add("weak2"); bug.classList.add("weak2"); fighting.classList.add("weak2"); ghost2.classList.add("weak2"); psychic2.classList.add("weak2"); }
         if (type === "dragon" || type2 === "dragon"){dragon.classList.add("weak2"); fairy.classList.add("weak2"); ice.classList.add("weak2"); dragon2.classList.add("weak2"); }
         if (type === "electric" || type2 === "electric"){ground.classList.add("weak2"); flying2.classList.add("weak2"); water2.classList.add("weak2");}
         if (type === "fighting" || type2 === "fighting"){flying.classList.add("weak2"); fairy.classList.add("weak2"); psychic.classList.add("weak2"); normal2.classList.add("weak2"); rock2.classList.add("weak2"); steel2.classList.add("weak2"); ice2.classList.add("weak2"); dark2.classList.add("weak2");}
         if (type === "flying" || type2 === "flying"){rock.classList.add("weak2"); electric.classList.add("weak2"); ice.classList.add("weak2"); fighting2.classList.add("weak2"); bug2.classList.add("weak2"); grass2.classList.add("weak2");}
         if (type === "ground" || type2 === "ground"){ water.classList.add("weak2"); grass.classList.add("weak2"); ice.classList.add("weak2"); poison2.classList.add("weak2"); rock2.classList.add("weak2"); steel2.classList.add("weak2"); fire2.classList.add("weak2"); electric2.classList.add("weak2");}
         if (type === "ice" || type2 === "ice"){fighting.classList.add("weak2"); rock.classList.add("weak2"); steel.classList.add("weak2"); fire.classList.add("weak2"); grass2.classList.add("weak2"); dragon2.classList.add("weak2"); flying2.classList.add("weak2"); ground2.classList.add("weak2");}
         if (type === "normal" || type2 === "normal"){ fighting.classList.add("weak2"); }
         if (type === "poison" || type2 === "poison"){ground.classList.add("weak2"); psychic.classList.add("weak2"); grass2.classList.add("weak2"); fairy2.classList.add("weak2");}
         if (type === "rock" || type2 === "rock"){fighting.classList.add("weak2"); ground.classList.add("weak2"); steel.classList.add("weak2"); water.classList.add("weak2"); grass.classList.add("weak2"); flying2.classList.add("weak2"); bug2.classList.add("weak2"); fire2.classList.add("weak2"); ice2.classList.add("weak2"); }
         if (type === "steel" || type2 === "steel"){fighting.classList.add("weak2"); ground.classList.add("weak2"); fire.classList.add("weak2"); rock2.classList.add("weak2"); ice2.classList.add("weak2"); fairy2.classList.add("weak2");}
      //effecitve against type icons on change

    //adds card stylying on change 
 else   if (type === "water") {card.classList.add('water'); shinyCard.classList.add('water');} 
else if (type === "bug"){card.classList.add('bug'); shinyCard.classList.add('bug');} 
else if (type === "ground") {card.classList.add('ground'); shinyCard.classList.add('ground');} 
else if (type === "steel") { card.classList.add('steel'); shinyCard.classList.add('steel');}
else if (type === "normal" || type === "flying"){card.classList.add('normal'); shinyCard.classList.add('normal');}
else if (type === "psychic") {  card.classList.add('psychic'); shinyCard.classList.add('psychic');}
else if (type === "poison"){ card.classList.add('poison'); shinyCard.classList.add('poison');} 
else if (type === "electric") {card.classList.add('electric'); shinyCard.classList.add('electric');}
else if (type === "ice") {card.classList.add('ice'); shinyCard.classList.add('ice');}
else if (type === "grass") {card.classList.add('grass'); shinyCard.classList.add('grass'); }
else if (type === "ghost") {card.classList.add('ghost'); shinyCard.classList.add('ghost');}
else if (type === "fire") {card.classList.add('fire'); shinyCard.classList.add('fire');   }
else if (type === "fairy") {card.classList.add('fairy'); shinyCard.classList.add('fairy');}
else if (type === "rock") {card.classList.add('rock'); shinyCard.classList.add('rock'); }
else if (type === "dragon") {card.classList.add('dragon'); shinyCard.classList.add('dragon');}
else if (type === "dark"){ card.classList.add('darkness'); shinyCard.classList.add('darkness');} 
else {card.classList.add('fighting'); shinyCard.classList.add('fighting');}
}}
, [type, type2]);

if (loaded === "loaded"){
  // adds Effective against(ex dark2)/weak to(ex dark) Icons dependant on type1 and type 2 if applicable 
  if (type === "fairy" || type2 === "fairy") {steel.classList.add("weak2");  poison.classList.add("weak2"); fighting2.classList.add("weak2"); dark2.classList.add("weak2");  dragon2.classList.add("weak2");}
  if (type === "ghost" || type2 === "ghost") {ghost.classList.add("weak2"); dark.classList.add("weak2"); ghost2.classList.add("weak2"); psychic2.classList.add("weak2"); }
   if (type === "psychic" || type2 === "psychic"){dark.classList.add("weak2"); bug.classList.add("weak2"); ghost.classList.add("weak2"); fighting2.classList.add("weak2"); poison2.classList.add("weak2");} 
  if (type === "grass" || type2 === "grass"){ice.classList.add("weak2"); fire.classList.add("weak2"); poison.classList.add("weak2"); bug.classList.add("weak2"); flying.classList.add("weak2"); ground2.classList.add("weak2"); rock2.classList.add("weak2"); water2.classList.add("weak2");}
  if (type === "bug" || type2 === "bug"){fire.classList.add("weak2"); flying.classList.add("weak2"); rock.classList.add("weak2");grass2.classList.add("weak2"); psychic2.classList.add("weak2"); dark2.classList.add("weak2"); }
  if (type === "fire" || type2 === "fire"){ ground.classList.add("weak2"); water.classList.add("weak2"); rock.classList.add("weak2"); bug2.classList.add("weak2"); steel2.classList.add("weak2"); grass2.classList.add("weak2"); ice2.classList.add("weak2");}
  if (type === "water" || type2 === "water"){electric.classList.add("weak2"); grass.classList.add("weak2"); ground2.classList.add("weak2"); rock2.classList.add("weak2"); fire2.classList.add("weak2"); }
  if (type === "dark" || type2 === "dark") {fairy.classList.add("weak2"); bug.classList.add("weak2"); fighting.classList.add("weak2"); ghost2.classList.add("weak2"); psychic2.classList.add("weak2"); }
  if (type === "dragon" || type2 === "dragon"){dragon.classList.add("weak2"); fairy.classList.add("weak2"); ice.classList.add("weak2"); dragon2.classList.add("weak2"); }
  if (type === "electric" || type2 === "electric"){ground.classList.add("weak2"); flying2.classList.add("weak2"); water2.classList.add("weak2");}
  if (type === "fighting" || type2 === "fighting"){flying.classList.add("weak2"); fairy.classList.add("weak2"); psychic.classList.add("weak2"); normal2.classList.add("weak2"); rock2.classList.add("weak2"); steel2.classList.add("weak2"); ice2.classList.add("weak2"); dark2.classList.add("weak2");}
  if (type === "flying" || type2 === "flying"){rock.classList.add("weak2"); electric.classList.add("weak2"); ice.classList.add("weak2"); fighting2.classList.add("weak2"); bug2.classList.add("weak2"); grass2.classList.add("weak2");}
  if (type === "ground" || type2 === "ground"){ water.classList.add("weak2"); grass.classList.add("weak2"); ice.classList.add("weak2"); poison2.classList.add("weak2"); rock2.classList.add("weak2"); steel2.classList.add("weak2"); fire2.classList.add("weak2"); electric2.classList.add("weak2");}
  if (type === "ice" || type2 === "ice"){fighting.classList.add("weak2"); rock.classList.add("weak2"); steel.classList.add("weak2"); fire.classList.add("weak2"); grass2.classList.add("weak2"); dragon2.classList.add("weak2"); flying2.classList.add("weak2"); ground2.classList.add("weak2");}
  if (type === "normal" || type2 === "normal"){ fighting.classList.add("weak2"); }
  if (type === "poison" || type2 === "poison"){ground.classList.add("weak2"); psychic.classList.add("weak2"); grass2.classList.add("weak2"); fairy2.classList.add("weak2");}
  if (type === "rock" || type2 === "rock"){fighting.classList.add("weak2"); ground.classList.add("weak2"); steel.classList.add("weak2"); water.classList.add("weak2"); grass.classList.add("weak2"); flying2.classList.add("weak2"); bug2.classList.add("weak2"); fire2.classList.add("weak2"); ice2.classList.add("weak2"); }
  if (type === "steel" || type2 === "steel"){fighting.classList.add("weak2"); ground.classList.add("weak2"); fire.classList.add("weak2"); rock2.classList.add("weak2"); ice2.classList.add("weak2"); fairy2.classList.add("weak2");}

    // adds Card styling based on type
if (type === "water") {card.classList.add('water'); shinyCard.classList.add('water');} 
if (type === "bug"){card.classList.add('bug'); shinyCard.classList.add('bug');} 
 if (type === "ground") {card.classList.add('ground'); shinyCard.classList.add('ground');} 
if (type === "steel") { card.classList.add('steel'); shinyCard.classList.add('steel');}
if (type === "normal" || type === "flying"){card.classList.add('normal'); shinyCard.classList.add('normal');}
 if (type === "psychic") {  card.classList.add('psychic'); shinyCard.classList.add('psychic');}
 if (type === "poison"){ card.classList.add('poison'); shinyCard.classList.add('poison');} 
 if (type === "electric") {card.classList.add('electric'); shinyCard.classList.add('electric');}
 if (type === "ice") {card.classList.add('ice'); shinyCard.classList.add('ice');}
 if (type === "grass") {card.classList.add('grass'); shinyCard.classList.add('grass'); }
 if (type === "ghost") {card.classList.add('ghost'); shinyCard.classList.add('ghost');}
 if (type === "fire") {card.classList.add('fire'); shinyCard.classList.add('fire');   }
 if (type === "fairy") {card.classList.add('fairy'); shinyCard.classList.add('fairy');}
 if (type === "rock") {card.classList.add('rock'); shinyCard.classList.add('rock'); }
 if (type === "dragon") {card.classList.add('dragon'); shinyCard.classList.add('dragon');}
 if (type === "dark"){ card.classList.add('darkness'); shinyCard.classList.add('darkness');} 
if (type === "fighting") {card.classList.add('fighting'); shinyCard.classList.add('fighting');}

}


if (shinyIcon !== null && abilityList.length <= 1 && type2 !== null ){
    return(<div className="pokeInfo">
             <h2 className="nameTitle">{pokename}</h2>
         <img src={pokePicture} className="officialImg" alt="officialArtwork" />
    <div className="right">
        <div className="column" id="stats">
        <h3>Base Stats</h3>
        <p> <b>{stat1name} </b>: {stat1} </p> 
      <p><b> {stat2name}</b> : {stat2} </p>
      <p> <b> {stat3name}</b> : {stat3} </p>
      <p><b>{stat4name}</b>: {stat4} </p>
      <p><b>{stat5name}</b> : {stat5} </p>
      <p><b>{stat6name}</b> : {stat6} </p>
        </div>
    </div>
        <div id="pokeNameRow">
        <div className="pokeType">
      <h2 className="typeTitle">   {type} / {type2} </h2>
      <b><p className="weakHeader">Weak Against</p></b>
      <div className="weakness">
        <div className="row2">
      <div className="bugAttribute">  
      <img src={bugIcon} alt="bug" className="bugIcon" /><label className="hidden" id="hiddenBug">Bug</label></div>
      <div className="darkAttribute">     <img src={darkIcon} alt="dark" className="darkIcon" /><label className="hidden" id="hiddenDark">Dark</label></div>
      <div className="dragonAttribute">   <img src={dragonIcon} alt="dragon" className="dragonIcon" />  <label className="hidden" id="hiddenDragon">Dragon</label></div>
       <div className="electricAttribute">  <img src={electricIcon} alt="electric" className="electricIcon" /><label className="hidden" id="hiddenElectric">Electric</label> </div>
       <div className="waterAttribute"> <img src={waterIcon} alt="water" className="waterIcon" /><label className="hidden" id="hiddenWater">Water</label></div>
    <div className="fairyAttribute">   <img src={fairyIcon} alt="fairy" className="fairyIcon" /><label className="hidden" id="hiddenFairy">Fairy</label></div>
      <div className="fightingAttribute">  <img src={fightingIcon} alt="fighting" className="fightingIcon"/><label className="hidden" id="hiddenFighting">Fighting</label> </div>
      <div className="fireAttribute"> <img src={fireIcon} alt="fire" className="fireIcon"/><label className="hidden" id="hiddenFire">Fire</label> </div>
      <div className="flyingAttribute">  <img src={flyingIcon} alt="flying" className="flyingIcon"/><label className="hidden" id="hiddenFlying">Flying</label></div>
      <div className="grassAttribute"> <img src={grassIcon} alt="grass" className="grassIcon"/> <label className="hidden" id="hiddenGrass">Grass</label></div>
      <div className="ghostAttribute"> <img src={ghostIcon} alt="ghost" className="ghostIcon" /> <label className="hidden" id="hiddenGhost">Ghost</label></div>
      <div className="groundAttribute"> <img src={groundIcon} alt="ground" className="groundIcon" /><label className="hidden" id="hiddenGround">Ground</label></div>
      <div className="iceAttribute">  <img src={iceIcon} alt="ice"  className="iceIcon"/><label className="hidden" id="hiddenIce">Ice</label></div>
      <div className="normalAttribute">  <img src={normalIcon} alt="normal" className="normalIcon"/><label className="hidden" id="hiddenNormal">Normal</label></div>
      <div className="poisonAttribute">  <img src={poisonIcon} alt="poison" className="poisonIcon" /> <label className="hidden" id="hiddenPoison">Poison</label></div>
      <div className="psychicAttribute"> <img src={psychicIcon} alt="psychic" className="psychicIcon"/> <label className="hidden" id="hiddenPsychic">Psychic</label></div>
      <div className="rockAttribute">  <img src={rockSymbol} alt="rock" className="rockSymbol"/><label className="hidden" id="hiddenRock">Rock</label></div>
    <div className="steelAttribute">    <img src={steelIcon} alt="steel" className="steelIcon"/><label className="hidden" id="hiddenSteel">Steel</label></div>
  </div>
  </div>
        </div>
        <div className="right">
        <b><p className="strengthsHeader">Effective Against</p></b>
  <div className="strengths">
  <div className="row2">
        <div className="bugAttribute">  
      <img src={bugIcon} alt="bug" className="bugIconStr" /><label className="hidden" id="hiddenBug">Bug</label></div>
      <div className="darkAttribute">     <img src={darkIcon} alt="dark" className="darkIconStr" /><label className="hidden" id="hiddenDark">Dark</label></div>
      <div className="dragonAttribute">   <img src={dragonIcon} alt="dragon" className="dragonIconStr" />  <label className="hidden" id="hiddenDragon">Dragon</label></div>
       <div className="electricAttribute">  <img src={electricIcon} alt="electric" className="electricIconStr" /><label className="hidden" id="hiddenElectric">Electric</label> </div>
       <div className="waterAttribute"> <img src={waterIcon} alt="water" className="waterIconStr" /><label className="hidden" id="hiddenWater">Water</label></div>
    <div className="fairyAttribute">   <img src={fairyIcon} alt="fairy" className="fairyIconStr" /><label className="hidden" id="hiddenFairy">Fairy</label></div>
      <div className="fightingAttribute">  <img src={fightingIcon} alt="fighting" className="fightingIconStr"/><label className="hidden" id="hiddenFighting">Fighting</label> </div>
      <div className="fireAttribute"> <img src={fireIcon} alt="fire" className="fireIconStr"/><label className="hidden" id="hiddenFire">Fire</label> </div>
      <div className="flyingAttribute">  <img src={flyingIcon} alt="flying" className="flyingIconStr"/><label className="hidden" id="hiddenFlying">Flying</label></div>
      <div className="grassAttribute"> <img src={grassIcon} alt="grass" className="grassIconStr"/> <label className="hidden" id="hiddenGrass">Grass</label></div>
      <div className="ghostAttribute"> <img src={ghostIcon} alt="ghost" className="ghostIconStr" /> <label className="hidden" id="hiddenGhost">Ghost</label></div>
      <div className="groundAttribute"> <img src={groundIcon} alt="ground" className="groundIconStr" /><label className="hidden" id="hiddenGround">Ground</label></div>
      <div className="iceAttribute">  <img src={iceIcon} alt="ice"  className="iceIconStr"/><label className="hidden" id="hiddenIce">Ice</label></div>
      <div className="normalAttribute">  <img src={normalIcon} alt="normal" className="normalIconStr"/><label className="hidden" id="hiddenNormal">Normal</label></div>
      <div className="poisonAttribute">  <img src={poisonIcon} alt="poison" className="poisonIconStr" /> <label className="hidden" id="hiddenPoison">Poison</label></div>
      <div className="psychicAttribute"> <img src={psychicIcon} alt="psychic" className="psychicIconStr"/> <label className="hidden" id="hiddenPsychic">Psychic</label></div>
      <div className="rockAttribute">  <img src={rockSymbol} alt="rock" className="rockSymbolStr"/><label className="hidden" id="hiddenRock">Rock</label></div>
    <div className="steelAttribute">    <img src={steelIcon} alt="steel" className="steelIconStr"/><label className="hidden" id="hiddenSteel">Steel</label></div>
  </div>
  </div>
  </div>
  </div>
    <EvolutionInfo data={pokeInfo} />
    <div className="row">
    <div className="card" id="card"> 
    <h3 className="pokeName">{pokename}</h3> <img src={regularIcon} className="icon" alt="icon" />
    Ability: {ability1}
  </div>
    <div className="card" id="card2">
    <h3 className="pokeName">Shiny {pokename}</h3>
    <img src={shinyIcon} className="icon" alt="shiny" /> 
 Ability: {ability1}
</div></div>
    </div>    )}


else if (type2 === null && shinyIcon !== null && abilityList.length > 1  ) {return(<div className="pokeInfo">
         <h2 className="nameTitle">{pokename}</h2>
         <img src={pokePicture} className="officialImg" alt="officialArtwork" />
    <div className="right">
        <div className="column" id="stats">
        <h3>Base Stats</h3>
        <p> <b>{stat1name} </b>: {stat1} </p> 
      <p><b> {stat2name}</b> : {stat2} </p>
      <p> <b> {stat3name}</b> : {stat3} </p>
      <p><b>{stat4name}</b>: {stat4} </p>
      <p><b>{stat5name}</b> : {stat5} </p>
      <p><b>{stat6name}</b> : {stat6} </p>
        </div>
    </div>
      <div id="pokeNameRow">
      <div className="pokeType">
      <h2 className="typeTitle">   {type} 
      </h2>
      <b><p className="weakHeader">Weak Against</p></b>
      <div className="weakness">
        <div className="row2">
      <div className="bugAttribute">  
      <img src={bugIcon} alt="bug" className="bugIcon" /><label className="hidden" id="hiddenBug">Bug</label></div>
      <div className="darkAttribute">     <img src={darkIcon} alt="dark" className="darkIcon" /><label className="hidden" id="hiddenDark">Dark</label></div>
      <div className="dragonAttribute">   <img src={dragonIcon} alt="dragon" className="dragonIcon" />  <label className="hidden" id="hiddenDragon">Dragon</label></div>
       <div className="electricAttribute">  <img src={electricIcon} alt="electric" className="electricIcon" /><label className="hidden" id="hiddenElectric">Electric</label> </div>
       <div className="waterAttribute"> <img src={waterIcon} alt="water" className="waterIcon" /><label className="hidden" id="hiddenWater">Water</label></div>
    <div className="fairyAttribute">   <img src={fairyIcon} alt="fairy" className="fairyIcon" /><label className="hidden" id="hiddenFairy">Fairy</label></div>
      <div className="fightingAttribute">  <img src={fightingIcon} alt="fighting" className="fightingIcon"/><label className="hidden" id="hiddenFighting">Fighting</label> </div>
      <div className="fireAttribute"> <img src={fireIcon} alt="fire" className="fireIcon"/><label className="hidden" id="hiddenFire">Fire</label> </div>
      <div className="flyingAttribute">  <img src={flyingIcon} alt="flying" className="flyingIcon"/><label className="hidden" id="hiddenFlying">Flying</label></div>
      <div className="grassAttribute"> <img src={grassIcon} alt="grass" className="grassIcon"/> <label className="hidden" id="hiddenGrass">Grass</label></div>
      <div className="ghostAttribute"> <img src={ghostIcon} alt="ghost" className="ghostIcon" /> <label className="hidden" id="hiddenGhost">Ghost</label></div>
      <div className="groundAttribute"> <img src={groundIcon} alt="ground" className="groundIcon" /><label className="hidden" id="hiddenGround">Ground</label></div>
      <div className="iceAttribute">  <img src={iceIcon} alt="ice"  className="iceIcon"/><label className="hidden" id="hiddenIce">Ice</label></div>
      <div className="normalAttribute">  <img src={normalIcon} alt="normal" className="normalIcon"/><label className="hidden" id="hiddenNormal">Normal</label></div>
      <div className="poisonAttribute">  <img src={poisonIcon} alt="poison" className="poisonIcon" /> <label className="hidden" id="hiddenPoison">Poison</label></div>
      <div className="psychicAttribute"> <img src={psychicIcon} alt="psychic" className="psychicIcon"/> <label className="hidden" id="hiddenPsychic">Psychic</label></div>
      <div className="rockAttribute">  <img src={rockSymbol} alt="rock" className="rockSymbol"/><label className="hidden" id="hiddenRock">Rock</label></div>
    <div className="steelAttribute">    <img src={steelIcon} alt="steel" className="steelIcon"/><label className="hidden" id="hiddenSteel">Steel</label></div>
  </div>
  </div>
        </div>
        <div className="right">
        <b><p className="strengthsHeader">Effective Against</p></b>
  <div className="strengths">
  <div className="row2">
        <div className="bugAttribute">  
      <img src={bugIcon} alt="bug" className="bugIconStr" /><label className="hidden" id="hiddenBug">Bug</label></div>
      <div className="darkAttribute">     <img src={darkIcon} alt="dark" className="darkIconStr" /><label className="hidden" id="hiddenDark">Dark</label></div>
      <div className="dragonAttribute">   <img src={dragonIcon} alt="dragon" className="dragonIconStr" />  <label className="hidden" id="hiddenDragon">Dragon</label></div>
       <div className="electricAttribute">  <img src={electricIcon} alt="electric" className="electricIconStr" /><label className="hidden" id="hiddenElectric">Electric</label> </div>
       <div className="waterAttribute"> <img src={waterIcon} alt="water" className="waterIconStr" /><label className="hidden" id="hiddenWater">Water</label></div>
    <div className="fairyAttribute">   <img src={fairyIcon} alt="fairy" className="fairyIconStr" /><label className="hidden" id="hiddenFairy">Fairy</label></div>
      <div className="fightingAttribute">  <img src={fightingIcon} alt="fighting" className="fightingIconStr"/><label className="hidden" id="hiddenFighting">Fighting</label> </div>
      <div className="fireAttribute"> <img src={fireIcon} alt="fire" className="fireIconStr"/><label className="hidden" id="hiddenFire">Fire</label> </div>
      <div className="flyingAttribute">  <img src={flyingIcon} alt="flying" className="flyingIconStr"/><label className="hidden" id="hiddenFlying">Flying</label></div>
      <div className="grassAttribute"> <img src={grassIcon} alt="grass" className="grassIconStr"/> <label className="hidden" id="hiddenGrass">Grass</label></div>
      <div className="ghostAttribute"> <img src={ghostIcon} alt="ghost" className="ghostIconStr" /> <label className="hidden" id="hiddenGhost">Ghost</label></div>
      <div className="groundAttribute"> <img src={groundIcon} alt="ground" className="groundIconStr" /><label className="hidden" id="hiddenGround">Ground</label></div>
      <div className="iceAttribute">  <img src={iceIcon} alt="ice"  className="iceIconStr"/><label className="hidden" id="hiddenIce">Ice</label></div>
      <div className="normalAttribute">  <img src={normalIcon} alt="normal" className="normalIconStr"/><label className="hidden" id="hiddenNormal">Normal</label></div>
      <div className="poisonAttribute">  <img src={poisonIcon} alt="poison" className="poisonIconStr" /> <label className="hidden" id="hiddenPoison">Poison</label></div>
      <div className="psychicAttribute"> <img src={psychicIcon} alt="psychic" className="psychicIconStr"/> <label className="hidden" id="hiddenPsychic">Psychic</label></div>
      <div className="rockAttribute">  <img src={rockSymbol} alt="rock" className="rockSymbolStr"/><label className="hidden" id="hiddenRock">Rock</label></div>
    <div className="steelAttribute">    <img src={steelIcon} alt="steel" className="steelIconStr"/><label className="hidden" id="hiddenSteel">Steel</label></div>
  </div>
  </div>
  </div>
  </div>
    <EvolutionInfo data={pokeInfo} />
    <div className="row">
    <div className="card" id="card"> 
    <h3 className="pokeName">{pokename}</h3> <img src={regularIcon} className="icon" alt="icon" />
    Ability: {ability1}
 Ability: {ability2}
  </div>
    <div className="card" id="card2">
    <h3 className="pokeName">Shiny {pokename}</h3>
    <img src={shinyIcon} className="icon" alt="shiny" /> 
    Ability: {ability1}
 Ability: {ability2}
</div></div>
    </div> )}

    else if (abilityList.length < 1 ) {return(<div className="pokeInfo">
          <h2 className="nameTitle">{pokename}</h2>
         <img src={pokePicture} className="officialImg" alt="officialArtwork" />
    <div className="right">
        <div className="column" id="stats">
        <h3>Base Stats</h3>
        <p> <b>{stat1name} </b>: {stat1} </p> 
      <p><b> {stat2name}</b> : {stat2} </p>
      <p> <b> {stat3name}</b> : {stat3} </p>
      <p><b>{stat4name}</b>: {stat4} </p>
      <p><b>{stat5name}</b> : {stat5} </p>
      <p><b>{stat6name}</b> : {stat6} </p>
        </div>
    </div>
                <div id="pokeNameRow">
            <div className="pokeType">
            <h2 className="typeTitle">   {type} type </h2>
            <b><p className="weakHeader">Weak Against</p></b>
      <div className="weakness">
        <div className="row2">
      <div className="bugAttribute">  
      <img src={bugIcon} alt="bug" className="bugIcon" /><label className="hidden" id="hiddenBug">Bug</label></div>
      <div className="darkAttribute">     <img src={darkIcon} alt="dark" className="darkIcon" /><label className="hidden" id="hiddenDark">Dark</label></div>
      <div className="dragonAttribute">   <img src={dragonIcon} alt="dragon" className="dragonIcon" />  <label className="hidden" id="hiddenDragon">Dragon</label></div>
       <div className="electricAttribute">  <img src={electricIcon} alt="electric" className="electricIcon" /><label className="hidden" id="hiddenElectric">Electric</label> </div>
       <div className="waterAttribute"> <img src={waterIcon} alt="water" className="waterIcon" /><label className="hidden" id="hiddenWater">Water</label></div>
    <div className="fairyAttribute">   <img src={fairyIcon} alt="fairy" className="fairyIcon" /><label className="hidden" id="hiddenFairy">Fairy</label></div>
      <div className="fightingAttribute">  <img src={fightingIcon} alt="fighting" className="fightingIcon"/><label className="hidden" id="hiddenFighting">Fighting</label> </div>
      <div className="fireAttribute"> <img src={fireIcon} alt="fire" className="fireIcon"/><label className="hidden" id="hiddenFire">Fire</label> </div>
      <div className="flyingAttribute">  <img src={flyingIcon} alt="flying" className="flyingIcon"/><label className="hidden" id="hiddenFlying">Flying</label></div>
      <div className="grassAttribute"> <img src={grassIcon} alt="grass" className="grassIcon"/> <label className="hidden" id="hiddenGrass">Grass</label></div>
      <div className="ghostAttribute"> <img src={ghostIcon} alt="ghost" className="ghostIcon" /> <label className="hidden" id="hiddenGhost">Ghost</label></div>
      <div className="groundAttribute"> <img src={groundIcon} alt="ground" className="groundIcon" /><label className="hidden" id="hiddenGround">Ground</label></div>
      <div className="iceAttribute">  <img src={iceIcon} alt="ice"  className="iceIcon"/><label className="hidden" id="hiddenIce">Ice</label></div>
      <div className="normalAttribute">  <img src={normalIcon} alt="normal" className="normalIcon"/><label className="hidden" id="hiddenNormal">Normal</label></div>
      <div className="poisonAttribute">  <img src={poisonIcon} alt="poison" className="poisonIcon" /> <label className="hidden" id="hiddenPoison">Poison</label></div>
      <div className="psychicAttribute"> <img src={psychicIcon} alt="psychic" className="psychicIcon"/> <label className="hidden" id="hiddenPsychic">Psychic</label></div>
      <div className="rockAttribute">  <img src={rockSymbol} alt="rock" className="rockSymbol"/><label className="hidden" id="hiddenRock">Rock</label></div>
    <div className="steelAttribute">    <img src={steelIcon} alt="steel" className="steelIcon"/><label className="hidden" id="hiddenSteel">Steel</label></div>
  </div>
  </div>
        </div>
        <div className="right">
        <b><p className="strengthsHeader">Effective Against</p></b>
  <div className="strengths">
  <div className="row2">
        <div className="bugAttribute">  
      <img src={bugIcon} alt="bug" className="bugIconStr" /><label className="hidden" id="hiddenBug">Bug</label></div>
      <div className="darkAttribute">     <img src={darkIcon} alt="dark" className="darkIconStr" /><label className="hidden" id="hiddenDark">Dark</label></div>
      <div className="dragonAttribute">   <img src={dragonIcon} alt="dragon" className="dragonIconStr" />  <label className="hidden" id="hiddenDragon">Dragon</label></div>
       <div className="electricAttribute">  <img src={electricIcon} alt="electric" className="electricIconStr" /><label className="hidden" id="hiddenElectric">Electric</label> </div>
       <div className="waterAttribute"> <img src={waterIcon} alt="water" className="waterIconStr" /><label className="hidden" id="hiddenWater">Water</label></div>
    <div className="fairyAttribute">   <img src={fairyIcon} alt="fairy" className="fairyIconStr" /><label className="hidden" id="hiddenFairy">Fairy</label></div>
      <div className="fightingAttribute">  <img src={fightingIcon} alt="fighting" className="fightingIconStr"/><label className="hidden" id="hiddenFighting">Fighting</label> </div>
      <div className="fireAttribute"> <img src={fireIcon} alt="fire" className="fireIconStr"/><label className="hidden" id="hiddenFire">Fire</label> </div>
      <div className="flyingAttribute">  <img src={flyingIcon} alt="flying" className="flyingIconStr"/><label className="hidden" id="hiddenFlying">Flying</label></div>
      <div className="grassAttribute"> <img src={grassIcon} alt="grass" className="grassIconStr"/> <label className="hidden" id="hiddenGrass">Grass</label></div>
      <div className="ghostAttribute"> <img src={ghostIcon} alt="ghost" className="ghostIconStr" /> <label className="hidden" id="hiddenGhost">Ghost</label></div>
      <div className="groundAttribute"> <img src={groundIcon} alt="ground" className="groundIconStr" /><label className="hidden" id="hiddenGround">Ground</label></div>
      <div className="iceAttribute">  <img src={iceIcon} alt="ice"  className="iceIconStr"/><label className="hidden" id="hiddenIce">Ice</label></div>
      <div className="normalAttribute">  <img src={normalIcon} alt="normal" className="normalIconStr"/><label className="hidden" id="hiddenNormal">Normal</label></div>
      <div className="poisonAttribute">  <img src={poisonIcon} alt="poison" className="poisonIconStr" /> <label className="hidden" id="hiddenPoison">Poison</label></div>
      <div className="psychicAttribute"> <img src={psychicIcon} alt="psychic" className="psychicIconStr"/> <label className="hidden" id="hiddenPsychic">Psychic</label></div>
      <div className="rockAttribute">  <img src={rockSymbol} alt="rock" className="rockSymbolStr"/><label className="hidden" id="hiddenRock">Rock</label></div>
    <div className="steelAttribute">    <img src={steelIcon} alt="steel" className="steelIconStr"/><label className="hidden" id="hiddenSteel">Steel</label></div>
  </div>
  </div>
  </div>
  </div>
    <EvolutionInfo data={pokeInfo} />
    <div className="row">
    <div className="card" id="card"> 
    <h3 className="pokeName">{pokename}</h3> <img src={regularIcon} className="icon" alt="icon" />
    Ability: {ability1}
  </div>
    <div className="card" id="card2">
    <h3 className="pokeName">Shiny {pokename}</h3>
    <img src={shinyIcon} className="icon" alt="shiny" /> 
 Ability: {ability1}
 
</div></div>
    </div>  )}


else if (type2 !== null && shinyIcon !== null && abilityList.length > 1  ) {return(<div className="pokeInfo">
         <h2 className="nameTitle">{pokename}</h2>
         <img src={pokePicture} className="officialImg" alt="officialArtwork" />
    <div className="right">
        <div className="column" id="stats">
        <h3>Base Stats</h3>
        <p> <b>{stat1name} </b>: {stat1} </p> 
      <p><b> {stat2name}</b> : {stat2} </p>
      <p> <b> {stat3name}</b> : {stat3} </p>
      <p><b>{stat4name}</b>: {stat4} </p>
      <p><b>{stat5name}</b> : {stat5} </p>
      <p><b>{stat6name}</b> : {stat6} </p>
        </div>
    </div>
      <div id="pokeNameRow">
      <div className="pokeType">
      <h2 className="typeTitle">   {type} / {type2}
      </h2>
      <b><p className="weakHeader">Weak Against</p></b>
      <div className="weakness">
        <div className="row2">
      <div className="bugAttribute">  
      <img src={bugIcon} alt="bug" className="bugIcon" /><label className="hidden" id="hiddenBug">Bug</label></div>
      <div className="darkAttribute">     <img src={darkIcon} alt="dark" className="darkIcon" /><label className="hidden" id="hiddenDark">Dark</label></div>
      <div className="dragonAttribute">   <img src={dragonIcon} alt="dragon" className="dragonIcon" />  <label className="hidden" id="hiddenDragon">Dragon</label></div>
       <div className="electricAttribute">  <img src={electricIcon} alt="electric" className="electricIcon" /><label className="hidden" id="hiddenElectric">Electric</label> </div>
       <div className="waterAttribute"> <img src={waterIcon} alt="water" className="waterIcon" /><label className="hidden" id="hiddenWater">Water</label></div>
    <div className="fairyAttribute">   <img src={fairyIcon} alt="fairy" className="fairyIcon" /><label className="hidden" id="hiddenFairy">Fairy</label></div>
      <div className="fightingAttribute">  <img src={fightingIcon} alt="fighting" className="fightingIcon"/><label className="hidden" id="hiddenFighting">Fighting</label> </div>
      <div className="fireAttribute"> <img src={fireIcon} alt="fire" className="fireIcon"/><label className="hidden" id="hiddenFire">Fire</label> </div>
      <div className="flyingAttribute">  <img src={flyingIcon} alt="flying" className="flyingIcon"/><label className="hidden" id="hiddenFlying">Flying</label></div>
      <div className="grassAttribute"> <img src={grassIcon} alt="grass" className="grassIcon"/> <label className="hidden" id="hiddenGrass">Grass</label></div>
      <div className="ghostAttribute"> <img src={ghostIcon} alt="ghost" className="ghostIcon" /> <label className="hidden" id="hiddenGhost">Ghost</label></div>
      <div className="groundAttribute"> <img src={groundIcon} alt="ground" className="groundIcon" /><label className="hidden" id="hiddenGround">Ground</label></div>
      <div className="iceAttribute">  <img src={iceIcon} alt="ice"  className="iceIcon"/><label className="hidden" id="hiddenIce">Ice</label></div>
      <div className="normalAttribute">  <img src={normalIcon} alt="normal" className="normalIcon"/><label className="hidden" id="hiddenNormal">Normal</label></div>
      <div className="poisonAttribute">  <img src={poisonIcon} alt="poison" className="poisonIcon" /> <label className="hidden" id="hiddenPoison">Poison</label></div>
      <div className="psychicAttribute"> <img src={psychicIcon} alt="psychic" className="psychicIcon"/> <label className="hidden" id="hiddenPsychic">Psychic</label></div>
      <div className="rockAttribute">  <img src={rockSymbol} alt="rock" className="rockSymbol"/><label className="hidden" id="hiddenRock">Rock</label></div>
    <div className="steelAttribute">    <img src={steelIcon} alt="steel" className="steelIcon"/><label className="hidden" id="hiddenSteel">Steel</label></div>
  </div>
  </div>
        </div>
        <div className="right">
        <b><p className="strengthsHeader">Effective Against</p></b>
  <div className="strengths">
  <div className="row2">
        <div className="bugAttribute">  
      <img src={bugIcon} alt="bug" className="bugIconStr" /><label className="hidden" id="hiddenBug">Bug</label></div>
      <div className="darkAttribute">     <img src={darkIcon} alt="dark" className="darkIconStr" /><label className="hidden" id="hiddenDark">Dark</label></div>
      <div className="dragonAttribute">   <img src={dragonIcon} alt="dragon" className="dragonIconStr" />  <label className="hidden" id="hiddenDragon">Dragon</label></div>
       <div className="electricAttribute">  <img src={electricIcon} alt="electric" className="electricIconStr" /><label className="hidden" id="hiddenElectric">Electric</label> </div>
       <div className="waterAttribute"> <img src={waterIcon} alt="water" className="waterIconStr" /><label className="hidden" id="hiddenWater">Water</label></div>
    <div className="fairyAttribute">   <img src={fairyIcon} alt="fairy" className="fairyIconStr" /><label className="hidden" id="hiddenFairy">Fairy</label></div>
      <div className="fightingAttribute">  <img src={fightingIcon} alt="fighting" className="fightingIconStr"/><label className="hidden" id="hiddenFighting">Fighting</label> </div>
      <div className="fireAttribute"> <img src={fireIcon} alt="fire" className="fireIconStr"/><label className="hidden" id="hiddenFire">Fire</label> </div>
      <div className="flyingAttribute">  <img src={flyingIcon} alt="flying" className="flyingIconStr"/><label className="hidden" id="hiddenFlying">Flying</label></div>
      <div className="grassAttribute"> <img src={grassIcon} alt="grass" className="grassIconStr"/> <label className="hidden" id="hiddenGrass">Grass</label></div>
      <div className="ghostAttribute"> <img src={ghostIcon} alt="ghost" className="ghostIconStr" /> <label className="hidden" id="hiddenGhost">Ghost</label></div>
      <div className="groundAttribute"> <img src={groundIcon} alt="ground" className="groundIconStr" /><label className="hidden" id="hiddenGround">Ground</label></div>
      <div className="iceAttribute">  <img src={iceIcon} alt="ice"  className="iceIconStr"/><label className="hidden" id="hiddenIce">Ice</label></div>
      <div className="normalAttribute">  <img src={normalIcon} alt="normal" className="normalIconStr"/><label className="hidden" id="hiddenNormal">Normal</label></div>
      <div className="poisonAttribute">  <img src={poisonIcon} alt="poison" className="poisonIconStr" /> <label className="hidden" id="hiddenPoison">Poison</label></div>
      <div className="psychicAttribute"> <img src={psychicIcon} alt="psychic" className="psychicIconStr"/> <label className="hidden" id="hiddenPsychic">Psychic</label></div>
      <div className="rockAttribute">  <img src={rockSymbol} alt="rock" className="rockSymbolStr"/><label className="hidden" id="hiddenRock">Rock</label></div>
    <div className="steelAttribute">    <img src={steelIcon} alt="steel" className="steelIconStr"/><label className="hidden" id="hiddenSteel">Steel</label></div>
  </div>
  </div>
  </div>
  </div>
    <EvolutionInfo data={pokeInfo} />
    <div className="row">
    <div className="card"> <h3 className="pokeName">{pokename}</h3> <img src={regularIcon} className="icon" alt="icon" /> Ability: {ability1} </div>
    <div className="card" id="card2">
   <h3 className="pokeName">Shiny {pokename}</h3>
    <img src={shinyIcon} className="icon" alt="shiny" /> 
 Ability: {ability1}
</div></div>
    </div> )}

else { return(<div className="pokeInfo">
  <h2 className="nameTitle">{pokename}</h2>
  <img src={pokePicture} className="officialImg" alt="officialArtwork" />
  <div className="right">
  <div className="column" id="stats">
  <h3>Base Stats</h3>
  <p> <b>{stat1name} </b>: {stat1} </p> 
  <p><b> {stat2name}</b> : {stat2} </p>
  <p> <b> {stat3name}</b> : {stat3} </p>
  <p><b>{stat4name}</b>: {stat4} </p>
  <p><b>{stat5name}</b> : {stat5} </p>
  <p><b>{stat6name}</b> : {stat6} </p>
  </div>
  </div>
  <div id="pokeNameRow">
  <div className="pokeType">
  <h2 className="typeTitle">   {type} 
  </h2>
  <b><p className="weakHeader">Weak Against</p></b>
  <div className="weakness">
  <div className="row2">
  <div className="bugAttribute">  
  <img src={bugIcon} alt="bug" className="bugIcon" /><label className="hidden" id="hiddenBug">Bug</label></div>
  <div className="darkAttribute">     <img src={darkIcon} alt="dark" className="darkIcon" /><label className="hidden" id="hiddenDark">Dark</label></div>
  <div className="dragonAttribute">   <img src={dragonIcon} alt="dragon" className="dragonIcon" />  <label className="hidden" id="hiddenDragon">Dragon</label></div>
  <div className="electricAttribute">  <img src={electricIcon} alt="electric" className="electricIcon" /><label className="hidden" id="hiddenElectric">Electric</label> </div>
  <div className="waterAttribute"> <img src={waterIcon} alt="water" className="waterIcon" /><label className="hidden" id="hiddenWater">Water</label></div>
  <div className="fairyAttribute">   <img src={fairyIcon} alt="fairy" className="fairyIcon" /><label className="hidden" id="hiddenFairy">Fairy</label></div>
  <div className="fightingAttribute">  <img src={fightingIcon} alt="fighting" className="fightingIcon"/><label className="hidden" id="hiddenFighting">Fighting</label> </div>
  <div className="fireAttribute"> <img src={fireIcon} alt="fire" className="fireIcon"/><label className="hidden" id="hiddenFire">Fire</label> </div>
  <div className="flyingAttribute">  <img src={flyingIcon} alt="flying" className="flyingIcon"/><label className="hidden" id="hiddenFlying">Flying</label></div>
  <div className="grassAttribute"> <img src={grassIcon} alt="grass" className="grassIcon"/> <label className="hidden" id="hiddenGrass">Grass</label></div>
  <div className="ghostAttribute"> <img src={ghostIcon} alt="ghost" className="ghostIcon" /> <label className="hidden" id="hiddenGhost">Ghost</label></div>
  <div className="groundAttribute"> <img src={groundIcon} alt="ground" className="groundIcon" /><label className="hidden" id="hiddenGround">Ground</label></div>
  <div className="iceAttribute">  <img src={iceIcon} alt="ice"  className="iceIcon"/><label className="hidden" id="hiddenIce">Ice</label></div>
  <div className="normalAttribute">  <img src={normalIcon} alt="normal" className="normalIcon"/><label className="hidden" id="hiddenNormal">Normal</label></div>
  <div className="poisonAttribute">  <img src={poisonIcon} alt="poison" className="poisonIcon" /> <label className="hidden" id="hiddenPoison">Poison</label></div>
  <div className="psychicAttribute"> <img src={psychicIcon} alt="psychic" className="psychicIcon"/> <label className="hidden" id="hiddenPsychic">Psychic</label></div>
  <div className="rockAttribute">  <img src={rockSymbol} alt="rock" className="rockSymbol"/><label className="hidden" id="hiddenRock">Rock</label></div>
  <div className="steelAttribute">    <img src={steelIcon} alt="steel" className="steelIcon"/><label className="hidden" id="hiddenSteel">Steel</label></div>
  </div>
  </div>
  </div>
  <div className="right">
  <b><p className="strengthsHeader">Effective Against</p></b>
  <div className="strengths">
  <div className="row2">
  <div className="bugAttribute">  
  <img src={bugIcon} alt="bug" className="bugIconStr" /><label className="hidden" id="hiddenBug">Bug</label></div>
  <div className="darkAttribute">     <img src={darkIcon} alt="dark" className="darkIconStr" /><label className="hidden" id="hiddenDark">Dark</label></div>
  <div className="dragonAttribute">   <img src={dragonIcon} alt="dragon" className="dragonIconStr" />  <label className="hidden" id="hiddenDragon">Dragon</label></div>
  <div className="electricAttribute">  <img src={electricIcon} alt="electric" className="electricIconStr" /><label className="hidden" id="hiddenElectric">Electric</label> </div>
  <div className="waterAttribute"> <img src={waterIcon} alt="water" className="waterIconStr" /><label className="hidden" id="hiddenWater">Water</label></div>
  <div className="fairyAttribute">   <img src={fairyIcon} alt="fairy" className="fairyIconStr" /><label className="hidden" id="hiddenFairy">Fairy</label></div>
  <div className="fightingAttribute">  <img src={fightingIcon} alt="fighting" className="fightingIconStr"/><label className="hidden" id="hiddenFighting">Fighting</label> </div>
  <div className="fireAttribute"> <img src={fireIcon} alt="fire" className="fireIconStr"/><label className="hidden" id="hiddenFire">Fire</label> </div>
  <div className="flyingAttribute">  <img src={flyingIcon} alt="flying" className="flyingIconStr"/><label className="hidden" id="hiddenFlying">Flying</label></div>
  <div className="grassAttribute"> <img src={grassIcon} alt="grass" className="grassIconStr"/> <label className="hidden" id="hiddenGrass">Grass</label></div>
  <div className="ghostAttribute"> <img src={ghostIcon} alt="ghost" className="ghostIconStr" /> <label className="hidden" id="hiddenGhost">Ghost</label></div>
  <div className="groundAttribute"> <img src={groundIcon} alt="ground" className="groundIconStr" /><label className="hidden" id="hiddenGround">Ground</label></div>
  <div className="iceAttribute">  <img src={iceIcon} alt="ice"  className="iceIconStr"/><label className="hidden" id="hiddenIce">Ice</label></div>
  <div className="normalAttribute">  <img src={normalIcon} alt="normal" className="normalIconStr"/><label className="hidden" id="hiddenNormal">Normal</label></div>
  <div className="poisonAttribute">  <img src={poisonIcon} alt="poison" className="poisonIconStr" /> <label className="hidden" id="hiddenPoison">Poison</label></div>
  <div className="psychicAttribute"> <img src={psychicIcon} alt="psychic" className="psychicIconStr"/> <label className="hidden" id="hiddenPsychic">Psychic</label></div>
  <div className="rockAttribute">  <img src={rockSymbol} alt="rock" className="rockSymbolStr"/><label className="hidden" id="hiddenRock">Rock</label></div>
  <div className="steelAttribute">    <img src={steelIcon} alt="steel" className="steelIconStr"/><label className="hidden" id="hiddenSteel">Steel</label></div>
  </div>
  </div>
  </div>
  </div>
  <EvolutionInfo data={pokeInfo} />
  <div className="row">
  <div className="card" id="card"> 
  <h3 className="pokeName">{pokename}</h3> <img src={regularIcon} className="icon" alt="icon" />
  Ability: {ability1}
  </div>
  <div className="card" id="card2">
  <h3 className="pokeName">Shiny {pokename}</h3>
  <img src={shinyIcon} className="icon" alt="shiny" /> 
  Ability: {ability1}
  </div></div>
  </div> )}}