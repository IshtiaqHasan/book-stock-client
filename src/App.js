import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Inventory from './Pages/Inventory/Inventory';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import CheckInventory from './Pages/CheckInventory/CheckInventory';
import AddItem from './Pages/AddItem/AddItem';
import AllItems from './Pages/AllItems/AllItems/AllItems';
import ManageBooks from './Pages/ManageBooks/ManageBooks';
import Blogs from './Pages/Blogs/Blogs';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/item/:item_Id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/allItems" element={
          <RequireAuth>
            <AllItems></AllItems>
          </RequireAuth>
        }></Route>
        {/* <Route path="/checkInventory" element={
          <RequireAuth>
            <CheckInventory></CheckInventory>
          </RequireAuth>
        }></Route> */}
        <Route path="/addItem" element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageBooks></ManageBooks>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div >
  );
}

export default App;
