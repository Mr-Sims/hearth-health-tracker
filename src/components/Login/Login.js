import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Login.module.css';
import { validateEmail, validatePassword } from '../../utils/loginValidator';
import { useEffect, useReducer, useState } from 'react';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.payload, isValid: validateEmail(action.payload) };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: validateEmail(state.value) };
    }
    return { value: '', isValid: false };
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.payload, isValid: validatePassword(action.payload.trim()) };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: validatePassword(state.value.trim()) };
    }
    return { value: '', isValid: false };
}

const Login = () => {

    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: undefined });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: undefined });

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log(emailState.isValid)
            console.log(passwordState.isValid)

            setFormIsValid(
                emailState.isValid && passwordState.isValid
            );
        }, 1000);
        return () => {
            clearTimeout(identifier);
        }

    }, [emailState.isValid, passwordState.isValid]);

    const emailChangeHandler = (e) => {
        dispatchEmail({ type: 'USER_INPUT', payload: e.target.value });
    }

    const emailValidateHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    }

    const passwordChangeHandler = (e) => {
        dispatchPassword({ type: 'USER_INPUT', payload: e.target.value });
    }

    const passwordValidateHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(emailState, passwordState);
    }


    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id='email'
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={emailValidateHandler}
                    />

                </div>
                {emailState.isValid === false && <div
                    className={classes.control}>
                    <p>This is not a valid E-mail address</p>
                </div>}
                <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={passwordValidateHandler}
                    />

                </div>

                {passwordState.isValid === false && <div
                    className={classes.control}>
                    <p>Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</p>
                </div>}

                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>Login</Button>
                </div>
            </form>
        </Card>
    );
}

export default Login;