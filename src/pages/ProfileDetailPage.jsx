import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

const ProfileDetailPage = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~skroot/cgt-390/public/fetch-data-with-id.php?id=${id}`)
            .then((res) => res.json())
            .then((data) => setProfile(data));
    }, [id]);

    return (
        <Wrapper>
            {!profile ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1>{profile.name}</h1>
                    <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
                    <p>{profile.bio}</p>
                    <img src={profile.image_url} alt={profile.name} />
                    <Link to='edit'>Edit Profile</Link>
                </>
            )}
        </Wrapper>
    );
}

export default ProfileDetailPage;