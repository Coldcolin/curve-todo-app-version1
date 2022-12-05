import {useState, useContext, createContext} from "react";

const StateContext = createContext();

export const ContextProvider =({children})=>{
    const [theme, setTheme] = useState(false);

    const changeTheme=()=>{
        setTheme(!theme);
        console.log("changed")
    }

    return(
        <StateContext.Provider value={{theme, setTheme, changeTheme}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext =()=> useContext(StateContext)