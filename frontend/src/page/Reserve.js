import React from "react";
import { useNavigate } from 'react-router-dom';
import nextImage from '../image/next.png'
import buttonImage from '../image/back.png';
import apiImage from '../image/api.png';
function Reserve(){
  const navigate = useNavigate();
  const handleChange = (e) => {
    this.setState({ selectedValue: e.target.value })
  }
    return (
      <>
        <div className="content" style={{ "flex-direction": "column" }}>
          <div className="profile-div" style={{ "flex-direction": "column" }}>
            <p>出發地</p>
            <button onClick={() => navigate('/order')} style={{ width: '85vw', marginLeft: "7.5vw"}}>
                <img src={apiImage} alt="api1" />
              <span>交通大學</span>
            </button>
            <p>目的地</p>
            <button onClick={() => navigate('/order')} style={{ width: '85vw', marginLeft: "7.5vw"}}>
                <img src={apiImage} alt="api1" />
                <span>新竹火車站</span>
            </button>
            <p style={{ fontSize: "calc(12px + 2vh)" }}>最大乘客人數</p>
              <select onChange={(e) => handleChange2(e)} style={{fontSize: "calc(12px + 1vh)" ,backgroundColor: "#D9D9D9" }}>
                <option value="1">1人</option>
                <option value="2">2人</option>
                <option value="3">3人</option>
                <option value="4+">4+人</option>
              </select>
          </div>
          <div className="profile-div" style={{ "flex-direction": "column", paddingTop: "15vh" }}>
            <p>4/20的預約行程</p>
            <p>出發時間: 14 : 50</p>
            <p>抵達時間: 14 : 59</p>
            <p>預估車資: 75元</p>
          </div>
          
        </div>
        
        <div className="menu-gesture">
          <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0}}>
              <img className="ges-icon" src={buttonImage} style={{ marginRight: '40vw' }} alt="Back" />
          </button>
          <button onClick={() => navigate('/ordercomplete')} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img className="ges-icon" src={nextImage} alt="Next" />
          </button>
        </div>
    </>
        
    );
}

export default Reserve;
