import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Page/Blogs/Blogs';
import Login from './Page/Login/Login';
import Private from './Page/Private/Private';
import Header from './Page/Share/Header/Header';
import Signup from './Page/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Private>
          <Blogs></Blogs>
        </Private>}></Route>
      </Routes>
    </div>
  );
}

export default App;
