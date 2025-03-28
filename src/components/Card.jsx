import { memo } from 'react';
import styles from '../styles/card.module.css';
import PropTypes from 'prop-types';

const Card = memo(({image_url, name, title, email}) => {
    return (
        <div className={`${styles["profile-card"]}`}>
            <div className={styles["profile-card__image"]}>
                <img src={image_url} alt="profile picture"/>
            </div>
            <div className={styles["profile-card__content"]}>
                <p>{name}</p>
                <p>{title}</p>
                <p>{email}</p>
            </div>
        </div>
    );
});
Card.propTypes = {
    image_url: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string.isRequired
}
export default Card;