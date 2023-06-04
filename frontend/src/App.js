import './App.css';
import Menu from './Menu';
import MenuDriver from './MenuDriver';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signin from './page/Signin';
import Profile from './page/Profile';
import Profiledriver from './page/Profiledriver';
import Ordersearch from "./page/Ordersearch";
import Profilechange from './page/Profilechange';
import Askhelp from './page/Askhelp';
import Payments from './page/Payments';
import Order from './page/Order';
import Ordercomplete from './page/Ordercomplete';
import Orderdrivercomplete from './page/Orderdrivercomplete';
import Ordernext from './page/Ordernext';
import Orderdriver from './page/Orderdriver';
import TestMap from './page/test/TestMap';
import Fixed from './page/Fixed';
import Fixedadd from './page/Fixedadd';
import useToken from './page/useToken';

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return (
      <div className="App">
        <div className="header">
          <p className="header-text">TSMC Uber</p>
        </div>
        <Signin setToken={setToken} />
      </div>
    );
  } 
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <p className="header-text">TSMC Uber</p>
        </div>
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/menudriver" element={<MenuDriver />}></Route>
          <Route path='/order' element={<Order />}></Route>
          {/* <Route path='/signin' element={<Signin />}></Route> */}
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/profiledriver' element={<Profiledriver />}></Route>
          <Route path='/profilechange' element={<Profilechange />}></Route>
          <Route path='/payments' element={<Payments/>}></Route>
          <Route path='/Ordersearch' element={<Ordersearch />}></Route>
          <Route path='/askhelp' element={<Askhelp />}></Route>
          <Route path='/ordercomplete' element={<Ordercomplete />}></Route>
          <Route path='/orderdrivercomplete' element={<Orderdrivercomplete />}></Route>
          <Route path='/ordernext' element={<Ordernext />}></Route>
          <Route path='/orderdriver' element={<Orderdriver />}></Route>
          <Route path='/test/map' element={<TestMap />}></Route>
          <Route path='/fixed' element={<Fixed />}></Route>
          <Route path='/fixedadd' element={<Fixedadd />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
          
    );
  

  
}

export default App;
