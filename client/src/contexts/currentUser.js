import { createContext, useState } from 'react';

const CurrentUserContext = createContext({
    isAuthenticated: false
})

export default CurrentUserContext

export const CurrentUserContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <CurrentUserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </CurrentUserContext.Provider>
    )
}