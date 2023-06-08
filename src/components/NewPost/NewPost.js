import { useState } from "react"
import PostForm from "./PostForm";
import classes from "./NewPost.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import modalMessages from "../../utils/modalMessages";

const NewPost = ({ onAddPost }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [modalData, setModalData] = useState(null);

    const toggleForm = () => {
        setIsEditing(state => !state);
    }

    const addPostHandler = (data) => {
        if (+data.systolic < +data.diastolic) {
            setModalData({title: 'Data input incorrect', message: 'Your systolic measurement cannot be higher than your diastolic measurement. Please take another measurement of your blood pressure!'})
            return
        }
        onAddPost({
            id: Math.random().toString(),
            ...data
        });
        
        setModalData(modalMessages(+data.systolic, +data.diastolic))
        toggleForm();
    }

    const closeModalHandler = () => {
        setModalData(null)
    }


    return (
        <>
           {modalData && <Modal title={modalData.title} message={modalData.message} onClose={closeModalHandler} />}
            <div className={classes.new}>
                {!isEditing && <Button onClick={toggleForm}>Add New Measurement</Button>}
                {isEditing && <PostForm onAddPost={addPostHandler} onCancel={toggleForm} />}
            </div>
        </>
    );
}

export default NewPost;