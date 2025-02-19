import './App.css';
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddProfilePage from './pages/AddProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode();
  }

  return (
    <HashRouter>
      <header>
        <Navbar mode={mode} handleMode={handleMode} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/add-profile' element={<AddProfilePage />}/>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;