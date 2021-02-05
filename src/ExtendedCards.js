import React, {useState, useEffect} from "react";
import axios from "axios";
import loading from "./loading.gif";
import PokeTypeEvolutionInfo from "./PokeTypeEvolutionInfo.js";

export default function ExtendedCards(props){
let pokename = props.data.name;
let type = props.data.type;
let type2 = props.data.type2;
let pokePicture = props.data.pokePicture;
let shinyIcon =  props.data.shinySprite;
let loaded = props.data.loaded;
let evolutionURL = props.data.evolutionURL;
const [pokeInfo, setPokeInfo] = useState("");

function showEvolutionExtendedInfo(response){
  setPokeInfo({info: response.data,
    loaded: "loaded",});}

function showEvolutionInfo(response){
let doesEvolve = response.data.evolves_from_species;
if (doesEvolve !== null){
  let evolutionName = response.data.evolves_from_species.name;
const APIurl = `https://pokeapi.co/api/v2/pokemon/${evolutionName}`;
axios.get(APIurl).then(showEvolutionExtendedInfo);}
else {setPokeInfo({info: null,
loaded: "loaded",})}}

useEffect(() => {
    let mounted = true;
    const cancelTokenSource = axios.CancelToken.source();
    //Sets ability information with 2 abilities for PokeAbilities.js and loaded status
    if (mounted) { 
        //Axios makes request using set evolutionURL
      axios.get(evolutionURL, {
        cancelToken: cancelTokenSource.token
      }).then(showEvolutionInfo);}
          //Cancels axios request
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
      //runs everytime evolutionURL changes
  }}, [evolutionURL]);

  
if (loaded === "loaded"){
if (pokePicture === null){return(null)}

if(shinyIcon !== null && type2 !== undefined){
    return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column" id="extendedPokeColumn">
  <img src={pokePicture} alt="officialArtwork" className="pokePic" />
  <div className="poketypes">{type} / {type2} </div>
  </div> 
  <div className="column">
    <div className="card">
   <h3>Shiny {pokename}</h3><img src={shinyIcon} alt="shinyIcon" className="pokePic"  /></div>
  </div>
  </div>
  <PokeTypeEvolutionInfo data={pokeInfo} />
  </div>)}
  
 if (type2 !== undefined && shinyIcon === null){return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column" id="extendedPokeColumn">
  <img src={pokePicture} alt="officialArtwork" className="pokePic"  />
  <div className="poketypes">{type} / {type2} </div>
  </div>
  </div>
  <PokeTypeEvolutionInfo data={pokeInfo} />
  </div> 
  )}

if (type2 === undefined && shinyIcon !== null){return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column" id="extendedPokeColumn">
  <img src={pokePicture} alt="officialArtwork"  className="pokePic" />
  <div className="poketypes">{type} type</div>
  </div> 
  <div className="column">
  <div className="card">
   <h3>Shiny {pokename}</h3><img src={shinyIcon} alt="shinyIcon" className="pokePic"  /></div>
  </div>
  </div>
  <PokeTypeEvolutionInfo data={pokeInfo} />
  </div> )}
else {  return( 
    <div className="ExtendedCards">
    <h3 className="pokeName">{pokename}</h3> 
    <div className="row">
        <div className="column" id="extendedPokeColumn">
  <img src={pokePicture} alt="officialArtwork"  className="pokePic" />
  <div className="poketypes">{type} type</div>  
  </div>
  </div>
  <PokeTypeEvolutionInfo data={pokeInfo} />
  </div>)}}
  
else{return( <div className="loading">
<img src={loading} alt="loading" />
</div>)}}
