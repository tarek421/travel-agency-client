import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
