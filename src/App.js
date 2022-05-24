import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Page/Blogs/Blogs';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login';
import Private from './Page/Private/Private';
import Footer from './Page/Share/Footer/Footer';
import Header from './Page/Share/Header/Header';
import Signup from './Page/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Page/Dashboard/Dashboard';
import Myorder from './Page/Dashboard/Myorder/Myorder';
import AddProduct from './Page/Dashboard/AddProduct/AddProduct';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Private>
          <Blogs></Blogs>
        </Private>}></Route>
        <Route path='dashboard' element={
          <Private>
            <Dashboard></Dashboard>
          </Private>
        }>
          <Route index element={<Myorder></Myorder>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
