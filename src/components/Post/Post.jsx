import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div style={{border: '2px solid skyblue',
            padding: 10,
            borderRadius: 10
        }}>
            <h3>Id: {id}</h3>
            <h4>Title: {title} </h4>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;