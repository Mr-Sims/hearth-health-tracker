import conditionChecker from '../../utils/conditionChecker';
import classes from './PostBadge.module.css';
import PostDateTime from './PostDateTime';
import StatusPointer from './StatusPointer';


const PostBadge = ({systolic, diastolic, pulse, date, time, onClick}) => {

    let color = conditionChecker(systolic, diastolic)
    console.log(color)

    
    return (
            <li className={classes.post} onClick={onClick}>
                <div>
                    <p>{systolic} / {diastolic}</p>
                    <p>{pulse} bpm</p>
                </div>
                <PostDateTime time={time} date={date}/>
                <StatusPointer systolic={systolic} diastolic={diastolic}/>
            </li>
    );
}

export default PostBadge;