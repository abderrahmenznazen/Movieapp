import axios from "axios"
import { useEffect, useState } from "react"
import Item from "../abonnement"




export const Searchapp =()=>{

    const [search, setsearch]=useState(false)
    const [getSearch, setGetSearch]=useState([])

    console.log(search)
    console.log(getSearch)

const getsearchx =()=>{
    axios.get("https://appmovies-99fed-default-rtdb.firebaseio.com/movies.json").then
    (response=> setGetSearch(response.data))  
    .catch(error=>console.log(error))
}
const searchit=(e)=>{
    e.preventDefault()
    if (e.target.value==""){setsearch(null) } else {
     setsearch(e.target.value)}
}
useEffect(()=>getsearchx(),[])

   return ( <div>
                <div className='inputt'>
                    <input type="text" name='search' onChange={searchit} placeholder="search" className="" />
                </div> 
                <div>
                    {Object.keys(getSearch).filter( el => getSearch[el].title.toLowerCase().includes(search)).map((id)=>(
                   
                            <div className='serchcard'>
                                <Item cimg={getSearch[id].posterUrl}  
                                ctitle={getSearch[id].title} 
                                cgenres={getSearch[id].genres} 
                                cyear={getSearch[id].year}/>
                            </div>
                 )
            )}
                    {Object.keys(getSearch).filter( el => getSearch[el].year.toLowerCase().includes(search)).map((id)=>(
                   
                   <div className='serchcard'>
                       <Item cimg={getSearch[id].posterUrl}  
                       ctitle={getSearch[id].title} 
                       cgenres={getSearch[id].genres} 
                       cyear={getSearch[id].year}/>
                   </div>
                )
            )}
            {Object.keys(getSearch).filter( el => getSearch[el].actors.toLowerCase().includes(search)).map((id)=>(
                   
                   <div className='serchcard'>
                       <Item cimg={getSearch[id].posterUrl}  
                       ctitle={getSearch[id].title} 
                       cgenres={getSearch[id].genres} 
                       cyear={getSearch[id].year}/>
                   </div>
        )
           )}
                </div>
            </div>

   )
}