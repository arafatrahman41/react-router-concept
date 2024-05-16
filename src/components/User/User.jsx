import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name, email, phone} = user;
    const userStyle = {
        border: '2px solid green',
        padding: 10,
        borderRadius: 10
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to ={`/user/${id}`}>
                <button>click me</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;