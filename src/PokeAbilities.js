import React from "react";

export default function PokeAbilities(props){
 
    let ability1 = props.data.abilityHere;
    let hidden1 = props.data.isHiddenHere;
    let ability2 = props.data.ability2Here;
    let hidden2 = props.data.isHidden2Here;
    let abilityList = props.data.abilityListHere;
let loaded = props.data.loaded;


if (loaded === "loaded"){

    if (abilityList.length <= 1){
    return(<div className="PokeAbilities">
       <span className="hiddenAbility">(Hidden):</span>  {ability1}
    </div>)}
    else{
    return(<div className="PokeAbilities">
       <span className="hiddenAbility">(Hidden):</span>  {ability1}<br />
   <span className="hiddenAbility2">(Hidden):</span> {ability2}
</div>);}}
else {return("loading")}
}