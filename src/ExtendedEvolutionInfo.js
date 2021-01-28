import React from "react";


export default function ExtendedEvolutionInfo(props){
    const official = "official-artwork"
    let pokePicture = props.data.sprites.other.[official].front_default;
    let pokename = (props.data.forms[0].name);
    console.log(props.data);

    return( <div className="ExtendedEvolvesFrom">
        <h2 className="evolveHeader">Evolves From</h2>
    <img src={pokePicture} />
    </div>
    )
}