import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

const ProfileEditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~skroot/cgt-390/public/fetch-data-with-id.php?id=${id}`)
            .then((res) => res.json())
            .then((data) => setProfile(data));
    }, [id]);

    const handleDelete = () => {
        if (window.confirm('Delete your profile?')) {
            fetch(`https://web.ics.purdue.edu/~skroot/cgt-390/public/delete-profile.php?id=${id}`, {
                method: 'delete',
                credentials: 'include'
            })
                .then((res) => res.json())
                .then(data => {
                    if (data.message === 'success') {
                        alert('Profile deleted!');
                        navigate('/');
                    } else {
                        alert('Failed to delete profile.');
                    }
                });
        }
    }

    return (
        <Wrapper>
            <h1>Edit Profile</h1>
            <button onClick={handleDelete}>Delete Profile</button>
        </Wrapper>
    );
}

export default ProfileEditPage;