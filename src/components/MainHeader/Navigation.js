import classes from './Navigation.module.css';
import Button from '../UI/Button';

const Navigation = (props) => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Button>Logout</Button>
                </li>
            </ul>

        </nav>
    );
}

export default Navigation;