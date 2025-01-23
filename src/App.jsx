import './App.css'
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
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper>
          <h1>Profile App</h1>
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
