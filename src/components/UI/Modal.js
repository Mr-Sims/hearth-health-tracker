import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Card from "./Card";
import Button from './Button';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = (props) => {
    return <Card className={classes.modal}>
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
}


const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} onClose={props.onClose} />,
                document.getElementById('overlay-root'))}
        </>
    );
}

export default Modal;
