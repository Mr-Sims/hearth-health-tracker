import PostBadge from "./PostBadge";

import classes from './PostList.module.css'





const PostList = ({posts}) => {
    
    return (
        <ul className={classes.list}>
            {posts.map(p => ( 
                    <PostBadge
                        key={p.id}
                        systolic={p.systolic}
                        diastolic={p.diastolic}
                        pulse={p.pulse}
                        date={p.date}
                        time={p.time}
                        feel={p.feel}
                    />
                )
            )}
        </ul>
    );
}

export default PostList;