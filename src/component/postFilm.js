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