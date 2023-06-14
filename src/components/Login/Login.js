import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Login.module.css';
import { useReducer } from 'react';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.payload, isValid: action.payload.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.payload, isValid: action.payload.trim().length > 8 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 8 };
    }
    return { value: '', isValid: false };
}

const Login = () => {

    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: undefined });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: undefined });

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

                <Button type="submit" className={classes.btn}>Login</Button>
            </form>
        </Card>
    );
}

export default Login;