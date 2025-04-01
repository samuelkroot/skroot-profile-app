import styles from '../styles/navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toggle } from '../redux/slices/modeSlice';
import { logout } from '../redux/slices/authSlice';

const Navbar = () => {
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.auth.isLogin);
    
    const mode = useSelector((state) => state.mode.mode);
    const dispatch = useDispatch();

    const toggleMode = () => {
        dispatch(toggle());
    }

    const handleLoginClick = () => {
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
                    <button onClick={dispatch(logout())}>Logout</button>
                ) : (
                    <button onClick={handleLoginClick}>Login/Register</button>
                )}
            </ul>
        </nav>
    );
};
export default Navbar;
