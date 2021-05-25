import Films from '../component/card'
import Present from '../component/present'
import List from '../component/list'
import Test from '../component/saerchapp'
import Browser from '../component/filmdown'


function Premium() {
    return (
        <div className='moviesPage'>
            <Test className='searchin' />
            <Present className='acceuil3' n={6}/> 
            <body className='body'>
            <div className='categorie'>
              <Films  n={20}/>
              <Films  n={25}/>
              <Films  n={30}/>
              <Films  n={29}/>
            </div>
            <List/>
            <Browser/> 
            
            </body>           
      </div>
    );
  }
  
  export default Premium;