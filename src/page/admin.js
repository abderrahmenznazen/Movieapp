import React ,{ useEffect, useState } from "react";
import Item from '../component/abonnement'
import '../component/card.css'

function List (n,x) {
    const [films,setFilms]= useState([])
    const getFilms=()=>{
        fetch('film.json').then
        (response =>response.json()).then
        
        ((film)=> setFilms(film));
    }
    useEffect(()=>{getFilms()},[])
     {/**<div className='top' ><Item ctitle={movie.title} cgenres={movie.genres}/><Item cicon={movie.icon}/></div>
                <div className='imgf' ><Item cimg={movie.posterUrl} /></div>
                <div className='buttom'><Item cyear={movie.year}/></div> */}
return(
    films.map(el=>
    <div className='element'>
        {el.movies.slice(movie=>movie.id=n, movie=>movie.id=x).map(movie=>(
        
                <div className='cardItem'>
                    <Item cimg={movie.posterUrl}  
                    ctitle={movie.title} 
                    cicon={movie.icon}  
                    cgenres={movie.genres} 
                    cyear={movie.year}
                    cplay={movie.play}
                    cstar={movie.star}/>
                
            </div>
        ))}
    </div>)
       
)
}
export default List