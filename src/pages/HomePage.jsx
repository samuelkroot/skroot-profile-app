import { Link } from 'react-router-dom';
import useHomepageAPI from '../hooks/homepageAPI';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';

const HomePage = () => {
    const { state, dispatch } = useHomepageAPI();
    const { titles, title, search, profiles, page, profCount } = state;

    const handleTitleChange = (event) => {
        dispatch({ type: 'SET_TITLE', payload: event.target.value });
    };

    const handleSearch = (event) => {
        dispatch({ type: 'SET_SEARCH', payload: event.target.value });
    };

    const handleReset = () => {
        dispatch({ type: 'CLEAR_FILTER' });
    };

    let pageCount = Math.ceil(profCount / 10);

    return (
        <Wrapper>
            <h1>Profile App</h1>

            <div className='filter-wrapper'>
                <div className='filter--select'>
                    <label htmlFor='title-select'>Filter by title: </label>
                    <select
                        id='title-select'
                        onChange={handleTitleChange}
                        value={title}
                    >
                        <option value=''>All</option>
                        {titles.map((title) => (
                            <option
                                key={title}
                                value={title}
                            >
                                {title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='filter--search'>
                    <label htmlFor='search'>Filter by name: </label>
                    <input
                        type='text'
                        id='search'
                        onChange={handleSearch}
                        value={search}
                    />
                </div>
                <div className='filter--reset'>
                    <button onClick={handleReset}>Clear</button>
                </div>
            </div>

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
                <div className='pagination'>
                    <button
                        onClick={() =>
                            dispatch({ type: 'SET_PAGE', payload: page - 1 })
                        }
                        disabled={page === 1}
                    >
                        Prev
                    </button>
                    <span>
                        {page}/{pageCount}
                    </span>
                    <button
                        onClick={() =>
                            dispatch({ type: 'SET_PAGE', payload: page - 1 })
                        }
                        disabled={page >= pageCount}
                    >
                        Next
                    </button>
                </div>
            )}
        </Wrapper>
    );
};

export default HomePage;
