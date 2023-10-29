import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
const Header = () => {
    const style = {
        backgroundColor: "whitesmoke",
        width: "100%",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 10,
    };
    return (
        <div style={style}>
            <ul className="nav-items">
                <li className="nav-item">
                    <Link to={"/"} id="logo">
                        <i>
                            <b>kosta.com</b>
                        </i>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/login"}>로그인</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/join"}>회원가입</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/"}>게시판</Link>
                </li>
            </ul>
        </div>
    );
};
export default Header;
