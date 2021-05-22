import Films from '../component/card'

function List() {
    return (
            <div className='listit'>
                <Films  n={11}/>
                <Films  n={16}/>
                <Films  n={14}/>
                <Films  n={25}/>
                <Films  n={15}/>
                <Films  n={13}/>
            </div>
    );
  }
  
  export default List;