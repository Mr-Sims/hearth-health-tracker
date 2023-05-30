import PostBadge from "./PostBadge";

import classes from './PostList.module.css'


const DUMMY_POSTS = [
    {
        id: Math.random(),
        systolic: 118,
        diastolic: 75,
        pulse: 55,
        time: new Date(),
        arrhythmia: true,
        feel: 'I feel fine!'
    },
    {
        id: Math.random(),
        systolic: 150,
        diastolic: 90,
        pulse: 90,
        time: new Date(),
        arrhythmia: true,
        feel: 'I feel stressed.'
    },
    {
        id: Math.random(),
        systolic: 90,
        diastolic: 60,
        pulse: 75,
        time: new Date(),
        arrhythmia: true,
        feel: 'I feel like I`m going to faint any minute now!'
    },
]


const PostList = () => {
    
    return (
        <ul className={classes.list}>
            {DUMMY_POSTS.map(p => ( 
                    <PostBadge
                        key={p.id}
                        systolic={p.systolic}
                        diastolic={p.diastolic}
                        pulse={p.pulse}
                        time={p.time}
                        arrhythmia={p.arrhythmia}
                        feel={p.feel}
                    />
                )
            )}
        </ul>
    );
}

export default PostList;