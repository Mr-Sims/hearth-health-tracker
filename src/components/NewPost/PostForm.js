import { useState, useRef } from "react";
import classes from "./PostForm.module.css";
import Button from "../UI/Button";


const PostForm = ({ onCancel, onAddPost }) => {
    const systolicInputRef = useRef();
    const diastolicInputRef = useRef();
    const pulseInputRef = useRef();
    const dateInputRef = useRef();
    const timeInputRef = useRef();
    // const feelInputRef = useRef()

    const [systolicIsValid, setSystolicIsvalid] = useState(true);
    const [diastolicIsValid, setDiastolicIsValid] = useState(true);
    const [pulseIsValid, setPulseIsValid] = useState(true);
    const [dateIsValid, setDateIsValid] = useState(true);
    const [timeIsValid, setTimeIsValid] = useState(true);
    // const [feelIsValid, setFeelIsValid] = useState(true);

    const systolicBlurChangeHandler = (e) => {
        e.target.value.trim().length === 0 ? setSystolicIsvalid(false) : setSystolicIsvalid(true);
    }

    const diastolicBlurChangeHandler = (e) => {
        e.target.value.trim().length === 0 ? setDiastolicIsValid(false) : setDiastolicIsValid(true)
    }

    const pulseBlurChangeHandler = (e) => {
        e.target.value.trim().length === 0 ? setPulseIsValid(false) : setPulseIsValid(true);
    }

    const dateBlurChangeHandler = (e) => {
        e.target.value.trim().length === 0 ? setDateIsValid(false) : setDateIsValid(true);
    }

    const timeBlurChangeHandler = (e) => {
        e.target.value.trim().length === 0 ? setTimeIsValid(false) : setTimeIsValid(true);
    }

    // const feelBlurChangeHandler = (e) => {
    //     e.target.value.trim().length === 0 ? setFeelIsValid(false) : setFeelIsValid(true);
    // }

    const submitHandler = (e) => {
        e.preventDefault();

        const validations = {
            systolic: [systolicInputRef.current.value, setSystolicIsvalid],
            diastolic: [diastolicInputRef.current.value, setDiastolicIsValid],
            pulse: [pulseInputRef.current.value, setPulseIsValid],
            date: [dateInputRef.current.value, setDateIsValid],
            time: [timeInputRef.current.value, setTimeIsValid],
            // feel: [feelInputRef.current.value, setFeelIsValid]
        }

        let falseData = false;
        for (let item in validations) {
            if (validations[item][0].trim().length === 0) {
                validations[item][1](false);
                falseData = true;
            }
        }
        if (falseData) {
            return
        }

        onAddPost({
            systolic: +systolicInputRef.current.value,
            diastolic: +diastolicInputRef.current.value,
            pulse: +pulseInputRef.current.value,
            date: new Date(dateInputRef.current.value),
            time: timeInputRef.current.value.toString(),
            // feel: feelInputRef.current.value
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={`${classes.control} ${!systolicIsValid && classes.invalid}`}>
                    <label htmlFor="systolic">Systolic</label>
                    <input
                        type="number"
                        id="systolic"
                        name="systolic"
                        min="60"
                        max="200"
                        placeholder="Write your systolic measurement"
                        onBlur={systolicBlurChangeHandler}
                        ref={systolicInputRef}
                    />
                </div>
                <div className={`${classes.control} ${!diastolicIsValid && classes.invalid}`}>
                    <label htmlFor="diastolic">Diastolic</label>
                    <input
                        type="number"
                        id="diastolic"
                        name="diastolic"
                        min="40"
                        max="120"
                        placeholder="Write your diastolic measurement"
                        onBlur={diastolicBlurChangeHandler}
                        ref={diastolicInputRef}
                    />
                </div>
                <div className={`${classes.control} ${!pulseIsValid && classes.invalid}`}>
                    <label htmlFor="pulse">Pulse</label>
                    <input
                        type="number"
                        id="pulse"
                        name="pulse"
                        min="30"
                        max="200"
                        placeholder="Write your pulse measurement"
                        onBlur={pulseBlurChangeHandler}
                        ref={pulseInputRef}
                    />
                </div>
                <div>
                    <p>When were the measurements taken?</p>
                    <div className={`${classes.control} ${!dateIsValid && classes.invalid}`}>
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            onBlur={dateBlurChangeHandler}
                            ref={dateInputRef}
                        />
                    </div>
                    <div className={`${classes.control} ${!timeIsValid && classes.invalid}`}>
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            onBlur={timeBlurChangeHandler}
                            ref={timeInputRef}
                        />
                    </div>
                </div>
                {/* <div className={`${classes.control} ${!feelIsValid && classes.invalid}`}>
                    <label htmlFor="feel">How do you feel?</label>
                    <textarea
                        name="feel"
                        id="feel"
                        cols="30"
                        rows="3"
                        onBlur={feelBlurChangeHandler}
                        placeholder="Please give a short recap of how you feel!"
                        ref={feelInputRef}
                    ></textarea>
                </div> */}
                <div className='actions'>
                    <Button type='button' onClick={onCancel} >Cancel</Button>
                    <Button type="submit">Submit</Button>
                </div>
            </div>
        </form>
    );
}

export default PostForm;