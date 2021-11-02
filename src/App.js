import "./App.css";
import { earningsData } from "./data/victoryData";
import Victory from "./components/Victory";
import BrushChart from "./components/BrushChart";
function App() {
  return (
    <div className="App">
      HOME
      {/* <Victory data={earningsData} type={"line"} x={"quarter"} y={"earnings"} /> */}
      <BrushChart />
    </div>
  );
}

export default App;
