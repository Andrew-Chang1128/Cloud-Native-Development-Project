import React from 'react';
import profileImage from './image/people.png';
import { useNavigate } from 'react-router-dom';
import signinImage from './image/signin.png'
import orderImage from './image/order.png'
import './App.css'
function Header() {
    const navigate = useNavigate();
  return (
     

     <div className="profile-buttons">
      <div style={{ position: 'absolute', top: '744px', left: '0px', width: '390px', height: '100px' }}>
            <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}>
                <button onClick={() => navigate('/order')} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img style={{ width: '50px', height: '50px',position: 'absolute', top: '25px', left: '160px' }} src={orderImage} alt="Order" />
                </button>
                <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img style={{ width: '50px', height: '50px', position: 'absolute', top: '25px', left: '270px' }} src={profileImage} alt="Profile" />
                </button>
                <button onClick={() => navigate('/signin')} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img style={{ width: '50px', height: '50px', position: 'absolute', top: '25px', left: '50px' }} src={signinImage} alt="Signin" />
                </button>
            </div>
      </div>


    </div>
  );
}

export default Header;
