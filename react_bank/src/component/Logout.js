import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { persistor } from "../App";
import { initialState } from "../persist-store";
const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "ALL", payload: initialState });
        persistor.purge();
        window.location.href = "/login";
    }, []);
};
export default Logout;
