import conditionChecker from '../../utils/conditionChecker';
import './StatusPointer.css';


const StatusPointer = ({ systolic, diastolic }) => {

    let color = conditionChecker(systolic, diastolic)
    console.log(color)

    return (
        <div className={`dot ${color}`} />
    );
}

export default StatusPointer;

