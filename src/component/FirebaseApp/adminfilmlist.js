import {GetFilmfb} from './postFilmFireBase'

export const Listfilm=()=>{

    return(
        <div className='admincardlist'>
            <GetFilmfb/>
        </div>
    )
}