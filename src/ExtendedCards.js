import React, {useEffect} from "react";
import loading from "./loading.gif";

export default function ExtendedCards(props){
let pokename = props.data.name;
let nameType = props.type;
let type = props.data.type;
let type2 = props.data.type2;
let pokePicture = props.data.pokePicture;
let shinyIcon =  props.data.shinySprite;
let loaded = props.data.loaded;
let shinyCard = document.querySelectorAll('.card');
useEffect(() => {
  if(loaded === "loaded"){
  let shinyCard = document.querySelectorAll('.card');
       //  removes pre-existing classLists from  ShinyCards 
  shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
  shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
  shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
  shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
  shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
  shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));

  //adds card stylying on change 
  
  if (type === "water" || type2 === "water" ) {shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
  shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
  shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
  shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
  shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
  shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting')); shinyCard.forEach( shinyCard => shinyCard.classList.add('water')); } 
  else if (type === "bug" || type2 === "bug" ){ shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('bug'));} 
 else if (type === "ground" || type2 === "ground") { shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); 
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('ground')); } 
 else if (type === "steel" || type2 === "steel" ) { shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('steel')); }
 else if (type === "normal" || type2 === "normal" ){ shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); 
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('normal'));}
 else  if (type === "flying" || type2 === "flying"){ shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('normal')); }
 else  if (type === "psychic" || type2 === "psychic" ) { shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('psychic'));}
 else if (type === "poison" || type2 === "poison"){ shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('poison'));} 
 else if (type === "electric" || type2 === "electric") { shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('electric')); }
 else if (type === "ice" || type2 === "ice" ) {shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('ice')); }
 else if (type === "grass" || type2 === "grass") {shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water')); 
 shinyCard.forEach(shinyCard => shinyCard.classList.add('grass')); }
 else if (type === "ghost" || type2 === "ghost") {shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('ghost'));}
 else if (type === "fire" || type2 === "fire" ) {shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('fire'));  }
 else if(type === "fairy" || type2 === "fairy") { shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('fairy'));}
 else if (type === "rock" || type2 === "rock") {shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('rock')); }
 else if (type === "dragon" || type2 === "dragon") { shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness'));shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water'));
 shinyCard.forEach(shinyCard => shinyCard.classList.add('dragon')); }
 else if (type === "dark" || type2 === "dark"){  shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fighting'));    shinyCard.forEach( shinyCard => shinyCard.classList.remove('water')); shinyCard.forEach(shinyCard => shinyCard.classList.add('darkness'));} 
else if (type === "fighting" || type2 === "fighting") {shinyCard.forEach( shinyCard => shinyCard.classList.remove('steel')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('psychic'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('electric')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ice')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('bug'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('grass')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ghost')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('ground'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fairy')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('rock')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('normal'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('fire')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('dragon')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('poison'));
 shinyCard.forEach( shinyCard => shinyCard.classList.remove('darkness')); shinyCard.forEach( shinyCard => shinyCard.classList.remove('water')); shinyCard.forEach(shinyCard => shinyCard.classList.add('fighting')); }
}}
, [type, nameType]);


if (loaded === "loaded"){
  if (type === "water") { shinyCard.forEach( shinyCard => shinyCard.classList.add('water'));} 
 else  if (type === "bug"){shinyCard.forEach(shinyCard => shinyCard.classList.add('bug'));} 
 else  if (type === "ground") { shinyCard.forEach(shinyCard => shinyCard.classList.add('ground'));} 
 else if (type === "steel") {  shinyCard.forEach(shinyCard => shinyCard.classList.add('steel'));}
 else if (type === "normal" || type === "flying"){ shinyCard.forEach(shinyCard => shinyCard.classList.add('normal'));}
 else if (type === "psychic") {shinyCard.forEach(shinyCard => shinyCard.classList.add('psychic'));}
 else if (type === "poison"){ shinyCard.forEach(shinyCard => shinyCard.classList.add('poison'));} 
 else if (type === "electric") {shinyCard.forEach(shinyCard => shinyCard.classList.add('electric'));}
 else if (type === "ice") {shinyCard.forEach(shinyCard => shinyCard.classList.add('ice'));}
 else if (type === "grass") { shinyCard.forEach(shinyCard => shinyCard.classList.add('grass')); }
 else if (type === "ghost") { shinyCard.forEach(shinyCard => shinyCard.classList.add('ghost'));}
 else if (type === "fire") {shinyCard.forEach(shinyCard => shinyCard.classList.add('fire'));   }
 else if(type === "fairy") { shinyCard.forEach(shinyCard => shinyCard.classList.add('fairy'));}
 else if (type === "rock") { shinyCard.forEach(shinyCard => shinyCard.classList.add('rock')); }
 else if (type === "dragon") { shinyCard.forEach(shinyCard => shinyCard.classList.add('dragon'));}
 else if (type === "dark"){ shinyCard.forEach(shinyCard => shinyCard.classList.add('darkness'));} 
 else if (type === "fighting") { shinyCard.forEach(shinyCard => shinyCard.classList.add('fighting'));}
if (pokePicture === null){return(null)}

if(shinyIcon !== null && type2 !== undefined){
    return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column">
  <img src={pokePicture} alt="officialArtwork" className="pokePic" />
  <div className="poketypes">{type} / {type2} </div>
  </div> 
  <div className="column">
    <div className="card">
   <h3>Shiny {pokename}</h3><img src={shinyIcon} alt="shinyIcon" className="pokePic"  /></div>
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
  <div className="card">
   <h3>Shiny {pokename}</h3><img src={shinyIcon} alt="shinyIcon" className="pokePic"  /></div>
  </div>
  </div>
  </div> )}
else {  return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column">
  <img src={pokePicture} alt="officialArtwork"  className="pokePic" />
  <div className="poketypes">{type} type</div>  
  </div>
  </div>
  </div>)}}
  
else{return( <div className="loading">
<img src={loading} alt="loading" />
</div>)}}
