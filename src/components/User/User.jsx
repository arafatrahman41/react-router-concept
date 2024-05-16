import PropTypes from 'prop-types';

const User = ({user}) => {
    const {name, email, phone} = user;
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
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;