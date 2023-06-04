import React from "react";
import Map from './Map';
import { useNavigate } from 'react-router-dom';
function TestMap(){
  const navigate = useNavigate();
  return (
    <div>
      <Map />
    </div>
  );
}

export default TestMap;