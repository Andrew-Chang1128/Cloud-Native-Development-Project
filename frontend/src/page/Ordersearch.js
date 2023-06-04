import React from "react";
import { useNavigate } from 'react-router-dom';
import buttonImage from '../image/back.png';
import '../App.css';

function Ordersearch(){
  const navigate = useNavigate();
  return (
    <>
        <div className="content" style={{ "flex-direction": "column" }}>
          <div className="profile-div" style={{ "flex-direction": "column" }}>
            <h1>訂單查詢</h1>
          </div>
          <div className="profile-button">
            <button onClick={() => navigate('/ordersearch')}>
              <p className="inner">1</p>
              <p className="inner">2</p>
              <p className="inner">3</p>
              <p className="inner">4</p>
            </button>
            <button onClick={() => navigate('/ordersearch')}>
                <span>付款資訊</span>
            </button>
            <button onClick={() => navigate('/ordersearch')}>
                <span>付款資訊</span>
            </button>
          </div>
        
        </div>
        
        <div className="menu-gesture">
          <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img className="ges-icon" src={buttonImage} alt="Back" />
          </button>
        </div>
    </>
  );
}
/* <div>
       <p style={{ fontSize: '50px', position: 'absolute', top: '125px', left: '50px' }}>訂單查詢</p>

      <div style={{ position: 'absolute', top: '744px', left: '0px', width: '390px', height: '100px' }}>
        <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}>
          <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
            <img style={{ width: '25px', height: '50px', position: 'absolute', top: '20px', left: '180px' }} src={buttonImage} alt="Back" />
          </button>
        </div>
      </div>
    </div> */
export default Ordersearch;