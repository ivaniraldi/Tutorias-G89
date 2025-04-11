import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [userIsLogged, setUserIsLogged] = useState(false)


    return (
        <GlobalContext.Provider value={{user, setUser, userIsLogged, setUserIsLogged}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;