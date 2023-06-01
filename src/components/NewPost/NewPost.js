import { useState } from "react"
import PostForm from "./PostForm";

const NewPost = ({ onAddPost }) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleForm = () => {
        setIsEditing(state => !state);
        console.log('click')
    }

    const addPostHandler = (data) => {
        onAddPost({
            id: Math.random().toString(),
            ...data
        });
        toggleForm();
    }


    return (
        <div>
            {!isEditing && <button onClick={toggleForm}>Add New Measurement</button>}
            {isEditing && <PostForm onAddPost={addPostHandler} onCancel={toggleForm} />}
        </div>
    );
}

export default NewPost;