import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Animesdetails = () => {

let {id}=useParams();
let[anime, setAnime]=useState(null);



useEffect( ()=>{

    setTimeout(() => {
        fetch("https://api.jikan.moe/v4/anime/"+id)
        .then( (response)=>{ return(response.json())} )
        .then(  (inputdata)=>{setAnime(inputdata.data);  } )
    }, 2000);
},[id] )

console.log(anime);



    return ( 
        <animesdetails>
                <div className="animedetailpage">
                    { anime && <div className="animedetails">
                            <img src={anime.images.webp.large_image_url} alt="" />
                            <div className="animedetails-complete">
                                <h1>{anime.title}</h1>
                                <span className="dr">
                                    <span>📅 {anime.year}</span>
                                    <span> ⏱{anime.duration} </span>
                                    <span> 🌟{anime.score}</span>
                                </span>
                                <br /><br />
                                <p > {anime.synopsis} </p>
                                <iframe height="400px" width="900px" src={anime.trailer.embed_url}></iframe> 
                                    <br/>
                                <div className="options">
                                    <span id="a1">➕ Watch List</span>
                                    <span id="a2">⬇ Download</span>
                                    <span id="a3">↗ Share</span>                                   
                                </div>
                            </div>
                    </div>    }
                </div>
        </animesdetails>
     );
}
 
export default Animesdetails;