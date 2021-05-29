import axios from "axios";
import React ,{ useEffect, useState } from "react";
import Item from './abonnement'
import {ApdatModal} from '../component/modalApdate'
import './card.css'



export const GetFilm =()=>{
    const [getFilm,setGetFilm]= useState([])
    const getItems =()=>{
        axios.get(`http://localhost:3004/movies`).then(
            response => setGetFilm (response.data)
        ).catch(error=>console.log(error))
    }
    const Delete =(id)=>{
        axios.delete(`http://localhost:3004/movies/${id}`,getFilm)  
        .then((response)=>console.log(response))
        .catch((error)=>console.log(error));
      }
    useEffect (()=>{getItems()},[])
    
        return (
            getFilm.map(movie=>
                        <div className='cardItem'>
                            <Item cimg={movie.posterUrl}  
                            ctitle={movie.title} 
                            cicon={movie.icon}  
                            cgenres={movie.genres} 
                            cyear={movie.year}
                            cplay={movie.play}
                            cstar={movie.star}/>
                            <button onClick={()=>Delete(movie.id)}>delete</button>
                            <ApdatModal movie={movie} className='AppdateModal'/>
                    </div>
                    )
                )
           
}