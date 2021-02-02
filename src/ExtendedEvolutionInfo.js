import React, {useEffect, useState} from "react";


export default function ExtendedEvolutionInfo(props){
    const official = "official-artwork";
    const loaded = props.data.loaded;
    const [pokePicture, setPokePicture] = useState("");
    const [pokeName, setPokeName] = useState("");
    const [arrowIcon, setArrowIcon] = useState("");

    useEffect(() => {
        let mounted = true;
        if (mounted){
        if (loaded === "loaded" && props.data.info !== null) {
            setPokePicture(props.data.info.sprites.other.[official].front_default)
            setPokeName(props.data.info.forms[0].name); 
        }}}, [props.data]);



           
  let [width, setWidth] = useState(window.screen.width);


  useEffect(() => {
    const resizeListener = () => {
        let screen = window.screen.width;
      setWidth(screen)
    };
    window.addEventListener('resize', resizeListener);
    if (width < 500){setArrowIcon("fas fa-long-arrow-alt-up");}
    else{setArrowIcon("fas fa-long-arrow-alt-left");}
    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [window.screen.width])


if (loaded === "loaded" && props.data.info !== null){
    return( <div className="ExtendedEvolvesFrom">
        <h2 className="evolveHeader">Evolves From</h2>
        <i className={arrowIcon}></i>
        <img src={pokePicture} alt={pokeName} className="evolutionImg"/>
        <h2 className="nameTitle">{pokeName}</h2>
    </div>
    )} 
    else if (loaded === "loaded" && props.data.info === null) {return(null)}
    else {return("loading");}
}