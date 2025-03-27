import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useHomepageAPI from '../hooks/homepageAPI';
import Wrapper from '../components/Wrapper';
import Filters from '../components/Filters';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const HomePage = () => {
    const { state, dispatch } = useHomepageAPI();
    const { titles, title, search, profiles, page, profCount } = state;
    
    const titlesVal = useMemo(() => titles, [titles]);
    
    const dispatchCallback = useCallback(() => {dispatch}, [dispatch]);

    const handleTitleChange = useCallback((event) => {
        dispatch({ type: 'SET_TITLE', payload: event.target.value });
    }, []);

    const handleSearch = useCallback((event) => {
        dispatch({ type: 'SET_SEARCH', payload: event.target.value });
    }, []);

    const handleReset = useCallback(() => {
        dispatch({ type: 'CLEAR_FILTER' });
    }, []);

    let pageCount = Math.ceil(profCount / 10);

    return (
        <Wrapper>
            <h1>Profile App</h1>

            <Filters
                titles={titlesVal}
                title={title}
                search={search}
                handleTitleChange={handleTitleChange}
                handleSearch={handleSearch}
                handleReset={handleReset}
            />

            <div className='profile-cards'>
                {profiles.map((profile) => (
                    <Link
                        to={`/profile/${profile.id}`}
                        key={profile.id}
                    >
                        <Card {...profile} />
                    </Link>
                ))}
            </div>
            {profCount === 0 && <p>No profiles found</p>}
            {profCount > 10 && (
                <Pagination
                    dispatch={dispatchCallback}
                />
            )}
        </Wrapper>
    );
};

export default HomePage;
