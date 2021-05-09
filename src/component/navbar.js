import './navbar.css'
import Test from './saerchapp'

function Navbar (){
    return (
        <div className='navbar'>
            <img className='logo' src='image/movup.png'/>
            <div className='search'>
            </div>
            <div className='lien'> 
                <button className='inscrit'><strong>Movies</strong></button>
                <button className='inscrit'><img src='image/favoriteW.svg'/></button>
                <button className='inscrit'><img src='image/loginW.svg'/></button>
            </div>        
        </div>
    )
}

export default Navbar