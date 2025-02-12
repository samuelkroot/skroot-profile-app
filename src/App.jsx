import './App.css'
import {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import About from "./components/About";
import ProfileForm from './components/ProfileForm';
import Card from './components/Card';
import image from './assets/react.svg';

function App() {

  // const profiles = [
  //   {
  //     img: image,
  //     name: 'Joe Public',
  //     title: 'Web Developer',
  //     email: 'jpublic@purdue.edu'
  //   },
  //   {
  //     img: image,
  //     name: 'Jane Public',
  //     title: 'Software Developer',
  //     email: 'jjpublic@purdue.edu'
  //   }
  // ];
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetch('https://web.ics.purdue.edu/~skroot/cgt-390/public/fetch-data.php')
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
        console.log(data);
      });
  }, []);
  
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(prevCount => prevCount + 1);
    };

  const titles = [...new Set(profiles.map((profile) => profile.title))];

  const [title, setTitle] = useState('');
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setAnimation(true);
  }
  
  const [search, setSearch] = useState('');
  const handleSearch = (event) => {
    setSearch(event.target.value);
    setAnimation(true);
  }
  
  const filteredProfiles = profiles.filter((profile) => {
    return (title === '' || profile.title === title) && profile.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleReset = () => {
    setTitle('');
    setSearch('');
    setAnimation(true);
  }

  const [animation, setAnimation] = useState(false);
  const handleAnimation = () => {
    setAnimation(false);
  }

  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
  }

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
            {filteredProfiles.map((profile) => <Card key={profile.id} {...profile} animate={animation} handleAnimate={handleAnimation} />)}
          </div>
        </Wrapper>
      </main>
    </>
  );
}

export default App
