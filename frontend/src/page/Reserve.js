import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import nextImage from '../image/next.png'
import buttonImage from '../image/back.png';
import apiImage from '../image/api.png';

function Reserve(){
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("1");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  }

  const handleChange2 = (people) => {
    setSelectedValue(people.target.value);
  }
    return (
      <>
        <div className="content" style={{ "flex-direction": "column" }}>
          <div className="profile-div" style={{ "flex-direction": "column" }}>
            <p style={{ fontSize: "calc(12px + 2vh)", paddingBottom: "1vw" }}>出發地</p>
            <button onClick={() => navigate('/reserve')} style={{ width: '85vw', marginLeft: "7.5vw",backgroundColor: "#D9D9D9"}}>
                <img src={apiImage} alt="api1" />
              <span>交通大學</span>
            </button>
            <p style={{ fontSize: "calc(12px + 2vh)" , paddingBottom: "1vw"}}>目的地</p>
            <button onClick={() => navigate('/reserve')} style={{ width: '85vw', marginLeft: "7.5vw",backgroundColor: "#D9D9D9"}}>
                <img src={apiImage} alt="api1" />
                <span>新竹火車站</span>
            </button>
            <div style={{ display: "flex", alignItems: "center" }}>
            <div className="auto-accept" style={{ paddingLeft: "30vw", marginTop: "5vh" }}>
              <label htmlFor="departuretime" className="checkbox-label">
                <input type="checkbox" id="departuretime" name="topping" value="departuretime" style={{ fontSize: "calc(12px + 1vh)" }} />
                <span style={{ fontSize: "calc(12px + 2vh)", color: "black" }}>出發時間</span>
              </label>
            </div>
            <div className="auto-accept" style={{ paddingLeft: "30vw", marginTop: "5vh" }}>
              <label htmlFor="arrivaltime" className="checkbox-label">
                <input type="checkbox" id="arrivaltime" name="topping2" value="arrivaltime" style={{ fontSize: "calc(12px + 1vh)" }} />
                <span style={{ fontSize: "calc(12px + 2vh)", color: "black" }}>抵達時間</span>
              </label>
            </div>
            </div>
            </div>
              <select onChange={(e) => handleChange(e)} style={{fontSize: "calc(12px + 1vh)" ,backgroundColor: "#D9D9D9" ,width: '85vw', marginLeft: "7.5vw"}}>
                <option value="1">1人</option>
                <option value="2">2人</option>
                <option value="3">3人</option>
                <option value="4+">4+人</option>
              </select>
          
            <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: "calc(12px + 2vh)",paddingLeft: "6vw", paddingTop: "2.5vw", paddingBottom: "2.5vw", margin: 0}}>乘客人數</p>
            <div className="auto-accept" style={{ paddingLeft: "30vw", marginTop: "5vh" }}>
              <label htmlFor="carpooling" className="checkbox-label">
                <input type="checkbox" id="carpooling" name="topping3" value="carpooling" style={{ fontSize: "calc(12px + 1vh)" }} />
                <span style={{ fontSize: "calc(12px + 2vh)", color: "black" }}>允許共乘</span>
              </label>
            </div>
            </div>
              <select onChange={(people) => handleChange2(people)} style={{fontSize: "calc(12px + 1vh)" ,backgroundColor: "#D9D9D9" ,width: '85vw', marginLeft: "7.5vw"}}>
                <option value="1">1人</option>
                <option value="2">2人</option>
                <option value="3">3人</option>
                <option value="4+">4+人</option>
              </select>
          
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
