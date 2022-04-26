import { createContext, useState } from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home/Home/Home';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Destination from './pages/Destination/Destination/Destination';
import Contact from './pages/Contact/Contact/Contact';
import Blog from './pages/Blog/Blog/Blog';
import About from './pages/About/About/About';
import Login from './pages/Login/Login/Login';

import PrivetRoute from './pages/Login/PrivetRoute/PrivetRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDestinaton from './pages/Dashboard/AddDestination/AddDestinaton';
import DestinationDetail from './pages/Destination/DestinationDetail/DestinationDetail';
import CheckOut from './pages/Destination/CheckOut/CheckOut/CheckOut';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import Orders from './pages/Dashboard/Orders/Orders';
import AdminRoute from './pages/Dashboard/AdminRoute/AdminRoute';
import AddRivews from './pages/Dashboard/AddRivews/AddRivews';
import AdminList from './pages/Dashboard/AdminList/AdminList';
import DestinationControl from './pages/Dashboard/DestinationControl/DestinationControl';

export const userContext = createContext();

function App() {

  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(1);

  return (
    <AuthProvider>
      <userContext.Provider value={[adult, children, setAdult, setChildren]}>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkOut/:title" element={<CheckOut />} />
          <Route path="/destination/:title" element={<PrivetRoute>
            <DestinationDetail />
          </PrivetRoute>} />

          <Route path="/destination" element={<PrivetRoute>
            <Destination />
          </PrivetRoute>} />

          <Route path="/dashboard" element={<PrivetRoute>
            <Route path="/dashboard" element={<Dashboard />}>
            <Route path="makeAdmin" element={<AdminRoute>
              <MakeAdmin />
            </AdminRoute>} />
            <Route path="addDestination" element={<AdminRoute>
              <AddDestinaton />
            </AdminRoute>} />
            <Route path="myOrder" element={<MyOrder />} />
            <Route path="addRivew" element={<AddRivews />} />
            <Route path="adminList" element={<AdminList />} />
            <Route path="destinaitonList" element={<DestinationControl/>} />
            <Route path="orders" element={<AdminRoute>
              <Orders />
            </AdminRoute>} />
          </Route>
          </PrivetRoute>} />

        </Routes>
      </userContext.Provider>
    </AuthProvider>
  );
}

export default App;
