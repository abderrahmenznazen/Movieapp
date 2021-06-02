import React ,{  useState } from "react";
import axios from 'axios';
import {GetFilmfb} from '../FirebaseApp/postFilmFireBase'


//<Test x={4} n={9} /><List  />

function Addfilmfb() {
  const [input, setInput]=useState({})


const handleSubmit =(e)=>{
  console.log(input)
  e.preventDefault()
  axios.post("https://appmovies-99fed-default-rtdb.firebaseio.com/movies.json",JSON.stringify(input))
  .then((response)=>console.log(input))
    .catch((error)=>console.log(error));
    console.log(input)
  }
  

    return (
        <div className='addfilm'>
          <form onSubmit={handleSubmit}>
          <div> 
            <input type="text" name='title'  onChange={(e) => setInput({ ...input, title: e.target.value })}  placeholder="title" className='' />
            <input type="text" name='year'  onChange={(e) => setInput({ ...input, year: e.target.value })}  placeholder="year" className='' />
            <input type="text" name='plot'  onChange={(e) => setInput({ ...input, plot: e.target.value })} placeholder="plot" className='' />
            <input type="text" name='director' onChange={(e) => setInput({ ...input, director: e.target.value })}  placeholder="director" className='' />
            <input type="text" name='actors' onChange={(e) => setInput({ ...input, actors: e.target.value })} placeholder="actors" className='' />
            <input type="text" name='runtime' onChange={(e) => setInput({ ...input, runtime: e.target.value })} placeholder="runtime" className='' />
            <input type="text" name='genres' onChange={(e) => setInput({ ...input, genres: e.target.value })} placeholder="genres" className='' />
            </div>
            <input type="file" name='posterUrl'  onChange={(e) => setInput({ ...input, posterUrl: e.target.value })}  placeholder="posterUrl" className='inputimg' />
            
            <div classname='submitButton'>
                <button type='submit'>submit</button>
                <button onClick={(element)=>delete(element.id)}>delete</button>
            </div>
          </form>  
          <div className='getItems'><GetFilmfb /></div>
      </div>
    );
  }

  export default Addfilmfb;