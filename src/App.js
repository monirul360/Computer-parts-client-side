import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Page/Login/Login';
import Header from './Page/Share/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
