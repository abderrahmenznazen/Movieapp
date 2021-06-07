import axios from "axios"
import { useEffect, useState } from "react"
import Item from './abonnement'


export const Footreget=()=>{
    const [getFootre, setGetfootre]= useState({})
    
    const getFootres =()=>{

        axios.get("https://appmovies-99fed-default-rtdb.firebaseio.com/genres.json").then(            
            response => setGetfootre(response.data)
        ).catch(error=>console.log(error))
    }
    useEffect(()=>{getFootres()},[])

    return(
        (Object.keys(getFootre)).map(id=>
            
                    <div className='footrelink'>
                        <a><Item  cyear={getFootre[id].genres}/></a>       
                    </div>)
        )
}