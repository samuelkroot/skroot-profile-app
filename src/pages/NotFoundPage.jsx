import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            <h1>Error 404</h1>
            <p>The requested page could not be found</p>
            <Link to='/'>Return to Home</Link>
        </>
    );
}

export default NotFoundPage;