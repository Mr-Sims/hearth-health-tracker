import classes from './Modal.module.css';
import Card from "./Card";
import Button from './Button';

const Modal = (props) => {
    return (
        <>
        <div className={classes.backdrop} onClick={props.onClose}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onClose}>Okay</Button>
                </footer>
            </Card>
        </>
    );
}

export default Modal;
