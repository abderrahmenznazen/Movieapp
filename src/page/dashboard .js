import Test from '../component/saerchapp'
import List from './admin'
import Input from '../component/addfilm'
import React ,{  useState } from "react";


//<Test x={4} n={9} /><List  />

function Addfilm() {
  const [input, setInput]=useState({year:'',plot:'',director:'',actors:'',image:'',title:''})
const handleChange=(e)=>{
  setInput({
[e.target.name]:e.target.value
  })
  console.log('input',input)
}
    return (
        <div className='addfilm'> 

            <input type="text" name='title' onChange={handleChange}  placeholder="title" className='' />
            <input type="text" name='year'onChange={handleChange}  placeholder="year" className='' />
            <input type="text" name='plot' onChange={handleChange} placeholder="plot" className='' />
            <input type="text" name='director'onChange={handleChange}  placeholder="director" className='' />
            <input type="text" name='actors' onChange={handleChange} placeholder="actors" className='' />
            <input type="text" name='image'onChange={handleChange}  placeholder="image" className='' />
         
            
      </div>
    );
  }

  export default Addfilm;