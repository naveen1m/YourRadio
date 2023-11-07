import { useState, createContext } from "react";

export const GlobalContext = createContext(null);


function GlobalState({ children }) {
    const [user, setUser] = useState();
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    // Messaging state management


    return (
        <GlobalContext.Provider value={{ user, setUser, showRegisterModal, setShowRegisterModal, showModal, setShowModal }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;