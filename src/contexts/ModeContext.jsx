import { createContext, useContext, useState } from 'react';

const ModeContext = createContext();
export default ModeContext;

export const ModeProvider = ({children}) => {
    const [mode, setMode] = useState('dark');
    const toggleMode = () => {
        setMode(prevMode => (prevMode==='dark') ? 'light' : 'dark');
    }
    return (
        <ModeContext.Provider value={{mode, toggleMode}}>
            {children}
        </ModeContext.Provider>
    );
}

export const useMode = () => useContext(ModeContext);