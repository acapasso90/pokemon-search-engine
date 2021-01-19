import React, {useState} from "react";


export default function PokeInfo(props){
let shinyIcon = props.data.sprites.front_shiny;
let regularIcon = props.data.sprites.front_default;
let ability1 = props.data.abilities[0].ability;
if (props.data.abilities > 1){
let ability2 = props.data.abilities[1].ability;}
let type = props.data.types[0].type.name;
let pokename = (props.data.forms[0].name);
console.log(type);

if (shinyIcon != null){
    return(<div className="pokeInfo">
    <div className="row">
    <div className="card"> <h3 className="pokeName">{pokename}</h3> <img src={regularIcon} alt="icon" /> </div>
    <div className="card">
    <h3 className="pokeName">{pokename}</h3>
    <img src={shinyIcon} alt="shiny" /> </div></div>

    </div>


    )


}

else { return(<div className="pokeInfo">
<div className="row">
<div className="card"> <h3 className="pokeName">{pokename}</h3> <img src={regularIcon} alt="icon" /> </div>
</div>
</div>)}}