import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Createtask";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        
        <Route path="/"element={<Home />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
