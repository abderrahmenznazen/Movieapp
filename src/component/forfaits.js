import React ,{ useEffect, useState } from "react";
import Item from './abonnement'


function Forfait ({n}) {
    const [forfait,setForfait]= useState([])
    const getForfait=()=>{
        fetch('film.json').then
        (response =>response.json()).then
        
        ((forfait)=> setForfait(forfait));
    }
    useEffect(()=>{getForfait()},[])
     {/**<div className='top' ><Item ctitle={movie.title} cgenres={movie.genres}/><Item cicon={movie.icon}/></div>
                <div className='imgf' ><Item cimg={movie.posterUrl} /></div>
                <div className='buttom'><Item cyear={movie.year}/></div> */}
return(
    forfait.map(el=>
            <div >
                {el.items.filter(x=>x.id==n).map(itm=>(
                    <div>
                        <div className='forfait'>
                            <Item c={itm.bgimg}  
                            ctitle={itm.title}  
                            cgenres={itm.stitle}
                            cyear={itm.price}
                            cruntime={itm.offre}
                            inscrit={itm.offre1}
                            forfait={itm.offre2}/>
                        </div>
                        <button className='select'>SÉLECTIONNEZ VOTRES PLAN &#10003;</button>
                    </div>
                ))}
    </div>)    
)
}
export default Forfait