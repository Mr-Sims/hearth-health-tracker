import NewPost from "../NewPost/NewPost";
import PostList from "./PostList";
import { useState } from "react";
import classes from './Posts.module.css'

const DUMMY_POSTS = [
    {
        id: Math.random().toString(),
        systolic: 118,
        diastolic: 75,
        pulse: 55,
        date: new Date(2023, 0, 1),
        time: '18:35',
        feel: 'I feel fine!'
    },
    {
        id: Math.random().toString(),
        systolic: 150,
        diastolic: 90,
        pulse: 90,
        date: new Date(2022, 0, 5),
        time: '18:35',
        feel: 'I feel stressed.'
    },
    {
        id: Math.random().toString(),
        systolic: 90,
        diastolic: 60,
        pulse: 75,
        date: new Date(),
        time: '18:35',
        feel: 'I feel like I`m going to faint any minute now!'
    },
    {
        id: Math.random().toString(),
        systolic: 128,
        diastolic: 81,
        pulse: 69,
        date: new Date(),
        time: '18:35',
        feel: 'I generally feel fine.'
    },
]

const Posts = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS)

    const addPostHandler = (data) => {
        setPosts(state => [data, ...state]);
        // console.log(data)
    } 

    return (
        <div className={classes.posts}>
            <NewPost  onAddPost={addPostHandler}/>
            <PostList posts={posts} />
        </div>
    );
}

export default Posts;