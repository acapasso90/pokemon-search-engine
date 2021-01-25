import React from "react";

export default function ExtendedCards(props){
let pokename = props.data.name;
let type = props.data.type;
let type2 = props.data.type2;
let pokePicture = props.data.pokePicture;
let shinyIcon =  props.data.shinySprite;
let loaded = props.data.loaded;

if (shinyIcon != null && type2 != null) {
    return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column">
  <img src={pokePicture} alt="officialArtwork" />
  Types: {type} / {type2} 
  </div> 
  <div className="column">
   <h3>Shiny {pokename}</h3><img src={shinyIcon} alt="shinyIcon" />
  </div></div>
  </div>)}
  
if (type2 != null && shinyIcon === null){return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column">
  <img src={pokePicture} alt="officialArtwork" />
  Types: {type} / {type2} 
  </div> 
  </div>
  </div>)}

if (type2 === null && shinyIcon === null){return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column">
  <img src={pokePicture} alt="officialArtwork" />
  Type: {type}
  </div> 
  </div>
  </div>)}


else {  return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column">
  <img src={pokePicture} alt="officialArtwork" />
  Type: {type}
  </div> 
  <div className="column">
   <h3>Shiny {pokename}</h3><img src={shinyIcon} alt="shinyIcon" />
  </div></div>
  </div>)}}