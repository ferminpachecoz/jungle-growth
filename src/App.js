import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Beginner from "./pages/Beginner";
import Advanced from "./pages/Advanced";
import Amazon from "./pages/Amazon";
import PaidMedia from "./pages/PaidMedia";

function App() {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Home />} />
      <Route path="/amazon/beginner" element={<Beginner />} />
      <Route path="/amazon/advanced" element={<Advanced />} />
      <Route path="/amazon" element={<Amazon />} />
      <Route path='/paid-media' element={<PaidMedia />} />
    </Routes>
  );
}

export default App;
