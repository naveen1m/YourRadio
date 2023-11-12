import { useState, createContext } from "react";

export const GlobalContext = createContext(null);


function GlobalState({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [searchedUser, setSearchedUser] = useState();
    const [showActionsheet, setShowActionsheet] = useState(false)

    // Messaging state management


    return (
        <GlobalContext.Provider value={{
            user, setUser,
            showRegisterModal, setShowRegisterModal,
            showModal, setShowModal,
            searchedUser, setSearchedUser,
            showActionsheet, setShowActionsheet
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;