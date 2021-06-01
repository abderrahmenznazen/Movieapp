import axios from "axios";
import React ,{ useEffect, useState } from "react";
import Item from '../abonnement'
import {ApdatModal} from '../modalApdate'
import '../card.css'



export const GetFilmfb =()=>{
    var db= `https://appmovies-99fed-default-rtdb.firebaseio.com/movies.json`
    

    const [getFilm,setGetFilm]= useState([])
    const getItems =()=>{
        axios.get(db).then(
            response => setGetFilm (response.data)
        ).catch(error=>console.log(error))
    }
    const Delete =(id)=>{
        axios.delete(Object.keys(db),getFilm)  
        .then((response)=>console.log(response))
        .catch((error)=>console.log(error));
      }
    useEffect (()=>{getItems()},[])
    
        return (
            getFilm.map(movie=>
                    <div className='admindashbord'>
                            <div className='cardItem'>
                                <Item cimg={movie.posterUrl}  
                                ctitle={movie.title} 
                                cgenres={movie.genres} 
                                cyear={movie.year}/>
                            </div>
                            <div className='adminbutton'>
                                <button onClick={()=>Delete(movie.id)}>delete</button>
                                <ApdatModal movie={movie} className='AppdateModal'/>
                            </div>
                    </div>
                    )
                )     
}