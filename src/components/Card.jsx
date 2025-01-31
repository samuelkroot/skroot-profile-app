import styles from '../styles/card.module.css';
import PropTypes from 'prop-types';

const Card = ({img, name, title, email, animate, handleAnimate}) => {
    return (
        <div 
            className={`${styles["profile-card"]} ${animate ? styles['is-entering'] : ''}`}
            onAnimationEnd={handleAnimate}
        >
            <div className={styles["profile-card__image"]}>
                <img src={img} alt="profile picture"/>
            </div>
            <div className={styles["profile-card__content"]}>
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );
}
Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string.isRequired
}
export default Card;