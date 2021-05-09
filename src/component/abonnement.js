import './abonnement.css'
{/**  */}
function Item (props){
    return (
        <div className='Item'>
            <div className='top' >
                <h1>{props.ctitle}</h1>
                <img id='#' src={props.cicon}/>
                <h2>{props.cgenres}</h2>
                
            </div>
                <img className='imgf' src={props.cimg}/> 
                <img className='play' href='' src={props.cplay}/>
            <div className='buttom'>          
                <h3>{props.cyear}</h3>
                <img src={props.cstar} />
                <h4> {props.cruntime}</h4>
            </div> 
            <div className='parg'>
                <p><strong>{props.inscrit}</strong></p>
                <h5>{props.forfait}</h5>
                <option value={props.valio}></option>
            </div>
        </div>
    )
}
export default Item