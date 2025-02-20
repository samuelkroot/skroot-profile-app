import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const HomePage = () => {
  const [title, setTitle] = useState('');
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setPage(1);
  }

  const [search, setSearch] = useState('');
  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(1);
  }

  const handleReset = () => {
    setTitle('');
    setSearch('');
  }

  const [page, setPage] = useState(1);
  const [profCount, setprofCount] = useState(1);
  let pageCount = Math.ceil(profCount / 10);

  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetch(`https://web.ics.purdue.edu/~skroot/cgt-390/public/fetch-data-with-filter.php?title=${title}&name=${search}&page=${page}&limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data.profiles);
        setprofCount(data.count);
        setPage(data.page);
        console.log(data);
      });
  }, [title, search, page]);

  const [titles, setTitles] = useState([]);
  useEffect(() => {
    fetch('https://web.ics.purdue.edu/~skroot/cgt-390/public/fetch-titles.php')
      .then((res) => res.json())
      .then((data) => setTitles(data.titles));
  }, []);

  return (
    <>
      <Wrapper>
        <h1>Profile App</h1>

        <div className='filter-wrapper'>
          <div className='filter--select'>
            <label htmlFor='title-select'>Filter by title: </label>
            <select id='title-select' onChange={handleTitleChange} value={title}>
              <option value=''>All</option>
              {titles.map((title) => (<option key={title} value={title}>{title}</option>))}
            </select>
          </div>
          <div className='filter--search'>
            <label htmlFor='search'>Filter by name: </label>
            <input type='text' id='search' onChange={handleSearch} value={search} />
          </div>
          <div className='filter--reset'>
            <button onClick={handleReset}>Clear</button>
          </div>
        </div>

        <div className="profile-cards">
          {profiles.map((profile) => (
            <Link to={`/profile/${profile.id}`} key={profile.id}>
              <Card {...profile} />
            </Link>
          ))}
        </div>
        {
          profCount === 0 &&
          <p>No profiles found</p>
        }
        {
          profCount > 10 &&
          <div className='pagination'>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
            <span>
              {page}/{pageCount}
            </span>
            <button onClick={() => setPage(page - 1)} disabled={page >= pageCount}>Next</button>
          </div>
        }
      </Wrapper>
    </>
  );
}

export default HomePage;
