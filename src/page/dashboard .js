import Test from '../component/saerchapp'
import List from './admin'
import Input from '../component/addfilm'
import React ,{  useState } from "react";
import axios from 'axios';
import {GetFilm} from '../component/postFilm'


//<Test x={4} n={9} /><List  />

function Addfilm() {
  const [input, setInput]=useState({})
  
  console.log(input)
const handleSubmit =(e)=>{
  axios.post('http://localhost:3004/posts',input)
  .then((response)=>console.log(response))
    .catch((error)=>console.log(error));
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
          <div className='getItems'><GetFilm /></div>
      </div>
    );
  }

  export default Addfilm;