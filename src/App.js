import { Route, Routes } from 'react-router-dom';
import './App.css';
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
import Purchase from './Page/Purchase/Purchase';
import ManageProduct from './Page/Dashboard/ManageProduct/ManageProduct';
import AddReview from './Page/Dashboard/Review/AddReview';
import Error from './Page/Error/Error';
import MakeAdmin from './Page/Dashboard/MakeAdmin/MakeAdmin';
import PrivateAdmin from './Page/Dashboard/PrivateAdmin/PrivateAdmin';
import Profile from './Page/Dashboard/Profile/Profile';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/Purchase/:id' element={<Private>
          <Purchase></Purchase>
        </Private>}></Route>
        <Route path='dashboard' element={
          <Private>
            <Dashboard></Dashboard>
          </Private>
        }>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='order' element={<Myorder></Myorder>}></Route>
          <Route path='addproduct' element={<PrivateAdmin><AddProduct></AddProduct></PrivateAdmin>}></Route>
          <Route path='manageProduct' element={<PrivateAdmin><ManageProduct></ManageProduct></PrivateAdmin>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='makeadmin' element={<PrivateAdmin><MakeAdmin></MakeAdmin></PrivateAdmin>}></Route>
        </Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes >
      <Footer></Footer>
      <ToastContainer />
    </div >
  );
}

export default App;
