import Test from '../component/saerchapp'
import List from './admin'

function Addfilm() {
    return (
        <div className='addfilm'> 
            <Test  />
            <input type="text" placeholder="title" className=''/>
            <input type="text" placeholder="year" className=''/>
            <input type="text" placeholder="plot" className=''/>
            <input type="text" placeholder="director" className=''/>
            <input type="text" placeholder="actors" className=''/>
            <input type="file" placeholder="image" className=''/>
            <input type="text" placeholder="title" className=''/>
            <List  />
      </div>
    );
  }

  export default Addfilm;