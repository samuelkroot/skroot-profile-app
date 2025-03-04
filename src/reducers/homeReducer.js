export const initialState = {
    titles: [],
    title: '',
    search: '',
    profiles: [],
    page: 1,
    profCount: 0,
};
export const homeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TITLES':
            return {
                ...state,
                titles: action.payload,
            };
        case 'SET_TITLE':
            return {
                ...state,
                title: action.payload,
                page: 1,
            };
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.payload,
                page: 1,
            };
        case 'FETCH_DATA':
            return {
                ...state,
                profiles: action.payload.profiles,
                profCount: action.payload.count,
                page: action.payload.page,
            };
        case 'CLEAR_FILTER':
            return {
                ...state,
                title: '',
                search: '',
                page: 1,
            };
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload,
            };
        default:
            return state;
    }
};
