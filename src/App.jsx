import './App.css';
import { useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ModeContext from './contexts/ModeContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddProfilePage from './pages/AddProfilePage';
import ProfileLayoutPage from './pages/ProfileLayoutPage';
import ProfileDetailPage from './pages/ProfileDetailPage';
import ProfileEditPage from './pages/ProfileEditPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const { mode } = useContext(ModeContext);

  return (
    <AuthProvider>
      <HashRouter>
        <header>
          <Navbar />
        </header>
        <main className={mode}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/add-profile' element={<ProtectedRoute><AddProfilePage /></ProtectedRoute>} />
            <Route path='profile/:id' element={<ProfileLayoutPage />}>
              <Route index element={<ProfileDetailPage />} />
              <Route path='edit' element={<ProtectedRoute><ProfileEditPage /></ProtectedRoute>} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;