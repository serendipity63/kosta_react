const MyNickname = ({ info, dispatch }) => {
    return (
        <>
            <label>{info.nickname}</label> &nbsp;&nbsp;&nbsp;
            <input
                type="text"
                onInput={(e) =>
                    dispatch({ type: "NICKNAME", payload: e.target.value })
                }
            />
        </>
    );
};
export default MyNickname;
