import React from 'react';
import profileImage from './image/people.png';
import { useNavigate } from 'react-router-dom';
import signinImage from './image/signin.png'
import orderImage from './image/order.png'
import './App.css'

function Menu() {
    const navigate = useNavigate();
    return (
     <>
        <div className="content">
            <p> map </p>
        </div>
        <div className="menu-gesture">
            <button onClick={() => navigate('/order')} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img className="ges-icon" src={signinImage} alt="Signin" />
            </button>
            <button onClick={() => navigate('/order')} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img className="ges-icon" src={orderImage} alt="Order" />
            </button >
            <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img className="ges-icon" src={profileImage} alt="Profile" />
            </button>
        </div>
    </>
    );
}

export default Menu;
