import Home from './page/home'
import Movies from './page/movies'
import Premium from './page/premium'
import Navbar from './component/navbar'
import Addfilm from './page/dashboard '
import Addfilmfb from '../src/component/FirebaseApp/firebaseAdmin'
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import {Listfilm} from './component/FirebaseApp/adminfilmlist'
import {Sidebar} from './component/FirebaseApp/adminfirebase'
import {ListMovies} from './component/FirebaseApp/moviesPage'
import {FavFilmfb} from './component/FirebaseApp/favorit'
import {ListFavorit} from './component/FirebaseApp/favoritpage'
import {Searchapp} from './component/FirebaseApp/searchappfb'


function Compapp() {
    return (
            <Router>
                <div className='page'>
                    <div className='component'>
                        <Route  exact path='/home' component={Navbar}/>
                        <Route  path='/movies' component={Navbar}/>
                        <Route  path='/prem' component={Navbar}/>
                        <Route  path='/favorit' component={Navbar}/>
                        <Route  path='/adminfb-modifier' component={Sidebar}/>
                        <Route  path='/adminfb-ajouter' component={Sidebar}/>
                        <Switch>
                            <Route exact path='/home' component={Home}/>
                            <Route exact path='/movies' component={ListMovies}/>
                            <Route exact path='/premium' component={Searchapp}/>
                            <Route exact path='/favorit' component={ListFavorit}/> 
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