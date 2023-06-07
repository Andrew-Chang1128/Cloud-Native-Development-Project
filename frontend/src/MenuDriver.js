import React from 'react';
import profileImage from './image/people.png';
import { useNavigate } from 'react-router-dom';
import fixedImage from './image/fixed.png';
import orderdriverImage from './image/orderdriver.png'
import './App.css'

import HomeMap from './page/map/HomeMap';

function MenuDriver() {
    const navigate = useNavigate();
    return (
     <>
        <div className="content">
        <HomeMap />
        </div>
        <div className="menu-gesture">
            <button onClick={() => navigate('/fixed')} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img className="ges-icon" src={fixedImage} alt="fixed" />
            </button>
            <button onClick={() => navigate('/mycar')} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img className="ges-icon" src={orderdriverImage} alt="Orderdriver" />
            </button >
            <button onClick={() => navigate('/profiledriver')} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img className="ges-icon" src={profileImage} alt="Profiledriver" />
            </button>
        </div>
    </>
    );
}

export default MenuDriver;
