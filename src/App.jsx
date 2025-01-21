import './App.css'
import About from "./components/About";
import Card0 from './components/Card0';
import Card1 from './components/Card1';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="section">
          <div className='container'>
            <h1>Profile App</h1>
          </div>
        </div>
        <div className="section">
          <div className='container'>
            <About />
          </div>
        </div>
        <div className="section">
          <div className='container'>
            <div className='profile-cards'>
              <Card0 />
              <Card1 />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
