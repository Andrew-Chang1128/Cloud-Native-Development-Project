import React from "react";
import Map2 from './Map2';
import { useNavigate } from 'react-router-dom';
function TestMap2(){
  const navigate = useNavigate();
  return (
    <div style={{ position: 'relative' }}>
      <Map2 />
    </div>
  );
}

export default TestMap2;