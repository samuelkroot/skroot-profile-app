import './App.css'
import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import About from "./components/About";
import ProfileForm from './components/ProfileForm';
import Card from './components/Card';

function App() {
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
  }

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

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
      <header>
        <Navbar mode={mode} handleMode={handleMode} />
      </header>
      <main>
        <Wrapper>
          <h1>Profile App</h1>
          <button onClick={handleClick}>{count}</button>
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <ProfileForm />
        </Wrapper>
        <Wrapper>
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
            {profiles.map((profile) => <Card key={profile.id} {...profile} />)}
          </div>
          {
            profCount === 0 && <p>No profiles found</p>
          }
          {
            profCount > 10 &&
            <div className='pagination'>
              <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                {/* <span className='sr-only'>Previous</span>
                <FontAwesomeIcon icon={faChevronLeft} /> */}
                Prev
              </button>
              <span>
                {page}/{pageCount}
              </span>
              <button onClick={() => setPage(page - 1)} disabled={page >= pageCount}>
                {/* <span className='sr-only'>Next</span>
                <FontAwesomeIcon icon={faChevronRight} /> */}
                Next
              </button>
            </div>
          }
        </Wrapper>
      </main>
    </>
  );
}

export default App
