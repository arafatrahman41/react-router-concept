import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title} = post;

    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div style={{border: '2px solid skyblue',
            padding: 10,
            borderRadius: 10
        }}>
            <h3>Id: {id}</h3>
            <h4>Title: {title} </h4>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleShowDetail} >Click To See Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;