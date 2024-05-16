import { NavLink } from 'react-router-dom';
// Link 
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="header">
                <p>My website</p>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;