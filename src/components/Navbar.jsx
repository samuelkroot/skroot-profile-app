import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = ({mode, handleMode}) => {
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
                <li>
                    <button onClick={handleMode}>{mode}</button>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;