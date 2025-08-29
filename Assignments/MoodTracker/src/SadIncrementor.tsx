import {type FC} from 'react';
import { useDispatch } from 'react-redux';
import { sadButtonClicked } from './actions';

type SadIncrementorProps={}
const SadIncrementor:FC<SadIncrementorProps>=()=>{
    const dispatch=useDispatch();
    function increment(){
        dispatch(sadButtonClicked);
    }
    return(
        <div className='m-4 font-bold'>
            <h3>Are you sad?</h3>
            <button className='bg-blue-500 p-3' onClick={increment}>Yes</button>
        </div>
    );
}
export default SadIncrementor;