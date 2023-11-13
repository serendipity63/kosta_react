import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; //localStorage에 저장
//import storageSession from "redux-persist/lib/storage/session"; //SessionStorage에 저장
//왜? redux의 storage 페이지를 새로고침하면 state이 사라짐
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

    const newState = { ...currentState };
    switch (action.type) {
        case "ID":
            newState.id = action.payload;
            break;
        case "NAME":
            newState.name = action.payload;
            break;
        case "PASSWORD":
            newState.password = action.payload;
            break;
        case "EMAIL":
            newState.email = action.payload;
            break;
        case "ADDRESS":
            newState.address = action.payload;
            break;
        case "ALL":
            return { ...action.payload };
        default:
    }
    return newState;
};

const persistConfig = {
    key: "root",
    storage,
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
