import Home from './page/home'
import Movies from './page/movies'
import Premium from './page/premium'
import Navbar from './component/navbar'
import Addfilm from './page/dashboard '
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'

function Compapp() {
    return (
            <Router>
                <div className='page'>
                    <div className='component'>
                        <Route  exact path='/' component={Navbar}/>
                        <Route  path='/movies' component={Navbar}/>
                        <Route  path='/premium' component={Navbar}/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/movies' component={Movies}/>
                            <Route exact path='/premium' component={Premium}/> 
                            <Route exact path='/admin' component={Addfilm}/>
                        </Switch>
                    </div>
                </div>
            </Router>  
    );
  }
  
  export default Compapp;