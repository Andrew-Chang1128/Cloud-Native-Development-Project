import React from "react";
import { useNavigate } from 'react-router-dom';
import homeImage from '../image/home.png'
import '../App.css'
import checkImage from '../image/check.png'

function Grading(){
    const navigate = useNavigate();
    return (
      <>
        <div className="content" style={{ "flex-direction": "column",marginTop: "10vw" }}>
          <div className="profile-button">
            <button className="orderItem" onClick={() => navigate('/menu')}>
                <span>★</span>
            </button>
            <button className="orderItem" onClick={() => navigate('/menu')}>
                <span>★★</span>
            </button>
            <button className="orderItem" onClick={() => navigate('/menu')}>
                <span>★★★</span>
            </button>
            <button className="orderItem" onClick={() => navigate('/menu')}>
                <span>★★★★</span>
            </button>
            <button className="orderItem" onClick={() => navigate('/menu')}>
                <span>★★★★★</span>
            </button>
          </div>
          
        </div>
        
        <div className="menu-gesture">
          <button onClick={() => navigate('/menu')} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img className="ges-icon" src={homeImage} alt="Home" />
          </button>
        </div>
    </>
    );
}

export default Grading
