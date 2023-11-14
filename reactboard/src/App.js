import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import DetailForm from "./component/DetailForm";
import WriteForm from "./component/WriteForm";
import BoardList from "./component/BoardList";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/detailform" element={<DetailForm />} />
                <Route exact path="/writeform" element={<WriteForm />} />
            </Routes>
        </div>
    );
}

export default App;
