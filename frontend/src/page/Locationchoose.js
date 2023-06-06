import React from "react";
import LocationChooseMap from './map/LocationChooseMap';
import markImage from '../image/mark.png'
import { useNavigate, useLocation} from 'react-router-dom';
import checkImage from '../image/check.png'
function Locationchoose(){
  const ref = React.useRef();

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  function click(){
    var cnt = ref.current.map.getCenter();
    console.log('CC Center at ', cnt.lat, cnt.lng);
    navigate('/order', {state:{id:2,name:'hehe'}});
  }
  return (
    <div style={{ position: 'relative' }}>
      <LocationChooseMap ref={ref}/>
      <div>
        <img src={markImage} height="60" style={{ height: '80',  position: 'absolute',  top: '45%',  left: '45%'}}/>
      </div>
      <div className="menu-gesture">
        <button onClick={() => click()} style={{ background: 'none', border: 'none', padding: 0}}>
        <img className="ges-icon" src={checkImage} alt="Check" />
          </button>
        </div>
    </div>
  );
}

export default Locationchoose;