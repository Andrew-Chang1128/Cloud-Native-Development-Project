import React, {useState, useEffect} from "react";
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

    const [name, setName] = useState("王小明");
    const [round, setRound] = useState(10);
    const [rate, setRate] = useState(5.0);

    fetch(process.env.REACT_APP_BACKEND_URL + '/user', {
      method: 'GET',
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
      }).then(async (response) => {
          if (response.status === 200) {
              const data = await response.json();
              console.log(data);
              var round = 0, sum = 0;
              for(let i of data.stars){
                if(Number.isInteger(i)){
                  round += 1;
                  sum += i;
                }
              }
              setName(data.name);
              setRound(round);
              setRate(Math.round(sum/round*10)/10 || 0.0);
          } else {
              console.log("Status Code:", response.status);
          }
      })
    return (
      <>
        <div className="content" style={{ "flex-direction": "column" }}>
          <div className="profile-div" style={{ "flex-direction": "column" }}>
            <h1>{name}</h1>
            <p>駕駛趟數: {0}</p>
            {/* <p>駕駛里程: {0}</p> */}
            <p>獲得評價: ★ {rate}</p>
          </div>
          <div className="profile-button">
            <button onClick={() => navigate('/profilechange')} className="orderItem" >
              <img src={profilechangeImage} alt="Profilechange" />
              <span>修改資訊</span>
            </button>
            <button onClick={() => navigate('/payments')} className="orderItem" >
                <img src={paymentImage} alt="Payments" />
                <span>付款資訊</span>
            </button>
            <button onClick={() => navigate('/ordersearch')} className="orderItem" >
                <img src={ordersearchImage} alt="Ordersearch" />
                <span>訂單查詢</span>
            </button>
            <button onClick={() => navigate('/askhelp')} className="orderItem" >
                <img src={askhelpImage} alt="Askhelp" />
                <span>尋求協助</span>
            </button>
            <button onClick={() => {localStorage.removeItem('token');navigate('/menu');window.location.reload(false);}} className="orderItem" >
                <img src={profileImage} alt="logout" />
                <span>人物登出</span>
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
