import { createContext, useState } from 'react';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const login = () => {
        setIsLogin(true);
    };
    const logout = () => {
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
    };
    return (
        <AuthContext.Provider value={{ isLogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
