import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import ModeContext from '../contexts/ModeContext';

const Navbar = () => {
    const { mode, toggleMode } = useContext(ModeContext);

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
                    {mode === 'dark' ? "Dark Mode" : "Light Mode"}
                </button>
            </ul>
        </nav>
    );
}
export default Navbar;