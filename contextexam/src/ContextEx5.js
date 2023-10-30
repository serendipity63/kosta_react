import { useContext } from "react";
import { UserContext } from "./ContextEx1";
const ContextEx5 = () => {
    const context = useContext(UserContext);
    return (
        <>
            <h1>ContextEx5</h1>
            <h2>{`Hello ${context.user} again`}</h2>
            <input
                type="text"
                onChange={(e) => context.setUser(e.target.value)}
            />
        </>
    );
};
export default ContextEx5;
