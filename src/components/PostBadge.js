// import classes from './PostBadge.module.css';
import './PostBadge.css';


const PostBadge = ({systolic, diastolic, pulse}) => {

    let color;

    if(systolic >= 180 || diastolic >= 120) {
        color = 'crisis';
    } else if (systolic >= 140 || diastolic >= 90) {
        color = 'hypertensionTwo';
    } else if ((systolic >= 130 && systolic < 139) ||(diastolic >= 80 && diastolic < 89)) {
        color = 'hypertensionOne';
    } else if ((systolic >= 120 && systolic < 129) && diastolic < 80) {
        color = 'elevated';
    } else if ((systolic > 90 && systolic < 120) && (diastolic > 60 && diastolic < 80)) {
        color = 'normal';
    } else if (systolic <= 90 && diastolic <= 60) {
        color = 'low';
    }
    console.log(color)


    return (
            <li className={`post ${color}`}>
                <div>
                    <p>Systolic {systolic} / Diastolic {diastolic}</p>
                    <p>Pulse - {pulse} beats per minute</p>
                </div>
                <div>
                    <p>Measurements taken on N/A</p>
                </div>
                {/* <div>
                    <p>{props.arrhythmia ? 'Irregular heartbeat' : 'Regular heartbeat'}</p>
                </div>
                <div>
                    <p>{props.feel}</p>
                </div> */}
            </li>
    );
}

export default PostBadge;