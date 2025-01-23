import '../styles/card.css';
import PropTypes from 'prop-types';

const Card = ({img, name, title, email}) => {
    return (
        <div className="profile-card">
            <div className="profile-card__image">
                <img src={img} alt="profile picture"/>
            </div>
            <div className="profile-card__content">
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );
}
Card.PropTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string.isRequired
}
export default Card;