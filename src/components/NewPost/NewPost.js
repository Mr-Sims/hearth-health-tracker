import { useState } from "react"
import PostForm from "./PostForm";
import classes from "./NewPost.module.css";

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
            {!isEditing && <button onClick={toggleForm}>Add New Measurement</button>}
            {isEditing && <PostForm onAddPost={addPostHandler} onCancel={toggleForm} />}
        </div>
    );
}

export default NewPost;