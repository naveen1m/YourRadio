import { useState, createContext } from "react";

export const GlobalContext = createContext(null);


function GlobalState({ children }) {
    const [user, setUser] = useState();
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [searchedUser, setSearchedUser] = useState();

    // Messaging state management


    return (
        <GlobalContext.Provider value={{
            user, setUser,
            showRegisterModal, setShowRegisterModal,
            showModal, setShowModal,
            searchedUser, setSearchedUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;