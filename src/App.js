import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Destination from './pages/Destination/Destination/Destination';
import Contact from './pages/Contact/Contact/Contact';
import Blog from './pages/Blog/Blog/Blog';
import About from './pages/About/About/About';
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
import DestinationDetail from './pages/Destination/DestinationDetail/DestinationDetail';
import { createContext, useState } from 'react';
import CheckOut from './pages/Destination/CheckOut/CheckOut/CheckOut';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import Orders from './pages/Dashboard/Orders/Orders';

export const userContext = createContext();

function App() {

  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <AuthProvider>
      <userContext.Provider value={[adult, setAdult, children, setChildren]}>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/destination/:title" element={<DestinationDetail />} />

          <Route path="/destination" element={<PrivetRoute>
            <Destination />
          </PrivetRoute>} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="addDestination" element={<AddDestinaton />} />
            <Route path="myOrder" element={<MyOrder />} />
            <Route path="orders" element={<Orders />} />
          </Route>

        </Routes>
      </userContext.Provider>
    </AuthProvider>
  );
}

export default App;
