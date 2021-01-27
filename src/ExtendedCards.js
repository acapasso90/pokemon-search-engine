import React, {useEffect} from "react";
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

export default function ExtendedCards(props){
let pokename = props.data.name;
let type = props.data.type;
let type2 = props.data.type2;
let pokePicture = props.data.pokePicture;
let shinyIcon =  props.data.shinySprite;
let loaded = props.data.loaded;
let bug = document.querySelectorAll(".bugIcon");
let fire = document.querySelector(".fireIcon");
let ice = document.querySelectorAll(".iceIcon");
let steel = document.querySelectorAll(".steelIcon");
let poison = document.querySelectorAll(".poisonIcon");
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

useEffect(() => {
    if(loaded === "loaded"){
        //  removes pre-existing classLists from typeIcons in Weak Against
    poison.forEach(poison => poison.classList.remove("weak2")); steel.forEach(steel => steel.classList.remove("weak2")); ice.forEach(ice => ice.classList.remove("weak2"));  flying.classList.remove("weak2"); 
    ghost.classList.remove("weak2"); dark.classList.remove("weak2"); fire.classList.remove("weak2"); dragon.classList.remove("weak2");
    ground.classList.remove("weak2"); water.classList.remove("weak2"); rock.classList.remove("weak2"); electric.classList.remove("weak2"); grass.classList.remove("weak2");
    fairy.classList.remove("weak2");  bug.forEach(bug => bug.classList.remove("weak2")); fighting.classList.remove("weak2"); psychic.classList.remove("weak2");
    normal.classList.remove("weak2");
         //  removes pre-existing classLists from typeIcons in Effective Against
         poison2.classList.remove("weak2"); steel2.classList.remove("weak2"); ice2.classList.remove("weak2");  flying2.classList.remove("weak2"); 
         ghost2.classList.remove("weak2"); dark2.classList.remove("weak2"); fire2.classList.remove("weak2"); dragon2.classList.remove("weak2");
         ground2.classList.remove("weak2"); water2.classList.remove("weak2"); rock2.classList.remove("weak2"); electric2.classList.remove("weak2"); grass2.classList.remove("weak2");
         fairy2.classList.remove("weak2"); bug.forEach(bug => bug.classList.add("weak2")); fighting2.classList.remove("weak2"); psychic2.classList.remove("weak2");
         normal2.classList.remove("weak2");
         //adds new classLists on change
         if (type === "fairy" || type2 === "fairy") {  steel.forEach(steel => steel.classList.add("weak2"));   poison.forEach(poison => poison.classList.add("weak2")); fighting2.classList.add("weak2"); dark2.classList.add("weak2");  dragon2.classList.add("weak2");}
         if (type === "ghost" || type2 === "ghost") {ghost.classList.add("weak2"); dark.classList.add("weak2"); ghost2.classList.add("weak2"); psychic2.classList.add("weak2"); }
          if (type === "psychic" || type2 === "psychic"){dark.classList.add("weak2"); bug.forEach(bug => bug.classList.add("weak2"));  ghost.classList.add("weak2"); fighting2.classList.add("weak2"); poison2.classList.add("weak2");} 
         if (type === "grass" || type2 === "grass"){ice.forEach(ice => ice.classList.add("weak2")); fire.classList.add("weak2");  poison.forEach(poison => poison.classList.add("weak2")); bug.forEach(bug => bug.classList.add("weak2"));  flying.classList.add("weak2"); ground2.classList.add("weak2"); rock2.classList.add("weak2"); water2.classList.add("weak2");}
         if (type === "bug" || type2 === "bug"){fire.classList.add("weak2"); flying.classList.add("weak2"); rock.classList.add("weak2");grass2.classList.add("weak2"); psychic2.classList.add("weak2"); dark2.classList.add("weak2"); }
         if (type === "fire" || type2 === "fire"){ ground.classList.add("weak2"); water.classList.add("weak2"); rock.classList.add("weak2"); bug2.classList.add("weak2"); steel2.classList.add("weak2"); grass2.classList.add("weak2"); ice2.classList.add("weak2");}
         if (type === "water" || type2 === "water"){electric.classList.add("weak2"); grass.classList.add("weak2"); ground2.classList.add("weak2"); rock2.classList.add("weak2"); fire2.classList.add("weak2"); }
         if (type === "dark" || type2 === "dark") {fairy.classList.add("weak2"); bug.forEach(bug => bug.classList.add("weak2"));  fighting.classList.add("weak2"); ghost2.classList.add("weak2"); psychic2.classList.add("weak2"); }
         if (type === "dragon" || type2 === "dragon"){dragon.classList.add("weak2"); fairy.classList.add("weak2"); ice.forEach(ice => ice.classList.add("weak2")); dragon2.classList.add("weak2"); }
         if (type === "electric" || type2 === "electric"){ground.classList.add("weak2"); flying2.classList.add("weak2"); water2.classList.add("weak2");}
         if (type === "fighting" || type2 === "fighting"){flying.classList.add("weak2"); fairy.classList.add("weak2"); psychic.classList.add("weak2"); normal2.classList.add("weak2"); rock2.classList.add("weak2"); steel2.classList.add("weak2"); ice2.classList.add("weak2"); dark2.classList.add("weak2");}
         if (type === "flying" || type2 === "flying"){rock.classList.add("weak2"); electric.classList.add("weak2"); ice.forEach(ice => ice.classList.add("weak2")); fighting2.classList.add("weak2"); bug2.classList.add("weak2"); grass2.classList.add("weak2");}
         if (type === "ground" || type2 === "ground"){ water.classList.add("weak2"); grass.classList.add("weak2"); ice.forEach(ice => ice.classList.add("weak2")); poison2.classList.add("weak2"); rock2.classList.add("weak2"); steel2.classList.add("weak2"); fire2.classList.add("weak2"); electric2.classList.add("weak2");}
         if (type === "ice" || type2 === "ice"){fighting.classList.add("weak2"); rock.classList.add("weak2"); steel.forEach(steel => steel.classList.add("weak2")); fire.classList.add("weak2"); grass2.classList.add("weak2"); dragon2.classList.add("weak2"); flying2.classList.add("weak2"); ground2.classList.add("weak2");}
         if (type === "normal" || type2 === "normal"){ fighting.classList.add("weak2"); }
         if (type === "poison" || type2 === "poison"){ground.classList.add("weak2"); psychic.classList.add("weak2"); grass2.classList.add("weak2"); fairy2.classList.add("weak2");}
         if (type === "rock" || type2 === "rock"){fighting.classList.add("weak2"); ground.classList.add("weak2"); steel.forEach(steel => steel.classList.add("weak2")); water.classList.add("weak2"); grass.classList.add("weak2"); flying2.classList.add("weak2"); bug2.classList.add("weak2"); fire2.classList.add("weak2"); ice2.classList.add("weak2"); }
         if (type === "steel" || type2 === "steel"){fighting.classList.add("weak2"); ground.classList.add("weak2"); fire.classList.add("weak2"); rock2.classList.add("weak2"); ice2.classList.add("weak2"); fairy2.classList.add("weak2");}
}}
, [type, type2]);

if (loaded === "loaded"){
  // adds Effective against(ex dark2)/weak to(ex dark) Icons dependant on type1 and type 2 if applicable 
  if (type === "fairy" || type2 === "fairy") {steel.forEach(steel => steel.classList.add("weak2"));  poison.forEach(poison => poison.classList.add("weak2")); fighting2.classList.add("weak2"); dark2.classList.add("weak2");  dragon2.classList.add("weak2");}
  if (type === "ghost" || type2 === "ghost") {ghost.classList.add("weak2"); dark.classList.add("weak2"); ghost2.classList.add("weak2"); psychic2.classList.add("weak2"); }
   if (type === "psychic" || type2 === "psychic"){dark.classList.add("weak2"); bug.forEach(bug => bug.classList.add("weak2")); ghost.classList.add("weak2"); fighting2.classList.add("weak2"); poison2.classList.add("weak2");} 
  if (type === "grass" || type2 === "grass"){ice.forEach(ice => ice.classList.add("weak2")); fire.classList.add("weak2"); poison.forEach(poison => poison.classList.add("weak2")); bug.forEach(bug => bug.classList.add("weak2"));  flying.classList.add("weak2"); ground2.classList.add("weak2"); rock2.classList.add("weak2"); water2.classList.add("weak2");}
  if (type === "bug" || type2 === "bug"){fire.classList.add("weak2"); flying.classList.add("weak2"); rock.classList.add("weak2");grass2.classList.add("weak2"); psychic2.classList.add("weak2"); dark2.classList.add("weak2"); }
  if (type === "fire" || type2 === "fire"){ ground.classList.add("weak2"); water.classList.add("weak2"); rock.classList.add("weak2"); bug2.classList.add("weak2"); steel2.classList.add("weak2"); grass2.classList.add("weak2"); ice2.classList.add("weak2");}
  if (type === "water" || type2 === "water"){electric.classList.add("weak2"); grass.classList.add("weak2"); ground2.classList.add("weak2"); rock2.classList.add("weak2"); fire2.classList.add("weak2"); }
  if (type === "dark" || type2 === "dark") {fairy.classList.add("weak2"); bug.forEach(bug => bug.classList.add("weak2"));  fighting.classList.add("weak2"); ghost2.classList.add("weak2"); psychic2.classList.add("weak2"); }
  if (type === "dragon" || type2 === "dragon"){dragon.classList.add("weak2"); fairy.classList.add("weak2"); ice.forEach(ice => ice.classList.add("weak2")); dragon2.classList.add("weak2"); }
  if (type === "electric" || type2 === "electric"){ground.classList.add("weak2"); flying2.classList.add("weak2"); water2.classList.add("weak2");}
  if (type === "fighting" || type2 === "fighting"){flying.classList.add("weak2"); fairy.classList.add("weak2"); psychic.classList.add("weak2"); normal2.classList.add("weak2"); rock2.classList.add("weak2"); steel2.classList.add("weak2"); ice2.classList.add("weak2"); dark2.classList.add("weak2");}
  if (type === "flying" || type2 === "flying"){rock.classList.add("weak2"); electric.classList.add("weak2"); ice.forEach(ice => ice.classList.add("weak2")); fighting2.classList.add("weak2"); bug2.classList.add("weak2"); grass2.classList.add("weak2");}
  if (type === "ground" || type2 === "ground"){ water.classList.add("weak2"); grass.classList.add("weak2"); ice.forEach(ice => ice.classList.add("weak2")); poison2.classList.add("weak2"); rock2.classList.add("weak2"); steel2.classList.add("weak2"); fire2.classList.add("weak2"); electric2.classList.add("weak2");}
  if (type === "ice" || type2 === "ice"){fighting.classList.add("weak2"); rock.classList.add("weak2"); steel.forEach(steel => steel.classList.add("weak2")); fire.classList.add("weak2"); grass2.classList.add("weak2"); dragon2.classList.add("weak2"); flying2.classList.add("weak2"); ground2.classList.add("weak2");}
  if (type === "normal" || type2 === "normal"){ fighting.classList.add("weak2"); }
  if (type === "poison" || type2 === "poison"){ground.classList.add("weak2"); psychic.classList.add("weak2"); grass2.classList.add("weak2"); fairy2.classList.add("weak2");}
  if (type === "rock" || type2 === "rock"){fighting.classList.add("weak2"); ground.classList.add("weak2"); steel.forEach(steel => steel.classList.add("weak2")); water.classList.add("weak2"); grass.classList.add("weak2"); flying2.classList.add("weak2"); bug2.classList.add("weak2"); fire2.classList.add("weak2"); ice2.classList.add("weak2"); }
  if (type === "steel" || type2 === "steel"){fighting.classList.add("weak2"); ground.classList.add("weak2"); fire.classList.add("weak2"); rock2.classList.add("weak2"); ice2.classList.add("weak2"); fairy2.classList.add("weak2");}

}
if (pokePicture === null){return(null)}

if(shinyIcon !== null && type2 !== undefined) {
    return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column">
  <img src={pokePicture} alt="officialArtwork" className="pokePic" />
  <div className="poketypes">{type} / {type2} </div>
  </div> 
  <div className="column">
   <h3>Shiny {pokename}</h3><img src={shinyIcon} alt="shinyIcon" className="pokePic"  />
   <b><p className="weakHeader">Weak Against</p></b>
      <div className="weakness">
        <div className="row">
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
  <div className="row">
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
  </div>)}
  
 if (type2 !== undefined && shinyIcon === null){return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column">
  <img src={pokePicture} alt="officialArtwork" className="pokePic"  />
  <div className="poketypes">{type} / {type2} </div>
  <b><p className="weakHeader">Weak Against</p></b>
      <div className="weakness">
        <div className="row">
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
  <div className="row">
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
  </div> 
  )}

if (type2 === undefined && shinyIcon !== null){return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column">
  <img src={pokePicture} alt="officialArtwork"  className="pokePic" />
  <div className="poketypes">{type} type</div>
  </div> 
  <div className="column">
   <h3>Shiny {pokename}</h3><img src={shinyIcon} alt="shinyIcon" className="pokePic"  />    <b><p className="weakHeader">Weak Against</p></b>
      <div className="weakness">
        <div className="row">
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
  <div className="row">
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
  </div> )}
else {  return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column">
  <img src={pokePicture} alt="officialArtwork"  className="pokePic" />
  <div className="poketypes">{type} type</div>    <b><p className="weakHeader">Weak Against</p></b>
      <div className="weakness">
        <div className="row">
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
  <div className="row">
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
  </div>)}}
