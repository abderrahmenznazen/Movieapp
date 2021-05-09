import React ,{useEffect, useState} from 'react'


function Genre(){
    const [genre,setGenre]= useState([])
    const getGenre = () => {
        fetch('film.json').then(
            response =>response.json()).then
            ((genre)=> setGenre(genre)
        );
    }
useEffect(()=>{getGenre()},[])

return (
        genre.map(el=>
        <div>
           <option value={el.genres} >Comedy</option>
        </div>
        )
)
}

export default Genre