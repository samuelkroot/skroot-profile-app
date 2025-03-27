import { memo } from 'react';

const Filters = memo(
    ({
        titles,
        title,
        search,
        handleTitleChange,
        handleSearch,
        handleReset,
    }) => {
        return (
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
        );
    }
);

export default Filters;
