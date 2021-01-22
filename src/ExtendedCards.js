import React from "react";

export default function ExtendedCards(props){
    console.log(props.data.type);
let pokename = props.data.name;
let type = props.data.type;
let regularIcon = props.data.sprite;
let shinyIcon =  props.data.shinySprite;
let card = document.querySelector('.card');
let shinyCard = document.getElementById('card2');
let loaded = props.data.loaded;

if (loaded === "loaded"){
if (type === "water") {card.classList.remove('steel'); card.classList.remove('psychic');
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
    card.classList.add('water'); shinyCard.classList.add('water');} 

    else if (type === "ground") {card.classList.remove('steel'); card.classList.remove('psychic');
    card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
    card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('water');
    card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
    card.classList.remove('fire'); card.classList.remove('dragon');
    card.classList.remove('darkness'); card.classList.remove('fighting');
    shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
    shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
    shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('water');
    shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
    shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('poison');
    shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
        card.classList.add('ground'); shinyCard.classList.add('ground');} 

    else if (type === "steel") {card.classList.remove('water'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('ground');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('poison');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('water'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('steel'); shinyCard.classList.add('steel');}

    else if (type === "normal"){card.classList.remove('water'); card.classList.remove('psychic');
    card.classList.remove('electric'); card.classList.remove('ice');
    card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('ground');
    card.classList.remove('steel'); card.classList.remove('fairy'); card.classList.remove('rock');
    card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('poison');
    card.classList.remove('darkness'); card.classList.remove('fighting');
    shinyCard.classList.remove('water'); shinyCard.classList.remove('psychic');
    shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('ground');
    shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');  shinyCard.classList.remove('steel');
    shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock');
    shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('poison');
    shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
        card.classList.add('normal'); shinyCard.classList.add('normal');}

    else if (type === "psychic") {
    card.classList.remove('steel'); card.classList.remove('water');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('water');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('psychic'); shinyCard.classList.add('psychic');}

    else if (type === "poison"){card.classList.remove('steel'); card.classList.remove('psychic');
    card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('water');
    card.classList.remove('grass'); card.classList.remove('ghost');
    card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
    card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('ground');
    card.classList.remove('darkness'); card.classList.remove('fighting'); 
    shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
    shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
    shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('ground');
    shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
    shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); 
    shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting'); shinyCard.classList.remove('water');
        card.classList.add('poison'); shinyCard.classList.add('poison');} 

else if (type === "electric") {    card.classList.remove('steel'); card.classList.remove('water');
card.classList.remove('psychic'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('poison');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('water');
shinyCard.classList.remove('psychic'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('electric'); shinyCard.classList.add('electric');}

else if (type === "ice") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('water');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('poison');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('ground');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('water');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('ice'); shinyCard.classList.add('ice');}

else if (type === "grass") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('water'); card.classList.remove('ghost'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('water'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('grass'); shinyCard.classList.add('grass');
    }


else if (type === "ghost") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('water'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('water'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('ghost'); shinyCard.classList.add('ghost');}

else if (type === "fire") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('poison');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('water'); card.classList.remove('dragon'); card.classList.remove('ground');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('water'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting'); shinyCard.classList.remove('normal');
    card.classList.add('fire'); shinyCard.classList.add('fire');
    }

else if (type === "fairy") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('poison');
card.classList.remove('water'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); card.classList.remove('ground');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('water'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('fairy'); shinyCard.classList.add('fairy');}

else if (type === "rock") {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('normal');
card.classList.remove('fairy'); card.classList.remove('water'); card.classList.remove('ground');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
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
card.classList.remove('fire'); card.classList.remove('water');
card.classList.remove('darkness'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('water'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('fighting');
    card.classList.add('dragon'); shinyCard.classList.add('dragon');}

else if (type === "dark"){card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon');
card.classList.remove('water'); card.classList.remove('fighting');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('water'); shinyCard.classList.remove('fighting'); shinyCard.classList.remove('poison');
    card.classList.add('darkness'); shinyCard.classList.add('darkness');}

else {card.classList.remove('steel'); card.classList.remove('psychic');
card.classList.remove('electric'); card.classList.remove('ice'); card.classList.remove('poison');
card.classList.remove('grass'); card.classList.remove('ghost'); card.classList.remove('ground');
card.classList.remove('fairy'); card.classList.remove('rock'); card.classList.remove('normal');
card.classList.remove('fire'); card.classList.remove('dragon'); 
card.classList.remove('darkness'); card.classList.remove('water');
shinyCard.classList.remove('steel'); shinyCard.classList.remove('psychic');
shinyCard.classList.remove('electric'); shinyCard.classList.remove('ice');
shinyCard.classList.remove('grass'); shinyCard.classList.remove('ghost'); shinyCard.classList.remove('poison');
shinyCard.classList.remove('fairy'); shinyCard.classList.remove('rock'); shinyCard.classList.remove('ground');
shinyCard.classList.remove('fire'); shinyCard.classList.remove('dragon'); shinyCard.classList.remove('normal');
shinyCard.classList.remove('darkness'); shinyCard.classList.remove('water');
    card.classList.add('fighting'); shinyCard.classList.add('fighting');
}}

    return( 
    <div className="ExtendedCards">
    <div className="row">
    <div className="card"> 
    <h3 className="pokeName">{pokename}</h3> <img src={regularIcon} alt="icon" /> </div>
    <div className="card" id="card2"> 
    <h3 className="pokeName">Shiny {pokename}</h3>
    <img src={shinyIcon} alt="shiny" /> </div></div>
    </div>  )
}