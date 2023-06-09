import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => { },
    onLogout: () => { }
})

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === '1') {
            setIsLoggedIn(true);
        }
    }, [])

    const loginHandler = (email, password) => {
        // fetch(url, {method: 'post', body: JSON.stringify{email, password}})...
        // .then(res => res.json())
        // .then token ...
        console.log(email, password)

        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
    }} >
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;