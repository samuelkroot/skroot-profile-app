import img from '../assets/react.svg';

const Card1 = () => {
    const name = 'Jane Public';
    const title = 'Software Developer';
    const email = 'jjpublic@purdue.edu';

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
export default Card1;