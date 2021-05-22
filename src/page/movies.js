import Films from '../component/card'
import Present from '../component/present'
import Dashboard from '../component/offres'
import Test from '../component/saerchapp'
import Browser from '../component/filmdown'




function Movies() {
    return (
        <div className='moviesPage'>
            <Test className='searchin'/>
            <Present className='acceuil3' n={5}/> 
            <body className='body'>
            <div className='offrlink'>
                <Dashboard />
            </div>
            <div className='listit'>
                <Films  n={11}/>
                <Films  n={16}/>
                <Films  n={14}/>
                <Films  n={25}/>
                <Films  n={15}/>
                <Films  n={13}/>
            </div>
            <Browser/> 
            </body>           
      </div>
    );
  }
  
  export default Movies;