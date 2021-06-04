import {Link} from "react-router-dom"



export const Sidebar =()=>{



  return (
            <div id="mySidebar" className="sidebar">
                <Link to="/adminfb-modifier"><a >Modifier Films</a></Link>
                <Link to="/adminfb-ajouter"><a >Ajouter Films</a></Link>
                <Link to="/"><a >Comme Utilisateur</a></Link>
            </div>
  )
}