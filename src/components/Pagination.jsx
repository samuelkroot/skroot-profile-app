import { memo } from 'react';

const Pagination = memo(({ dispatch }) => {
    return (
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
                    dispatch({ type: 'SET_PAGE', payload: page + 1 })
                }
                disabled={page >= pageCount}
            >
                Next
            </button>
        </div>
    );
});

export default Pagination;
