import axios from "axios";
import React ,{ useEffect,Component , useState } from "react";
import Modal from '../modal';




export const ApdatModalfb =({x, element})=>{

    const [show, setShow] = useState(false);
    const hideModal = () => setShow(false);
    const showModal = () => setShow(true);


    const [apdateFilmfb, setapdateFilmfb] = useState({
            title : element.title,
            year : element.year,
            plot : element.plot,
            director : element.director,
            actors : element.actors,
            runtime : element.untime,
            posterUrl : element.posterUrl,
            genres : element.genres
    }) 

    const handleChangeUpdate = e => {
        const {name, value} = e.target
        setapdateFilmfb({...apdateFilmfb, [name] : value})
        console.log("gfhjkhg",apdateFilmfb)
    }

    const refreshPage = ()=>{
        window.location.reload();
    }
    
   const handleUpdatefb =  (id) => {
       console.log("pssssssst",id)
 axios.put(`https://appmovies-99fed-default-rtdb.firebaseio.com/movies/${id}.json`,apdateFilmfb)
    .then(response => { setapdateFilmfb(response.data)
                        alert ("Vous voulez valider votre modification ? ")
                        refreshPage ()
                         console.log('Status: ' , response.status)
                        console.log('Data : ', response.data)
                       })
    .catch(error => console.error('something went wrong', error))
    
 }


/***************apdateFilm.map(movie=>
<div className='cardItem'>
<Item cimg={movie.posterUrl}  
ctitle={movie.title} 
cicon={movie.icon}  
cgenres={movie.genres} 
cyear={movie.year}
cplay={movie.play}
cstar={movie.star}/>
<button onClick={()=>Delete(movie.id)}>Edit</button>
</div>)***************************** */


        return (
            <main className=''>
            <Modal show={show} handleClose={hideModal} >
                <form  className='formes' >
                        <div className='forms'>
                            <input type="text" name='title'  onChange={handleChangeUpdate}  defaultValue={element.title}   placeholder="title" className='' />
                            <input type="text" name='year'  onChange={handleChangeUpdate}  defaultValue={element.year}  placeholder="year" className='' />
                            <input type="text" name='plot'  onChange={handleChangeUpdate}  defaultValue={element.plot} placeholder="plot" className='' />
                            <input type="text" name='director' onChange={handleChangeUpdate} defaultValue={element.director}   placeholder="director" className='' />
                            <input type="text" name='actors' onChange={handleChangeUpdate}  defaultValue={element.actors}  placeholder="actors" className='' />
                            <input type="text" name='runtime' onChange={handleChangeUpdate}  defaultValue={element.runtime} placeholder="runtime" className='' />
                            <input type="text" name='posterUrl'  onChange={handleChangeUpdate}  defaultValue={element.posterUrl} placeholder="posterUrl" className='inputimg' />
                            <input type="text" name='genres'  onChange={handleChangeUpdate}  defaultValue={element.genres} placeholder="genres" className='' />
                        </div>
                </form> 
                <button onClick={() => handleUpdatefb(x)}>Modifier</button>  
            </Modal>
            <button type="button" onClick={showModal}>Edit</button>
 

          </main> 
                )
}