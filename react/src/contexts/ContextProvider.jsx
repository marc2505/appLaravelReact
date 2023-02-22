import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {}
})

export const ContextProvider = ({children}) => {

    // const [user, setUser] = useState({});
    // const [user, _setUser] = useState(JSON.parse(localStorage.getItem('USER')));
    const [user, _setUser] = useState(localStorage.getItem('USER'));
    const [notification, _setNotification] = useState('');
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    // const [token, _setToken] = useState(null);

    const setNotification = (msg) => {
        _setNotification(msg);
        setTimeout(()=>{
            _setNotification('');
        }, 5000);
    }

    const setUser = (user) => {
        _setUser(user)
        if (user) {
            localStorage.setItem('USER', JSON.stringify(user))
            // localStorage.setItem('USER', user)
        } else {
            localStorage.removeItem('USER')
        }
    }

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{  
            user,
            token,
            setUser,
            setToken,
            notification,
            setNotification
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);