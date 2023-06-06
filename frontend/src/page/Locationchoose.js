import React from "react";
import LocationChooseMap from './map/LocationChooseMap';
import markImage from '../image/mark.png'
import { useNavigate, useLocation} from 'react-router-dom';
import checkImage from '../image/check.png'
function Locationchoose(){
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  return (
    <div style={{ position: 'relative' }}>
      <LocationChooseMap />
      <div>
        <img src={markImage} height="60" style={{ height: '80',  position: 'absolute',  top: '45%',  left: '45%'}}/>
      </div>
      <div className="menu-gesture">
        <button onClick={() => navigate('/order', {state:{id:2,name:'hehe'}})} style={{ background: 'none', border: 'none', padding: 0}}>
        <img className="ges-icon" src={checkImage} alt="Check" />
          </button>
        </div>
    </div>
  );
}

export default Locationchoose;