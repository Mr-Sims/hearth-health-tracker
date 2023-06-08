import { useState } from "react"
import PostForm from "./PostForm";
import classes from "./NewPost.module.css";
import Button from "../UI/Button";

const NewPost = ({ onAddPost }) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleForm = () => {
        setIsEditing(state => !state);
    }

    const addPostHandler = (data) => {
        onAddPost({
            id: Math.random().toString(),
            ...data
        });
        toggleForm();
    }


    return (
        <div className={classes.new}>
            {!isEditing && <Button onClick={toggleForm}>Add New Measurement</Button>}
            {isEditing && <PostForm onAddPost={addPostHandler} onCancel={toggleForm} />}
        </div>
    );
}

export default NewPost;