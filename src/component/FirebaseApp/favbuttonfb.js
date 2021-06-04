import axios from "axios";
import React ,{ useEffect, useState } from "react";
import Item from '../abonnement'
import {ApdatModalfb} from './apdatefirebase'
import '../card.css'



export const FavoritFilm =()=>{
    

    const [getFav,setgetFav]= useState([])

    console.log(getFav)
    
    const getFavfilm =()=>{
        axios.get("https://appmovies-99fed-default-rtdb.firebaseio.com/posts.json").then(            
            response => setgetFav (response.data)
        ).catch(error=>console.log(error))
    }
    
    useEffect (()=>{getFavfilm()},[])

//;nconst id=Object.keys(movie.id)


        return (
            (Object.keys(getFav)).map(id=>
                    <div className='admindashbord' >
                            <div className='cardItem'>
                                <Item cimg={getFav[id].posterUrl}  
                                ctitle={getFav[id].title} 
                                cgenres={getFav[id].genres} 
                                cyear={getFav[id].year}/>
                            </div>
                    </div>
                    )
                )     
}