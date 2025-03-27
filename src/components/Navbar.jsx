import styles from '../styles/navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toggle } from '../redux/slices/modeSlice';

const Navbar = () => {
    const navigate = useNavigate();
    const { isLogin, logout } = useAuth();
    
    const mode = useSelector((state) => state.mode.mode);
    const dispatch = useDispatch();

    const toggleMode = () => {
        dispatch(toggle());
    }

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
