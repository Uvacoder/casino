import { createContext, useContext, useState } from 'react';

const AppContext = createContext(undefined, undefined);

export function CreditsProvider({ children }) {
    const [credits, setCredits] = useState(100);

    return (
        <AppContext.Provider value={{credits, setCredits}}>
            {children}
        </AppContext.Provider>
    );
}

export function useCredits() {
    return useContext(AppContext);
}
