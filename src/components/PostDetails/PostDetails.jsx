import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const {id, title, body} = post;
    console.log(postId);

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>Post Details about: {id}</h3>
            <h4>Title: {title} </h4>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;