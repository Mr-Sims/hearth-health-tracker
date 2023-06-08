import classes from './PostDateTime.module.css';

const PostDateTime = ({date, time}) => {
    const postYear = new Date(date).getFullYear();
    const postMonth = new Date(date).toLocaleString('en-US', { month: 'short' });
    const postDay = new Date(date).toLocaleString('en-US', { day: '2-digit' });
    
    return (
        <div className={classes.dateTime}>
            <p>{postDay} {postMonth} {postYear}</p>
            <p>{time}</p>
        </div>
    )
}

export default PostDateTime;