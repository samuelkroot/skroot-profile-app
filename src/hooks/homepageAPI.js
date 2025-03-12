import { useEffect, useReducer } from 'react';
import { homeReducer, initialState } from '../reducers/HomeReducer';

function useHomepageAPI() {
    const [state, dispatch] = useReducer(homeReducer, initialState);
    const { title, search, page } = state;
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

    return { state, dispatch };
}
export default useHomepageAPI;
