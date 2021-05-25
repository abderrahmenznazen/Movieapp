import Test from '../component/saerchapp'
import List from './admin'
import Input from '../component/addfilm'
import React ,{  useState } from "react";
import axios from 'axios';


//<Test x={4} n={9} /><List  />

function Addfilm() {
  const [input, setInput]=useState({
    year:"",plot:"",director:"",actors:"",image:"",title:""
  } )
  
  console.log(input)
const handleSubmit =(e)=>{
  axios.post('http://localhost:3004/posts',input)
  .then((response)=>console.log(response))
    .catch((error)=>console.log(error));
   

  }
  

    return (
        <div className='addfilm'>
          <form onSubmit={handleSubmit}>
            <input type="text" name='title'  onChange={(e) => setInput({ ...input, title: e.target.value })}  placeholder="title" className='' />
            <input type="text" name='year'  onChange={(e) => setInput({ ...input, year: e.target.value })}  placeholder="year" className='' />
            <input type="text" name='plot'  onChange={(e) => setInput({ ...input, plot: e.target.value })} placeholder="plot" className='' />
            <input type="text" name='director' onChange={(e) => setInput({ ...input, director: e.target.value })}  placeholder="director" className='' />
            <input type="text" name='actors' onChange={(e) => setInput({ ...input, actors: e.target.value })} placeholder="actors" className='' />
            <input type="text" name='image'  onChange={(e) => setInput({ ...input, image: e.target.value })}  placeholder="image" className='' />
            <button type='submit'>submit</button>
          </form>  
      </div>
    );
  }

  export default Addfilm;