import Home from './page/home'
import Movies from './page/movies'
import Premium from './page/premium'
import Navbar from './component/navbar'
import Addfilm from './page/dashboard '
import Addfilmfb from '../src/component/FirebaseApp/firebaseAdmin'
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import {Listfilm} from './component/FirebaseApp/adminfilmlist'
import {Sidebar} from './component/FirebaseApp/adminfirebase'
import {FavFilmfb} from './component/FirebaseApp/favorit'
import {FavoritFilm} from './component/FirebaseApp/favbuttonfb'

function Compapp() {
    return (
            <Router>
                <div className='page'>
                    <div className='component'>
                        <Route  exact path='/' component={Navbar}/>
                        <Route  path='/movies' component={Navbar}/>
                        <Route  path='/premium' component={Navbar}/>
                        <Route  path='/adminfb-modifier' component={Sidebar}/>
                        <Route  path='/adminfb-ajouter' component={Sidebar}/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/movies' component={FavFilmfb}/>
                            <Route exact path='/premium' component={FavoritFilm}/> 
                            <Route exact path='/admin' component={Addfilm}/>
                            <Route exact path='/adminfb-modifier' component={Listfilm}/>
                            <Route exact path='/adminfb-ajouter' component={Addfilmfb}/>
                        </Switch>
                    </div>
                </div>
            </Router>  
    );
  }
  
  export default Compapp;