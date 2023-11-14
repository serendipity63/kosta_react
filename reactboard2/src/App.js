import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./component/Main";
import BoardList from "./component/BoardList";
import WriteForm from "./component/WriteForm";
import DetailForm from "./component/DetailForm";
import Login from "./component/Login";
import Join from "./component/Join";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./persist-store";

export const persistor = persistStore(store);
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <BrowserRouter>
                        <Main />
                        <Routes>
                            <Route exect path="/" element={<BoardList />} />
                            <Route exect path="/login" element={<Login />} />
                            <Route exect path="/join" element={<Join />} />

                            <Route
                                exect
                                path="/writeform"
                                element={<WriteForm />}
                            />
                            <Route
                                exect
                                path="/detailform"
                                element={<DetailForm />}
                            />
                        </Routes>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
