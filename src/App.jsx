import './App.css';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddProfilePage from './pages/AddProfilePage';
import ProfileLayoutPage from './pages/ProfileLayoutPage';
import ProfileEditPage from './pages/ProfileEditPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    const mode = useSelector((state) => state.mode.mode);

    const LazyDetailPage = lazy(() => import('./pages/ProfileDetailPage'));

    return (
        <AuthProvider>
            <HashRouter>
                <header>
                    <Navbar />
                </header>
                <main className={mode}>
                    <Routes>
                        <Route
                            path='/'
                            element={<HomePage />}
                        />
                        <Route
                            path='/about'
                            element={<AboutPage />}
                        />
                        <Route
                            path='/login'
                            element={<LoginPage />}
                        />
                        <Route
                            path='/register'
                            element={<RegisterPage />}
                        />
                        <Route
                            path='/add-profile'
                            element={
                                <ProtectedRoute>
                                    <AddProfilePage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path='profile/:id'
                            element={<ProfileLayoutPage />}
                        >
                            <Route
                                index
                                element={
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <LazyDetailPage />
                                    </Suspense>
                                }
                            />
                            <Route
                                path='edit'
                                element={
                                    <ProtectedRoute>
                                        <ProfileEditPage />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>
                        <Route
                            path='*'
                            element={<NotFoundPage />}
                        />
                    </Routes>
                </main>
            </HashRouter>
        </AuthProvider>
    );
}

export default App;
