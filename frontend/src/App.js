import './App.css';
import Menu from './Menu';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signin from './page/Signin';
import Profile from './page/Profile';
import Ordersearch from "./page/Ordersearch";
import Profilechange from './page/Profilechange';
import Askhelp from './page/Askhelp';
import Payments from './page/Payments';
import Order from './page/Order';
import Ordercomplete from './page/Ordercomplete';
import Ordernext from './page/Ordernext';
import TestMap from './page/test/TestMap';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <div className="header">
        <p className="header-text">TSMC Uber</p>
      </div>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/profilechange' element={<Profilechange />}></Route>
        <Route path='/payments' element={<Payments/>}></Route>
        <Route path='/Ordersearch' element={<Ordersearch />}></Route>
        <Route path='/askhelp' element={<Askhelp />}></Route>
        <Route path='/ordercomplete' element={<Ordercomplete />}></Route>
        <Route path='/ordernext' element={<Ordernext />}></Route>
        <Route path='/test/map' element={<TestMap />}></Route>
      </Routes>
    </div>
   </BrowserRouter>
         
  );
}

export default App;
