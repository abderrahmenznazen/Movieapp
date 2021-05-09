import Navbar from './component/navbar'
import Films from './component/card'
import Present from './component/present'
import Dashboard from './component/offres'
import Test from './component/saerchapp'
import Browser from './component/filmdown'

function Compapp() {
    return (
      <div >
          <Navbar />
          <Test className='searchin'/>
          <Present className='acceuil2' n={1}/>
          <div className='offrlink'><Dashboard /></div>
          <div className='categorie'>
              <Films  n={1}/>
              <Films  n={3}/>
              <Films  n={4}/>
              <Films  n={5}/>
          </div>
          <div className='listit'>
              <Films className=''  n={11}/>
              <Films  n={16}/>
              <Films  n={14}/>
              <Films  n={25}/>
              <Films  n={15}/>
              <Films  n={13}/>
          </div>
          <Browser/>
      </div>
    );
  }
  
  export default Compapp;