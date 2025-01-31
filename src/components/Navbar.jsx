import styles from '../styles/navbar.module.css';

const Navbar = ({mode, handleMode}) => {
    return (
        <nav className={`${styles['navbar']}`}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Profiles</a>
                </li>
                <li>
                    <button onClick={handleMode}>{mode}</button>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;