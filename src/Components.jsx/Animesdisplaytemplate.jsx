import { Link } from "react-router-dom";

const Animesdisplaytemplate = ({animes}) => { 
    

    return ( 
        <>
         <div className="anime-list">
         {
            animes.map((anime)=>{
                return(
                   <Link to={`/animesdetails${anime.mal_id}`}>
                        <div className="anime" key={anime.title}>
                            <img src={anime.images.webp.image_url} alt="" />
                            <div className="YR">
                            <h1>{anime.title}</h1>
                            <span className="dr">
                            <span>📅 {anime.year}</span>
                            <span> 🌟{anime.score}</span>
                            </span>
                            
                            </div>
                        </div>
                    </Link>
                )
            } )
         }
       </div>
        </>
     );
}
 
export default Animesdisplaytemplate;


