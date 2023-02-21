import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Animesdisplaytemplate from "./Components.jsx/Animesdisplaytemplate";




const Searchanime = () => {

    let[animes, setAnimes]=useState("");
   let{searchKey}= useParams();

useEffect( ()=>{

               setTimeout(  ()=>{
                            fetch("https://api.jikan.moe/v4/anime")
                            .then(  (response)=>{  return(  response.json() ) })
                            .then( (y)=> {setAnimes(y.data);})
               }, 2000)

} ,[])


    return ( 
        <>
        <div className="home">
       { animes && <Animesdisplaytemplate animes={animes.filter((anime)=>{  return(anime.title.toUpperCase().includes(searchKey.toUpperCase())) })}></Animesdisplaytemplate>}
        </div> 
        </>
     );
}
 
export default Searchanime;