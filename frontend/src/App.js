import './App.css';
import Menu from './Menu';
import MenuDriver from './MenuDriver';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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
import Fixed from './page/Fixed';
import Fixedadd from './page/Fixedadd';
import useToken from './page/useToken';
import Fixedcomplete from './page/Fixedcomplete';
import Reserve from './page/Reserve';
import Mycar from './page/Mycar';
import driverImage from './image/driver.png'
import passengerImage from './image/passenger.png'
import TestMap from './page/test/TestMap';
import TestMap2 from './page/test/TestMap2';
import Locationchoose from './page/Locationchoose';
import Passroute from './page/Passroute';
import Fixedtoorder from './page/Fixedtoorder';
import Ordertopassenger from './page/Ordertopassenger';

function App() {
  const { token, setToken } = useToken();
  const location = useLocation();
  console.log(location)
  const handleClick = () => {
    window.location.replace('./menudriver');
  };

  const handleClick2 = () => {
    window.location.replace('./menu');
  };

  if (!token) {
    return (
      <div className="App">
        <div className="header">
          <p className="header-text">TSMC Uber</p>
        </div>
        <Signin setToken={setToken} />
      </div>
    );
  }

  let checkid;

  if (window.location.pathname === '/menu' || window.location.pathname === '/') {
    localStorage.setItem("pattern", "passenger");
    checkid = (
      <div className="header">
        <p className="header-text" >TSMC Uber</p>
        <button
          className="driver-button"
          onClick={handleClick}
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <img className="ges-icon" src={driverImage} alt="driver" />
        </button>
      </div>
    );
  } else if (window.location.pathname === '/menudriver') {
    localStorage.setItem("pattern", "driver");
    checkid = (
      <div className="header">
        <p className="header-text">TSMC Uber</p>
        <button
          className="driver-button"
          onClick={handleClick2}
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <img className="ges-icon" src={passengerImage} alt="passenger" />
        </button>
      </div>
    );
  } else {
    if(localStorage.getItem("pattern") === "driver") {
      checkid = (
        <div className="header">
          <span className="header-text" onClick={handleClick}>TSMC Uber</span>
        </div>
      );
    } else {
      checkid = (
        <div className="header">
          <span className="header-text" onClick={handleClick2}>TSMC Uber</span>
        </div>
      );
    }
  }

  return (
    
      <div className="App">
        {checkid}
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menudriver" element={<MenuDriver />} />
          <Route path="/order" element={<Order />} />
          {/* <Route path='/signin' element={<Signin />}></Route> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profiledriver" element={<Profiledriver />} />
          <Route path="/profilechange" element={<Profilechange />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/Ordersearch" element={<Ordersearch />} />
          <Route path="/askhelp" element={<Askhelp />} />
          <Route path="/ordercomplete" element={<Ordercomplete />} />
          <Route path="/orderdrivercomplete" element={<Orderdrivercomplete />} />
          <Route path="/ordernext" element={<Ordernext />} />
          <Route path="/orderdriver" element={<Orderdriver />} />
          <Route path="/fixed" element={<Fixed />} />
          <Route path="/fixedadd" element={<Fixedadd />} />
          <Route path="/fixedcomplete" element={<Fixedcomplete />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/mycar" element={<Mycar />} />
          <Route path="/test/map" element={<TestMap />} />
          <Route path="/test/map2" element={<TestMap2 />} />
          <Route path="/locationchoose" element={<Locationchoose />} />
          <Route path="/passroute" element={<Passroute />} />
          <Route path="/fixedtoorder" element={<Fixedtoorder />} />
          <Route path="/ordertopassenger" element={<Ordertopassenger />} />
        </Routes>
      </div>
   
  );
}

export default App;
