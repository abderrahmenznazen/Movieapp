import React ,{ useEffect, useState }  from "react"
import Item from './abonnement'
import './card.css'
import Dashboard from './offres'

function Present ({n}){
    const [present,setPresent]=useState([])
    const getPresent=()=>{
            fetch('film.json').then
            (response =>response.json()).then
            
            ((present)=> setPresent(present));
        }
    useEffect(()=>{getPresent()},[])
return(
    present.map(el=>
            <div className='prentItems'>
                {el.items.filter(x=>x.id==n).map(itm=>(
                        <div className='present'>
                            <Item cimg={itm.bgimg}  
                            ctitle={itm.title}  
                            cgenres={itm.stitle}
                            cyear={itm.Desc}
                            inscrit={itm.offre}/>
                        </div>
                ))}
    </div>)      
)
}
export default Present