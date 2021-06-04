import axios from "axios";
import React ,{ useEffect, useState } from "react";
import Item from '../abonnement'
import {ApdatModalfb} from './apdatefirebase'
import '../card.css'



export const FavFilmfb =()=>{
    

    const [getfilmFav,setgetfilmFav]= useState([])
    const [FilmFav,setFilmFav]= useState([])
   
    console.log(FilmFav)
    
    const getItems =()=>{
        axios.get("https://appmovies-99fed-default-rtdb.firebaseio.com/movies/.json").then(            
            response => setgetfilmFav (response.data)
        ).catch(error=>console.log(error))
    }
   
    const handleSubmit =()=>{
        axios.post(`https://appmovies-99fed-default-rtdb.firebaseio.com/posts.json`,FilmFav)
        .then((response)=>console.log(response.data))
          .catch((error)=>console.log(error)); 
        }
    const refreshPage = ()=>{
          window.location.reload();
    }
    
    const Delete =(id)=>{
        axios.delete(`https://appmovies-99fed-default-rtdb.firebaseio.com/movies/${id}.json`,getfilmFav)  
        .then((response)=>console.log(response))
        .catch((error)=>console.log(error));
      }
    useEffect (()=>{getItems()},[])

//;nconst id=Object.keys(movie.id)


        return (
            (Object.keys(getfilmFav)).map(id=>
                    <div className='admindashbord' >
                            <div className='cardItem'>
                                <Item cimg={getfilmFav[id].posterUrl}  
                                ctitle={getfilmFav[id].title} 
                                cgenres={getfilmFav[id].genres} 
                                cyear={getfilmFav[id].year}/>
                            </div>
                            <div className='adminbutton'>
                                <button onClick={()=>{setFilmFav(getfilmFav[id]); handleSubmit()}} >favorit</button>
                            </div>
                    </div>
                    )
                )     
}