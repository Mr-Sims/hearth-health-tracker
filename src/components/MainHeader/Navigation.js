import classes from './Navigation.module.css';
import Button from '../UI/Button';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Navigation = (props) => {
    const ctx = useContext(AuthContext);
    
    const logoutHandler = () => {
        ctx.onLogout()
    }
    
    return (
        <nav className={classes.nav}>
            <ul>
                {ctx.isLoggedIn && <li>
                    <Button onClick={logoutHandler}>Logout</Button>
                </li>
                }            </ul>

        </nav>
    );
}

export default Navigation;