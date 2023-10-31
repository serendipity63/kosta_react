import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ElecChargeStatList from "./ElecChargeStatList";
import PElecChargeStatList from "./PElecChargeStatList";

function App() {
    return (
        <div className="App">
            {/* <ElecChargeStatList /> */}
            <PElecChargeStatList />
        </div>
    );
}

export default App;
