import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import homeImage from '../image/home.png'
import messageImage from '../image/message.png'
import cellphoneImage from '../image/cellphone.png'


function OrderComplete() {
  const navigate = useNavigate();
  const location = useLocation();
  // location.state = {
  //   orderId: 3,
  //   date: new Date(),
  //   depart: 'HEHE'
  // }
  const orderId = location.state.orderId || 0;
  const date = new Date(location.state.date) || new Date();
  const depart = location.state.depart || '';
  console.log(location.state);

  const handleClick = () => {
    window.location.replace('tel:0988-464-283');
  };

  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

  return (
    <>
        <div className="content" style={{ "flex-direction": "column" }}>
          <div className="profile-div" style={{ "flex-direction": "column" }}>
            <p>訂單已成立</p>
            <p>請於 {date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()} {pad(date.getHours(),2) + ":" + pad(date.getMinutes(),2)} 至指定搭車地點 "{depart}" 等候。</p>
          </div>
          <div className="profile-button" style={{ paddingTop: "calc(20px + 15vh)" }}>
          <button onClick={() => navigate('/grading', {
                    state: {
                        orderId: orderId,
                        date: date
                    }
                })} className="orderItem" style={{justifyContent:"center"}}>
                <span style={{padding:"0"}}>★給點評價</span>
            </button>
            <button onClick={handleClick} className="orderItem" >
                <img src={cellphoneImage} alt="Cellphone"/>
                <span >致電司機</span>
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

export default OrderComplete;

