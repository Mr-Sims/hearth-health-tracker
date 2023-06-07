import { useState } from "react";
import "./PostForm.css";


const PostForm = ({ onCancel, onAddPost }) => {

    const [systolic, setSystolic] = useState('');
    const [systolicIsValid, setSystolicIsvalid] = useState(true);

    const [diastolic, setDiastolic] = useState('');
    const [diastolicIsValid, setDiastolicIsValid] = useState(true);

    const [pulse, setPulse] = useState('');
    const [pulseIsValid, setPulseIsValid] = useState(true);

    const [date, setDate] = useState('');
    const [dateIsValid, setDateIsValid] = useState(true);

    const [time, setTime] = useState('');
    const [timeIsValid, setTimeIsValid] = useState(true);

    const [feel, setFeel] = useState('');
    const [feelIsValid, setFeelIsValid] = useState(true);

    const validations = {
        systolic: [systolic, setSystolicIsvalid],
        diastolic: [diastolic, setDiastolicIsValid],
        pulse: [pulse, setPulseIsValid],
        date: [date, setDateIsValid],
        time: [time, setTimeIsValid],
        feel: [feel, setFeelIsValid]
    }


    // SYSTOLIC controls
    const systolicInputChangeHandler = (e) => {
        setSystolic(e.target.value);
        if (e.target.value.trim().length !== 0) {
            setSystolicIsvalid(true);
        }
    }
    const systolicBlurChangeHandler = () => {
        if (systolic.trim().length === 0) {
            setSystolicIsvalid(false)
        }
    }

    //DIASTOLIC controls
    const diastolicInputChangeHandler = (e) => {
        setDiastolic(e.target.value);
        if (e.target.value.trim().lenght !== 0) {
            setDiastolicIsValid(true);
        }
    }
    const diastolicBlurChangeHandler = (e) => {
        if (diastolic.trim().length === 0) {
            setDiastolicIsValid(false);
        }
    }
    
    // PULSE controls
    const pulseInputChangeHandler = (e) => {
        setPulse(e.target.value);
        if (e.target.value.trim().lenght !== 0) {
            setPulseIsValid(true);
        }
    }
    const pulseBlurChangeHandler = (e) => {
        if (diastolic.trim().length === 0) {
            setPulseIsValid(false);
        }
    }

    //DATE controls
    const dateInputChangeHandler = (e) => {
        setDate(e.target.value);
        if (e.target.value.trim().lenght !== 0) {
            setDateIsValid(true);
        }
    }
    const dateBlurChangeHandler = (e) => {
        if (diastolic.trim().length === 0) {
            setDateIsValid(false);
        }
    }

    // TIME controls
    const timeInputChangeHandler = (e) => {
        setTime(e.target.value);
        if (e.target.value.trim().lenght !== 0) {
            setTimeIsValid(true);
        }
    }
    const timeBlurChangeHandler = (e) => {
        if (diastolic.trim().length === 0) {
            setTimeIsValid(false);
        }
    }

    //FEEL controls
    const feelInputChangeHandler = (e) => {
        setFeel(e.target.value);
        if (e.target.value.trim().lenght !== 0) {
            setFeelIsValid(true);
        }
    }
    const feelBlurChangeHandler = (e) => {
        if (diastolic.trim().length === 0) {
            setFeelIsValid(false);
        }
    }


    const submitHandler = (e) => {
        e.preventDefault();

        for (let item in validations) {
            if (validations[item][0].trim().length === 0) {
                validations[item][1](false)
            }
        }

        if (systolic.trim().length === 0 ||
            diastolic.trim().length === 0 ||
            pulse.trim().length === 0 ||
            date.trim().length === 0 ||
            time.trim().length === 0 ||
            feel.trim().length === 0
        ) {
            return;
        }

        onAddPost({
            systolic,
            diastolic,
            pulse,
            date: new Date(date),
            time: time.split(' '),
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='controls'>
                <div className={`control ${!systolicIsValid ? 'invalid' : ''}`}>
                    <label htmlFor="systolic">Systolic</label>
                    <input

                        type="text"
                        id="systolic"
                        name="systolic"
                        placeholder="Write your systolic measurement"
                        value={systolic}
                        onChange={systolicInputChangeHandler}
                        onBlur={systolicBlurChangeHandler}
                    />
                </div>
                <div className={`control ${!diastolicIsValid ? 'invalid' : ''}`}>
                    <label htmlFor="diastolic">Diastolic</label>
                    <input
                        type="text"
                        id="diastolic"
                        name="diastolic"
                        placeholder="Write your diastolic measurement"
                        value={diastolic}
                        onChange={diastolicInputChangeHandler}
                        onBlur={diastolicBlurChangeHandler}
/>
                </div>
                <div className={`control ${!pulseIsValid ? 'invalid' : ''}`}>
                    <label htmlFor="pulse">Pulse</label>
                    <input
                        type="text"
                        id="pulse"
                        name="pulse"
                        placeholder="Write your pulse measurement"
                        value={pulse}
                        onChange={pulseInputChangeHandler}
                        onBlur={pulseBlurChangeHandler}
                    />
                </div>
                <div>
                    <p>When were the measurements taken?</p>
                    <div className={`control ${!dateIsValid ? 'invalid' : ''}`}>
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={dateInputChangeHandler}
                            onBlur={dateBlurChangeHandler}
                        />
                    </div>
                    <div className={`control ${!timeIsValid ? 'invalid' : ''}`}>
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={time}
                            onChange={timeInputChangeHandler}
                            onBlur={timeBlurChangeHandler}
                        />
                    </div>
                </div>
                <div className={`control ${!feelIsValid ? 'invalid' : ''}`}>
                    <label htmlFor="feel">How do you feel?</label>
                    <textarea
                        name="feel"
                        id="feel"
                        cols="30"
                        rows="3"
                        value={feel}
                        onChange={feelInputChangeHandler}
                        onBlur={feelBlurChangeHandler}
                        placeholder="Please give a short recap of how you feel!"
                    ></textarea>
                </div>
                <div className='actions'>
                    <button type='button' onClick={onCancel} >Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default PostForm;