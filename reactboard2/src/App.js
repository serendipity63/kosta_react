import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import BoardList from "./component/BoardList";
import WriteForm from "./component/WriteForm";
import DetailForm from "./component/DetailForm";
import Login from "./component/Login";
import Join from "./component/Join";
import ModifyForm from "./component/ModifyForm";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
// import store from "./persist-store";

// export const persistor = persistStore(store);
function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      {/* <PersistGate persistor={persistor}>
                    <BrowserRouter> */}
      <Main />
      <Routes>
        <Route exect path="/" element={<Login />} />
        <Route exect path="/join" element={<Join />} />
        <Route exect path="/list" element={<BoardList />} />
        <Route exect path="/writeform" element={<WriteForm />} />
        <Route exect path="/detailform/:sect/:num" element={<DetailForm />} />
        <Route exect path="/modifyform/:num" element={<ModifyForm />} />
      </Routes>
      {/* </BrowserRouter>
                </PersistGate> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
