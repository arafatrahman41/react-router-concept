import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="header">
                <p>My website</p>
                <Link to="/">Home</Link>
                <Link to="users">Users</Link>
                <Link to="about">About</Link>
                <Link to="/contact">Contact us</Link>
            </nav>
        </div>
    );
};

export default Header;