import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MakeAccount from "./component/MakeAccount";
import AccountInfo from "./component/AccountInfo";
import Deposit from "./component/Deposit";
import Withdraw from "./component/Withdraw";
import AllAccountInfo from "./component/AllAccountInfo";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Join from "./component/Join";
import BankTop from "./component/BankTop";
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
                        <BankTop />
                        <Routes>
                            <Route exact path="/" element={<MakeAccount />} />
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/logout" element={<Logout />} />
                            <Route exact path="/join" element={<Join />} />
                            <Route
                                exact
                                path="/deposit"
                                element={<Deposit />}
                            />
                            <Route
                                exact
                                path="/withdraw"
                                element={<Withdraw />}
                            />
                            <Route
                                exact
                                path="/accountInfo"
                                element={<AccountInfo />}
                            />
                            <Route
                                exact
                                path="/allAccountInfo"
                                element={<AllAccountInfo />}
                            />
                        </Routes>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
