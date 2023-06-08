import conditionChecker from '../../utils/conditionChecker';
import classes from './StatusBar.module.css';


const StatusBar = ({ systolic, diastolic }) => {

    let color = conditionChecker(systolic, diastolic)

    return (
        <div className={classes['chart-bar']}>
            <div className={classes['chart-bar__inner']}>
                <div className={`${classes['chart-bar__fill']} ${classes[color]}`}></div>
            </div>
        </div>
    );
}

export default StatusBar;

