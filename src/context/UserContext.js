import { createContext, useContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [auth,setAuth] = useState('Daniel');

    return(
        <UserContext.Provider value={{auth,setAuth}}>
            <h1>App</h1>
            {children}
        </UserContext.Provider>
    )
}