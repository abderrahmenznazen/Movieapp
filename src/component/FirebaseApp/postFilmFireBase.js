import axios from "axios";
import React ,{ useEffect, useState } from "react";
import Item from '../abonnement'
import {ApdatModalfb} from './apdatefirebase'
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
        .then((response)=>{console.log(response);refreshPage()})
        .catch((error)=>console.log(error));
      }

    const refreshPage = ()=>{
        window.location.reload();
    }

    useEffect (()=>{getItems()},[])

//;nconst id=Object.keys(movie.id)


        return (
            (Object.keys(getFilm)).map(id=>
                    <div className='admindashbord' >
                            <div className='cardItem'>
                                <Item cimg={getFilm[id].posterUrl}  
                                ctitle={getFilm[id].title} 
                                cgenres={getFilm[id].genres} 
                                />
                            </div>
                            <div className='adminbutton'>
                                <button onClick={()=>Delete(id)} ><img src='image/deletewhite.svg'/></button>
                                <ApdatModalfb element={getFilm[id]} x={id} className='AppdateModal'/>
                            </div>
                    </div>
                    )
                )     
}