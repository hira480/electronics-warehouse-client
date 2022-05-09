import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ProtectedRoute from './Pages/Login/ProtectedRoute/ProtectedRoute';
import AddItems from './Pages/AddItems/AddItems';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';
import Blog from './Pages/Blog/Blog';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventoryItem/:productId' element={
          <ProtectedRoute>
            <ProductDetail></ProductDetail>
          </ProtectedRoute>
        }></Route>
        <Route path='/addItems' element={
          <ProtectedRoute>
            <AddItems></AddItems>
          </ProtectedRoute>
        }></Route>
        <Route path='/manageItems' element={
          <ProtectedRoute>
            <ManageItems></ManageItems>
          </ProtectedRoute>
        }></Route>
        <Route path='/myItems' element={
          <ProtectedRoute>
            <MyItems></MyItems>
          </ProtectedRoute>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
