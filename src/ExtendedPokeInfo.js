import React, {useState,  useEffect} from "react";
import axios from "axios";
import ExtendedCards from "./ExtendedCards.js";

export default function ExtendedPokeInfo(props){

    let url = props.data;
    const [pokeinfo, Setpokeinfo] = useState("");
    const cancelTokenSource = axios.CancelToken.source();

function showExtendedInfo(response){
    const official = "official-artwork";
    if (response.data.types.length > 1) {
    Setpokeinfo({
        type: response.data.types[0].type.name,
        type2: response.data.types[1].type.name,
        evolutionURL: response.data.species.url,
        name: response.data.name,
        pokePicture: response.data.sprites.other.[official].front_default,
        shinySprite: response.data.sprites.front_shiny,
        loaded: "loaded",
    })}

    else { Setpokeinfo({
        type: response.data.types[0].type.name,
        name: response.data.name,
        evolutionURL: response.data.species.url,
        pokePicture: response.data.sprites.other.[official].front_default,
        shinySprite: response.data.sprites.front_shiny,
        loaded: "loaded",
    })}
    }

useEffect(() => {
    let mounted = true;
    if (mounted) {axios.get(url, {
        cancelToken: cancelTokenSource.token
      }).then(showExtendedInfo);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, [props.data]);




      return(<div className="extendedCards" key={pokeinfo}>
          <ExtendedCards data={pokeinfo} className="extendedPokemonRow" />
      </div>)

}