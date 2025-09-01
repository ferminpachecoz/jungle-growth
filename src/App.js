import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Beginner from "./pages/Beginner";
import Advanced from "./pages/Advanced";

function App() {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Home />} />
      <Route path="/beginner" element={<Beginner />} />
      <Route path="/advanced" element={<Advanced />} />
    </Routes>
  );
}

export default App;
