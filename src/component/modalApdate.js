import axios from "axios";
import React ,{ useEffect,Component , useState } from "react";
import Modal from './modal';




export const ApdatModal =({movie})=>{



    //Declaring Update Modal states=========================
    const [show, setShow] = useState(false);
    const hideModal = () => setShow(false);
    const showModal = () => setShow(true);

    //Posting data from db.json================================
    //Declaring form input's state
    const [apdateFilm, setapdateFilm] = useState({
            title : movie.title,
            year : movie.year,
            plot : movie.plot,
            directo : movie.director,
            actors : movie.actors,
            runtime : movie.runtime,
    }) 

    //Handle Change============================================
    const handleChangeUpdate = e => {
        const {name, value} = e.target
        setapdateFilm({...apdateFilm, [name]:value})
    }

    //Editing data from db.json================================
    const handleUpdate = async (id) => {
    await axios.put(`http://localhost:3004/movis/${id}`,apdateFilm)
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
            <main className='modaloffre'>
            <Modal show={show} handleClose={hideModal} >
                <form  className='formes' >
                        <div className='forms'>
                            <input type="text" name='title'  onChange={handleChangeUpdate}  defaultValue={movie.title}   placeholder="title" className='' />
                            <input type="text" name='year'  onChange={handleChangeUpdate}  defaultValue={movie.year}  placeholder="year" className='' />
                            <input type="text" name='plot'  onChange={handleChangeUpdate}  defaultValue={movie.plot} placeholder="plot" className='' />
                            <input type="text" name='director' onChange={handleChangeUpdate} defaultValue={movie.director}   placeholder="director" className='' />
                            <input type="text" name='actors' onChange={handleChangeUpdate}  defaultValue={movie.actors}  placeholder="actors" className='' />
                            <input type="text" name='runtime' onChange={handleChangeUpdate}  defaultValue={movie.runtime} placeholder="runtime" className='' />
                        </div>
                        <input type="file" name='image'  onChange={handleChangeUpdate}  placeholder="image" className='inputimg' />
                        <div classname='submitButton'>
                        <button onClick={()=>handleUpdate(movie.id)} >Modifini</button>
                        </div>
                </form>    
            </Modal>
            <button type="button" onClick={showModal}>Edit</button>
          </main> 
                )
}