import React from "react";
import { useNavigate } from 'react-router-dom';
import homeImage from '../image/home.png'
import '../App.css'
import profilechangeImage from '../image/profilechange.png'
import paymentImage from '../image/payment.png'
import ordersearchImage from '../image/ordersearch.png'
import askhelpImage from '../image/askhelp.png'

function Profile(){
    const navigate = useNavigate();
    return (
       
        <div className="profile-buttons">

          <div>
            <p style={{ fontSize: '50px', position: 'absolute', top: '125px', left: '50px' }}>王小明</p>
            <p style={{ fontSize: '20px', position: 'absolute', top: '200px', left: '125px' }}>搭乘趟數: 10</p>
            <p style={{ fontSize: '20px', position: 'absolute', top: '250px', left: '125px' }}>搭乘里數: 85 km</p>
            <p style={{ fontSize: '20px', position: 'absolute', top: '300px', left: '125px' }}>獲得評價: 5</p>
          </div>
          <button onClick={() => navigate('/profilechange')} style={{ background: 'gray', border: 'none', padding: 0,position: 'absolute', top: '350px', left: '75px', width: '250px', height: '50px'  }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img style={{ width: '50px', height: '50px' }} src={profilechangeImage} alt="Profilechange" />
              <span style={{ marginLeft: '50px'}}>修改資訊</span>
            </div>
          </button>
          <button onClick={() => navigate('/payments')} style={{ background: 'gray', border: 'none', padding: 0 ,position: 'absolute', top: '425px', left: '75px', width: '250px', height: '50px'  }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img style={{ width: '50px', height: '50px' }} src={paymentImage} alt="Payments" />
              <span style={{ marginLeft: '50px'}}>付款資訊</span>
            </div>
          </button>
          <button onClick={() => navigate('/ordersearch')} style={{ background: 'gray', border: 'none', padding: 0 ,position: 'absolute', top: '500px', left: '75px', width: '250px', height: '50px'  }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img style={{ width: '50px', height: '50px' }} src={ordersearchImage} alt="Ordersearch" />
              <span style={{ marginLeft: '50px'}}>訂單查詢</span>
            </div>
          </button>
          <button onClick={() => navigate('/askhelp')} style={{ background: 'gray', border: 'none', padding: 0,position: 'absolute', top: '575px', left: '75px', width: '250px', height: '50px'  }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img style={{ width: '50px', height: '50px' }} src={askhelpImage} alt="Askhelp" />
              <span style={{ marginLeft: '50px'}}>尋求協助</span>
            </div>
          </button>

          <div style={{ position: 'absolute', top: '744px', left: '0px', width: '390px', height: '100px' }}>
            <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}>
                <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img style={{ width: '50px', height: '50px',position: 'absolute', top: '25px', left: '160px' }} src={homeImage} alt="Home" />
                </button>
            </div>
          </div>
            
            
          
        </div>
    
      );
}

export default Profile