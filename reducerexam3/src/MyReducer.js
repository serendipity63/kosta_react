export const initState = {
    id: "Lee",
    nickname: "KangIn",
    subject: "Football",
    grade: 1,
};
//payload : 액션의 실행에 필요한 임의의 데이터
//리덕스는 스토어를 가지고 있다
//usereducer은 없다 - 이건 하나의 js에서만 쓴다 usestate or usereducer
//initstate나 reducer를 외부에서 만들어놓고 쓸 수 있긴하다(usestate와 차이점)
//usereduce는 많이 쓰진 않음
export const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case "ID":
            newState = { ...state, id: action.payload }; //payload is the key
            break;
        case "NICKNAME":
            newState = { ...state, nickname: action.payload };
            break;
        case "SUBJECT":
            newState = { ...state, subject: action.payload };
            break;
        case "GRADE":
            newState = { ...state, grade: action.payload };
            break;
        default:
            newState = { ...state };
    }
    return newState;
};
