import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; //localStorage에 저장
// import storageSession from "redux-persist/lib/storage/session"; //SessionStorage에 저장
//왜? redux의 storage 페이지를 새로고침하면 state이 사라짐
// npm install --save redux-persist
// npm install --save @reduxjs/toolkit

const reducer = (currentState, action) => {
    if (currentState === undefined) {
        return {
            id: "",
            name: "",
            password: "",
            email: "",
            address: "",
        };
    }
    console.log(action);
    const newState = { ...currentState };
    switch (action.type) {
        case "ID":
            // return { ...currentState, id: action.payload };
            newState.id = action.payload;
            break;
        case "NAME":
            // return { ...currentState, name: action.payload };
            newState.name = action.payload;
            break;
        case "PASSWORD":
            // return { ...currentState, password: action.payload };
            newState.password = action.payload;
            break;
        case "EMAIL":
            // return { ...currentState, email: action.payload };
            newState.email = action.payload;
            break;
        case "ADDRESS":
            // return { ...currentState, address: action.payload }; // 이건 잘 안됨 왤까?
            newState.address = action.payload;
            break;
        case "ALL":
            // return { ...action.payload };
            newState.id = action.payload.id;
            newState.password = action.payload.password;
            newState.email = action.payload.email;
            newState.address = action.payload.address;
            break;
        default:
    }
    return newState;
};

const persistConfig = {
    key: "root",
    storage,
    // : storageSession,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store;
