import axios from "axios";
import React ,{ useEffect, useState } from "react";
import Item from '../abonnement'
import {ApdatModal} from '../modalApdate'
import '../card.css'



export const GetFilmfb =()=>{
    

    const [getFilm,setGetFilm]= useState([])
    
    
    const getItems =()=>{
        axios.get("https://appmovies-99fed-default-rtdb.firebaseio.com/movies/.json").then(
            response => setGetFilm (response.data)
        ).catch(error=>console.log(error))
    }
    
    const Delete =(id)=>{
        axios.delete(`https://appmovies-99fed-default-rtdb.firebaseio.com/movies/${id}.json`,getFilm)  
        .then((response)=>console.log(response))
        .catch((error)=>console.log(error));
      }
    useEffect (()=>{getItems()},[])

//;nconst id=Object.keys(movie.id)
    
        return (
            (Object.keys(getFilm)).map(id=>
                    <div className='admindashbord'>
                            <div className='cardItem'>
                                <Item cimg={getFilm[id].posterUrl}  
                                ctitle={getFilm[id].title} 
                                cgenres={getFilm[id].genres} 
                                cyear={getFilm[id].year}/>
                            </div>
                            <div className='adminbutton'>
                                <button onClick={()=>Delete(id)}>delete</button>
                                <ApdatModal movie={(id)} className='AppdateModal'/>
                            </div>
                    </div>
                    )
                )     
}