import React from "react";
import { useNavigate } from 'react-router-dom';
import homeImage from '../image/home.png'
import '../App.css'
import profilechangeImage from '../image/profilechange.png'
import paymentImage from '../image/payment.png'
import ordersearchImage from '../image/ordersearch.png'
import askhelpImage from '../image/askhelp.png'
import profileImage from '../image/people.png';

function Profiledriver(){
    const navigate = useNavigate();
    return (
      <>
        <div className="content" style={{ "flex-direction": "column" }}>
          <div className="profile-div" style={{ "flex-direction": "column" }}>
            <h1>張小華</h1>
            <p>駕駛趟數: 38</p>
            <p>駕駛里程: 276 km</p>
            <p>獲得評價: 4.9</p>
          </div>
          <div className="profile-button">
            <button onClick={() => navigate('/profilechange')}>
              <img src={profilechangeImage} alt="Profilechange" />
              <span>修改資訊</span>
            </button>
            <button onClick={() => navigate('/payments')}>
                <img src={paymentImage} alt="Payments" />
                <span>付款資訊</span>
            </button>
            <button onClick={() => navigate('/ordersearch')}>
                <img src={ordersearchImage} alt="Ordersearch" />
                <span>訂單查詢</span>
            </button>
            <button onClick={() => navigate('/askhelp')}>
                <img src={askhelpImage} alt="Askhelp" />
                <span>尋求協助</span>
            </button>
            <button onClick={() => {localStorage.removeItem('token');navigate('/menu');window.location.reload(false);}}>
                <img src={profileImage} alt="logout" />
                <span>登出</span>
            </button>
          </div>
        </div>
        
        <div className="menu-gesture">
          <button onClick={() => navigate('/menudriver')} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img className="ges-icon" src={homeImage} alt="Home" />
          </button>
        </div>
    </>
    );
}

export default Profiledriver
