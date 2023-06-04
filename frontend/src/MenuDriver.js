import React from 'react';
import profileImage from './image/people.png';
import { useNavigate } from 'react-router-dom';
import fixedImage from './image/fixed.png';
import orderdriverImage from './image/orderdriver.png'
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
                <img className="ges-icon" src={fixedImage} alt="fixed" />
            </button>
            <button onClick={() => navigate('/orderdriver')} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img className="ges-icon" src={orderdriverImage} alt="Order" />
            </button >
            <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img className="ges-icon" src={profileImage} alt="Profile" />
            </button>
        </div>
    </>
    );
}

export default Menu;
