import conditionChecker from '../../utils/conditionChecker';
import './PostBadge.css';


const PostBadge = ({systolic, diastolic, pulse, date, time}) => {

    let color = conditionChecker(systolic, diastolic)
    console.log(color)



    const postYear = new Date(date).getFullYear();
    const postMonth = new Date(date).toLocaleString('en-US', { month: 'short' });
    const postDay = new Date(date).toLocaleString('en-US', { day: '2-digit' });

    return (
            <li className={`post ${color}`}>
                <div>
                    <p>Systolic {systolic} / Diastolic {diastolic}</p>
                    <p>Pulse - {pulse} beats per minute</p>
                </div>
                <div>
                    <p>Measurements taken on:</p>
                    <p>Date: {postDay} {postMonth} {postYear}</p>
                    <p>Time: {time}</p>
                </div>
                
            </li>
    );
}

export default PostBadge;