import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import { homeReducer, initialState } from '../reducers/HomeReducer';

const HomePage = () => {
    const [state, dispatch] = useReducer(homeReducer, initialState);
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

    useEffect(() => {
        fetch(
            `https://web.ics.purdue.edu/~skroot/cgt-390/public/fetch-data-with-filter.php?title=${title}&name=${search}&page=${page}&limit=10`
        )
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: 'FETCH_DATA',
                    payload: {
                        profiles: data.profiles,
                        count: data.count,
                        page: data.page,
                    },
                });
                console.log(data);
            });
    }, [title, search, page]);

    useEffect(() => {
        fetch(
            'https://web.ics.purdue.edu/~skroot/cgt-390/public/fetch-titles.php'
        )
            .then((res) => res.json())
            .then((data) =>
                dispatch({ type: 'SET_TITLES', payload: data.titles })
            );
    }, []);

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
