import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const login = useCallback(() => {
        setIsLogin(true);
    }, []);
    const logout = useCallback(() => {
        fetch('https://web.ics.purdue.edu/~skroot/cgt-390/public/logout.php')
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    setIsLogin(false);
                } else {
                    console.log(data);
                }
            })
            .catch((error) => console.log(error));
    }, []);
    const value = useMemo(() => ({ isLogin, login, logout }), [isLogin, login, logout]);
    return (
        <AuthContext.Provider value={{ value }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
