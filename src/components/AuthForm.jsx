import styles from '../styles/profileform.module.css';
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const AuthForm = ({ isRegisterPage = false }) => {
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const usernameRef = useRef(null);
    useLayoutEffect(() => {
        usernameRef.current.focus();
    }, []);

    const [data, setData] = useState({ username: '', password: '', email: '' });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.target);
        formData.append('action', isRegisterPage ? 'register' : 'login');
        if (isRegisterPage) formData.append('email', data.email.trim());
        formData.append('username', data.username.trim());
        formData.append('password', data.password.trim());

        try {
            const response = await fetch(
                'https://web.ics.purdue.edu/~skroot/cgt-390/public/auth.php',
                {
                    method: 'POST',
                    body: formData,
                }
            );
            const data = await response.json();
            if (data.success) {
                login();
                setData({ username: '', password: '', email: '' });
                setSuccessMsg(data.success);
                setError('');
                useEffect(() => {
                    const redirect = setTimeout(() => {
                        navigate('/');
                    }, 3000);
                    return () => {
                        clearTimeout(redirect);
                    };
                }, []);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form
            className={`${styles['profile-form']}`}
            onSubmit={handleSubmit}
        >
            {isRegisterPage && (
                <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    required
                    value={data.email}
                    onChange={handleChange}
                ></input>
            )}
            {isRegisterPage && <hr />}
            <input
                ref={usernameRef}
                type='text'
                name='username'
                placeholder='Username'
                required
                value={data.name}
                onChange={handleChange}
            ></input>
            <input
                type='password'
                name='password'
                placeholder='Password'
                required
                minLength='8'
                value={data.password}
                onChange={handleChange}
            ></input>
            <button
                type='submit'
                disabled={
                    submitting ||
                    data.username.trim() === '' ||
                    data.password.trim() === '' ||
                    (isRegisterPage && data.email.trim() === '')
                }
            >
                Submit
            </button>
        </form>
    );
};

export default AuthForm;
