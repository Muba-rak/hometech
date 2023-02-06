import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Registration from "./pages/Registration";
import Verify from "./pages/Verify";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/verify" element= {<Verify />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
