import React from "react";
import LocationChooseMap from './map/LocationChooseMap';
import markImage from '../image/mark.png'
import { useNavigate } from 'react-router-dom';
function Locationchoose(){
  const navigate = useNavigate();
  return (
    <div style={{ position: 'relative' }}>
      <LocationChooseMap />
      <div>
        <img src={markImage} height="60" style={{ height: '80',  position: 'absolute',  top: '45%',  left: '45%'}}/>
      </div>
    </div>
  );
}

export default Locationchoose;