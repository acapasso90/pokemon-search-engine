import React, {useState} from "react";



export default function PokeInfo(props){

let loaded = props.loading;
let shinyIcon = props.data.sprites.front_shiny;
let regularIcon = props.data.sprites.front_default;
let ability1 = props.data.abilities[0].ability;
if (props.data.abilities > 1){let ability2 = props.data.abilities[1].ability;}
let type = props.data.types[0].type.name;
let pokename = (props.data.forms[0].name);

let card = document.querySelector('.card');
let shinyCard = document.getElementById('card2');

if(loaded === "loaded"){
if (type === "water") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost');
card.classList.remove('fairy'); card.classList.remove('rock');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('water'); shinyCard.classList.add('water');} 

    else if (type === "steel" || type === "normal") {card.classList.remove('water'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost');
card.classList.remove('fairy'); card.classList.remove('rock');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('water'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('steel'); shinyCard.classList.add('steel');}

    else if (type === "poison" || type === "psychic") {
    card.classList.remove('steel'); card.classList.remove('water');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost');
card.classList.remove('fairy'); card.classList.remove('rock');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('water');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('psychic'); shinyCard.classList.add('psychic');
    }
else if (type === "lightning") {    card.classList.remove('steel'); card.classList.remove('water');
card.classList.remove('psychic'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost');
card.classList.remove('fairy'); card.classList.remove('rock');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('water');
shinyCard.classList.remove('psychic'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('electric'); shinyCard.classList.add('electric');}

else if (type === "ice") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('water');
card.classList.remove('grass'); card.classList.remove('ghost');
card.classList.remove('fairy'); card.classList.remove('rock');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('water');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('ice'); shinyCard.classList.add('ice');}

else if (type === "grass") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('water'); card.classList.remove('ghost');
card.classList.remove('fairy'); card.classList.remove('rock');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('water'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('grass'); shinyCard.classList.add('grass');
    }


else if (type === "ghost") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('water');
card.classList.remove('fairy'); card.classList.remove('rock');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('water');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('ghost'); shinyCard.classList.add('ghost');}

else if (type === "fire") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost');
card.classList.remove('fairy'); card.classList.remove('rock');
card.classList.remove('water'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('water'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('fire'); shinyCard.classList.add('fire');
    }

else if (type === "fairy") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost');
card.classList.remove('water'); card.classList.remove('rock');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('water'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('fairy'); shinyCard.classList.add('fairy');}

else if (type === "rock") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost');
card.classList.remove('fairy'); card.classList.remove('water');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('water');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('rock'); shinyCard.classList.add('rock');
    }
else if (type === "dragon") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost');
card.classList.remove('fairy'); card.classList.remove('rock');
card.classList.remove('fire'); card.classList.remove('water');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('water');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('dragon'); shinyCard.classList.add('dragon');}

else if (type === "darkness"){card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost');
card.classList.remove('fairy'); card.classList.remove('rock');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('water'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('water'); shinyCard.classList.remove('fighting');
    card.classList.add('darkness'); shinyCard.classList.add('darkness');}
else {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost');
card.classList.remove('fairy'); card.classList.remove('rock');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('water');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('water');
    card.classList.add('fighting'); shinyCard.classList.add('fighting');
}}


if (shinyIcon != null){
    return(<div className="pokeInfo">
    <div className="row">
    <div className="card"> 
    <h3 className="pokeName">{pokename}</h3> <img src={regularIcon} alt="icon" /> </div>
    <div className="card" id="card2"> 
    <h3 className="pokeName">{pokename}</h3>
    <img src={shinyIcon} alt="shiny" /> </div></div>
    </div>    )}

else { return(<div className="pokeInfo">
<div className="row">
<div className="card" id="card" > 
<h3 className="pokeName">{pokename}</h3> <img src={regularIcon} alt="icon" /> </div>
</div>
</div>)}}