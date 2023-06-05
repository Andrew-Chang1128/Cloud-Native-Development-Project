import React from "react";
import Map from './Map';
import markImage from '../../image/mark.png'
import { useNavigate } from 'react-router-dom';
function TestMap(){
  const navigate = useNavigate();
  return (
    <div style={{ position: 'relative' }}>
      <Map />
      <div>
        <img src={markImage} height="60" style={{ height: '80',  position: 'absolute',  top: '45%',  left: '45%'}}/>
      </div>
    </div>
  );
}

export default TestMap;