import './navbar.css'
import {Link} from "react-router-dom"

function Navbar (){ 
    return (
        <div className='navbar'>
            <Link to="/"><img className='logo' src='image/movup.png'/></Link>
            <div className='search'>
            </div>
            <div className='lien'>
                <Link to="/movies"><button className='inscrit' ><strong>Movies</strong></button></Link>
                <Link to="/premium"><button className='inscrit'><strong>Premium</strong></button></Link>
                <Link to="/favorit"><button className='inscrit'><img src='image/favoriteW.svg'/></button></Link>
                <Link to="/inscription"><button className='inscrit'><img src='image/loginW.svg'/></button></Link>
            </div>        
        </div>
    )
}

export default Navbar