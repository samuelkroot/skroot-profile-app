import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import ModeContext from '../contexts/ModeContext';
import AuthContext from '../contexts/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { mode, toggleMode } = useContext(ModeContext);
    const { isLogin, logout } = useContext(AuthContext);

    const handleLoginRedirect = () => {
        navigate('/login');
    }

    return (
        <nav className={`${styles['navbar']}`}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/add-profile'>Add Profile</Link>
                </li>
                <button onClick={toggleMode}>
                    {mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </button>
                {isLogin ? (
                    <button onClick={logout()}>Logout</button>
                ) : (
                    <Link to='/login'>Login/Register</Link>
                )}
            </ul>
        </nav>
    );
};
export default Navbar;
