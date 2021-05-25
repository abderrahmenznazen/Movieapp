import Test from '../component/saerchapp'
import List from './admin'
import Input from '../component/addfilm'
import React ,{  useState } from "react";
import axios from 'axios';


//<Test x={4} n={9} /><List  />

function AddfilmTest({dataName}) {
  const [input, setInput]=useState({ } )
  
  console.log(input)
const handleSubmit =(e)=>{
  axios.post('http://localhost:3004/posts',input)
  .then((response)=>console.log(response))
    .catch((error)=>console.log(error));
   

  }
  

    return (
        <div className='addfilm'>
          <form onSubmit={handleSubmit}>
            <input type="text" name={dataName}  onChange={(e) => setInput({ ...input, dataName: e.target.value })}  placeholder={dataName} className='' />
            <button type='submit'>submit</button>
          </form>  
      </div>
    );
  }

  export default AddfilmTest;