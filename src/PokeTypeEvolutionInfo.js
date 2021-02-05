import React, {useState, useEffect} from "react";
import axios from "axios";
import ExtendedEvolutionInfo from "./ExtendedEvolutionInfo";


export default function PokeTypeEvolutionInfo(props){
    const official = "official-artwork";
    const loaded = props.data.loaded;
    const [pokePicture, setPokePicture] = useState("");
    const [pokeName, setPokeName] = useState("");
    const [pokeInfo, setPokeInfo] = useState("");
    const [arrowIcon, setArrowIcon] = useState("");
    const arrowStyle = {position: "relative", bottom: "-45%" }
    const upArrowStyle = {position: "relative", left: "30%"}
// Sets pokeinfo to response.data and sends "loaded" status to ExtendedEvolution.js
    function showEvolutionExtendedInfo(response){
        setPokeInfo({info: response.data,
          loaded: "loaded",});}

  // if pokemon doesn't evolve pokeinfo is set to null. Otherwise axios is called and extened info is shown
    function showEvolutionInfo(response){
        let doesEvolve = response.data.evolves_from_species;
        if (doesEvolve !== null){
            let evolutionName = response.data.evolves_from_species.name;
        const APIurl = `https://pokeapi.co/api/v2/pokemon/${evolutionName}`;
        axios.get(APIurl).then(showEvolutionExtendedInfo);}
        else {setPokeInfo({info: null,
        loaded: "loaded",})}}

  // if app is loaded pokePicture, pokeName and pokeURL are set and axios is called to get evolution info
    useEffect(() => {
        let mounted = true;
        if (mounted) { 
            const cancelTokenSource = axios.CancelToken.source()
        if (loaded === "loaded") { 
            if (props.data.info !== null){
            setPokePicture(props.data.info.sprites.other.[official].front_default);
            setPokeName(props.data.info.forms[0].name); 
            let pokeURL = props.data.info.species.url
        axios.get(pokeURL, {
            cancelToken: cancelTokenSource.token
          }).then(showEvolutionInfo)}
          return function cleanup() {
            mounted = false
            cancelTokenSource.cancel();
            // Runs anytime props data changes
        }}}}, [props.data]);

    //Screen size is set and a resize event listener is set. if Screen goes below 500px wide the left arrow becomes an up arrow as row becomes column
    //If screen is above 500px 450% padding top is applied and arrow points left.
        let [width, setWidth] = useState(window.screen.width);
        useEffect(() => {
          const resizeListener = () => {
              let screen = window.screen.width;
            setWidth(screen)
          };
          window.addEventListener('resize', resizeListener);
          if (width < 500){setArrowIcon("fas fa-long-arrow-alt-up");
          }
          else{setArrowIcon("fas fa-long-arrow-alt-left");
          }
          return () => {
            window.removeEventListener('resize', resizeListener);
          }
          // useEffect is run anytime window screen width changes
        }, [window.screen.width])

    if (loaded === "loaded" && props.data.info !== null){ 
   //If pokemon has evolved from another Pokemon (pokeInfo) ExtendedEvolutionInfo is displayed
        if (pokeInfo.info !== null){
    return(<div className="evolvesFrom">
        <div className="extendedevolutionrow">
            <div className="column">
            <i className="fas fa-long-arrow-alt-up" id="evolutionArrow" style={upArrowStyle} ></i>
        <h2 className="evolvesFromHeader">Evolves from</h2>
        <img src={pokePicture} alt={pokeName} className="evolutionImg" id="firstEvolutionByType"/>
        <h2 className="nameTitle" id="firstEvolutionByType">{pokeName}</h2>
        </div>
        <div className="column">
        <i className={arrowIcon} id="evolutionArrow" style={arrowStyle}></i>
        </div>
        <div className="column">
        <ExtendedEvolutionInfo data={pokeInfo} /> </div></div></div>)}
           //If pokemon hasn't evolved from another Pokemon (pokeInfo) ExtendedEvolutionInfo is not displayed
        else { return(<div className="evolvesFrom">
                        <i className="fas fa-long-arrow-alt-up" id="evolutionArrowSingle"></i>
        <h2 className="evolvesFromHeader">Evolves from</h2>
        <img src={pokePicture} alt={pokeName} className="evolutionImg"/>
        <h2 className="nameTitle" id="evolveName">{pokeName}</h2></div>)}}
           //If there is no evolution information to display nothing is returned
else if (loaded === "loaded" && props.data.info === null) {return(null)}
else {return("loading")}}
    