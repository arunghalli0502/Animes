import { useEffect, useState } from "react";
import Animesdisplaytemplate from "./Animesdisplaytemplate";
const Home = () => {

    let[animes, setAnimes]=useState(null);
    // let[pending, setPending]=useState(true);

    useEffect( ()=>{

        setTimeout(() => {
            fetch("https://api.jikan.moe/v4/anime")
            .then( (response)=>{ return(response.json())} )
            .then(  (inputdata)=>{setAnimes(inputdata.data);  } )
        }, 2000);
    },[] )
   console.log(animes);
    return ( 
        <>
        <div className="home">
       { animes && <Animesdisplaytemplate animes={animes}></Animesdisplaytemplate>}
        </div>        
        </>
         );
}
 
export default Home;