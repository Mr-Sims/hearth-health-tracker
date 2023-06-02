import { useState } from "react";
import classes from "./PostForm.module.css";


const PostForm = ({ onCancel, onAddPost }) => {

    const [systolic, setSystolic] = useState('');
    const [diastolic, setDiastolic] = useState('');
    const [pulse, setPulse] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [feel, setFeel] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
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
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="systolic">Systolic</label>
                    <input
                        type="text"
                        id="systolic"
                        name="systolic"
                        required
                        placeholder="Write your systolic measurement"
                        value={systolic}
                        onChange={(e) => setSystolic(e.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="diastolic">Diastolic</label>
                    <input
                        type="text"
                        id="diastolic"
                        name="diastolic"
                        required
                        placeholder="Write your diastolic measurement"
                        value={diastolic}
                        onChange={(e) => setDiastolic(e.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="pulse">Pulse</label>
                    <input
                        type="text"
                        id="pulse"
                        name="pulse"
                        required
                        placeholder="Write your pulse measurement"
                        value={pulse}
                        onChange={e => setPulse(e.target.value)}
                    />
                </div>
                <div>
                    <p>When were the measurements taken?</p>
                    <div className={classes.control}>
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            required
                            value={time}
                            onChange={e => setTime(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="feel">How do you feel?</label>
                    <textarea
                        name="feel"
                        id="feel"
                        cols="30"
                        rows="3"
                        required
                        value={feel}
                        onChange={e => setFeel(e.target.value)}
                        placeholder="Please give a short recap of how you feel!"
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button type='button' onClick={onCancel} >Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default PostForm;