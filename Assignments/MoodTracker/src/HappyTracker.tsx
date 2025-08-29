import {type FC} from 'react';
import { useSelector } from 'react-redux';
import { happyCountSelector } from './selectors';

type HappyTrackerProps={

}
const HappyTracker:FC<HappyTrackerProps>=()=>{
    const happyCount=useSelector(happyCountSelector);
    return(
        <div className='bg-amber-400 px-8 py-2 m-4'>
            <h3>You were happy {happyCount} times</h3>
        </div>
    );
}
export default HappyTracker;