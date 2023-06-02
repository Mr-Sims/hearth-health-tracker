const PostDateTime = ({date, time}) => {
    const postYear = new Date(date).getFullYear();
    const postMonth = new Date(date).toLocaleString('en-US', { month: 'short' });
    const postDay = new Date(date).toLocaleString('en-US', { day: '2-digit' });
    
    return (
        <div>
            <p>{postDay} {postMonth} {postYear} at {time}</p>
        </div>
    )
}

export default PostDateTime;