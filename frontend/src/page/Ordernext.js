import React from "react";
import checkImage from '../image/check.png'
import { useNavigate } from 'react-router-dom';

function Ordernext(){
    const navigate = useNavigate();
    return (
      <div style={{ position: 'absolute', top: '744px', left: '0px', width: '390px', height: '100px' }}>
        <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}>
          <button onClick={() => navigate('/ordercomplete')} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img style={{ width: '50px', height: '50px',position: 'absolute', top: '25px', left: '160px' }} src={checkImage} alt="Check" />
          </button>
        </div>
      </div>
      );
}

export default Ordernext;