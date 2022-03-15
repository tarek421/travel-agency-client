import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Destination from './pages/Destination/Destination/Destination';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog/Blog';
import About from './pages/About/About/About';
import Gallery from './pages/Gallary/Gallery/Gallery';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';

import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import PrivetRoute from './pages/Login/PrivetRoute/PrivetRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDestinaton from './pages/Dashboard/AddDestination/AddDestinaton';

function App() {
  return (
    <AuthProvider>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<PrivetRoute>
          <Destination />
        </PrivetRoute>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="makeAdmin" element={<MakeAdmin />}/>
          <Route path="addDestination" element={<AddDestinaton />}/>
          <Route path="myOrder" element={<AddDestinaton />}/>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
