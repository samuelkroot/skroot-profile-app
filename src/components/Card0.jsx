import img from '../assets/react.svg';
import '../styles/card.css';

const Card0 = () => {
    const name = 'Joe Public';
    const title = 'Web Developer';
    const email = 'jpublic@purdue.edu';

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
export default Card0;