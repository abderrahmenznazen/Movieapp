import axios from "axios";
import React ,{ useEffect,Component , useState } from "react";
import Modal from './modal';




export const ApdatModal =({movie})=>{



    const [show, setShow] = useState(false);
    const hideModal = () => setShow(false);
    const showModal = () => setShow(true);


    const [apdateFilm, setapdateFilm] = useState({
            title : movie.title,
            year : movie.year,
            plot : movie.plot,
            directo : movie.director,
            actors : movie.actors,
            runtime : movie.runtime,
            posterUrl : movie.posterUrl,
            genres : [movie.genres]
    }) 

    const handleChangeUpdate = e => {
        const {name, value} = e.target
        setapdateFilm({...apdateFilm, [name]:value})
    }

    
    const handleUpdate = async (id) => {
    await axios.put(`http://localhost:3004/movies/${id}`,apdateFilm)
    .then(response => {console.log('Status:' , response.status)
                       console.log('Data : ', response.data)
                       setapdateFilm(response.data)})
    .catch(error => console.error('something went wrong', error)
    )}


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
                            <input type="text" name='title'  onChange={handleChangeUpdate}  defaultValue={movie.title}   placeholder="title" className='' />
                            <input type="text" name='year'  onChange={handleChangeUpdate}  defaultValue={movie.year}  placeholder="year" className='' />
                            <input type="text" name='plot'  onChange={handleChangeUpdate}  defaultValue={movie.plot} placeholder="plot" className='' />
                            <input type="text" name='director' onChange={handleChangeUpdate} defaultValue={movie.director}   placeholder="director" className='' />
                            <input type="text" name='actors' onChange={handleChangeUpdate}  defaultValue={movie.actors}  placeholder="actors" className='' />
                            <input type="text" name='runtime' onChange={handleChangeUpdate}  defaultValue={movie.runtime} placeholder="runtime" className='' />
                            <input type="text" name='image'  onChange={handleChangeUpdate}  defaultValue={movie.posterUrl} placeholder="image" className='inputimg' />
                            <input type="text" name='genres'  onChange={handleChangeUpdate}  defaultValue={movie.genres} placeholder="image" className='inputimg' />
                        </div>
                        <div classname='submitButton'>
                        <button onClick={()=>handleUpdate(movie.id)} >Modifini</button>
                        </div>
                </form>    
            </Modal>
            <button type="button" onClick={showModal}>Edit</button>
          </main> 
                )
}