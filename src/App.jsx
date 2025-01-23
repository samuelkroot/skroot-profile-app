import './App.css'
import {useState} from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import About from "./components/About";
import Card from './components/Card';
import image from './assets/react.svg';

function App() {
  const profiles = [
    {
      img: image,
      name: 'Joe Public',
      title: 'Web Developer',
      email: 'jpublic@purdue.edu'
    },
    {
      img: image,
      name: 'Jane Public',
      title: 'Software Developer',
      email: 'jjpublic@purdue.edu'
    }
  ];
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count++);
  };
  return (
    <>
      <header>
        <Navbar />
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
          <div className="profile-cards">
            {profiles.map(profile => <Card key={profile.email} {...profile} />)}
          </div>
        </Wrapper>
      </main>
    </>
  );
}

export default App
