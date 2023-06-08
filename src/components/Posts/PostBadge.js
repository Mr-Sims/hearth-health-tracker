import classes from './PostBadge.module.css';
import PostDateTime from './PostDateTime';
import StatusBar from './StatusBar';


const PostBadge = ({systolic, diastolic, pulse, date, time, onClick}) => {
    
    return (
            <li className={classes.post} onClick={onClick}>
               
                <PostDateTime time={time} date={date}/>
                <div>
                    <p>{systolic} / {diastolic}</p>
                    <p>{pulse} bpm</p>
                </div>
                <StatusBar systolic={systolic} diastolic={diastolic}/>
            </li>
    );
}

export default PostBadge;