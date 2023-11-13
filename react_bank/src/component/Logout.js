import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "ALL",
            payload: { id: "", name: "", password: "", email: "", address: "" },
        });
        window.location.href = "/login";
    }, []);
};
export default Logout;
