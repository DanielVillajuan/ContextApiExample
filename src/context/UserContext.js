import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user,setUser] = useState('Daniel');

    return(
        <UserContext.Provider value={{user,setUser}}>
            <h1>App</h1>
            {children}
        </UserContext.Provider>
    )
}