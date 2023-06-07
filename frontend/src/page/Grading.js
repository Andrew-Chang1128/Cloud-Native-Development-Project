import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import homeImage from '../image/home.png'
import '../App.css'
import checkImage from '../image/check.png'

function Grading(){
    const navigate = useNavigate();
    const location = useLocation();

    function rating(rate){
      var receiver = location.state.orderId;
      fetch(process.env.REACT_APP_BACKEND_URL + '/user/star', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ receiver, rate }),
      }).then(async (response) => {
        console.log(response);
        navigate('/menu');
      })
    }
    return (
      <>
        <div className="content" style={{ "flex-direction": "column",marginTop: "10vw" }}>
          <div className="profile-button">
            <button className="orderItem" onClick={() => rating(1)} style={{justifyContent:"center"}} >
                <span style={{padding:"0"}}>★</span>
            </button>
            <button className="orderItem" onClick={() => rating(2)} style={{justifyContent:"center"}} >
                <span style={{padding:"0"}}>★★</span>
            </button>
            <button className="orderItem" onClick={() => rating(3)} style={{justifyContent:"center"}} >
                <span style={{padding:"0"}}>★★★</span>
            </button>
            <button className="orderItem" onClick={() => rating(4)} style={{justifyContent:"center"}} >
                <span style={{padding:"0"}}>★★★★</span>
            </button>
            <button className="orderItem" onClick={() => rating(5)} style={{justifyContent:"center"}} >
                <span style={{padding:"0"}}>★★★★★</span>
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
