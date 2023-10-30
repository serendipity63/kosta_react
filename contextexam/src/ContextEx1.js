import { useState, createContext } from "react";
import ContextEx2 from "./ContextEx2";
export const UserContext = createContext();
const ContextEx1 = () => {
    const [user, setUser] = useState("Jesse Halll");
    const context = { user, setUser: setUser.bind(this) };
    return (
        <UserContext.Provider value={context}>
            <h1>{`Hello ${user}`}</h1>
            <ContextEx2 />
        </UserContext.Provider>
    );
};
export default ContextEx1;
