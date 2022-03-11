import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Destination from './pages/Destination/Destination/Destination';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog/Blog';
import About from './pages/About/About/About';
import Gallery from './pages/Gallary/Gallery/Gallery';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dashboard" element={<Dashboard />} />
        

    </Routes>
  );
}

export default App;
