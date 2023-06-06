import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import nextImage from '../image/next.png'
import buttonImage from '../image/back.png';
import apiImage from '../image/api.png';

function Reserve(){
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  }

  const handleChange2 = (people) => {
    setSelectedValue(people.target.value);
  }
  const [depart, setDepart] = useState('');
  const handleInputDepartChange = (depart) => {
    setDepart(depart.target.value);
  };
  const [destination, setDestination] = useState('');
  const handleInputChange = (event) => {
    setDestination(event.target.value);
  };
  return (
    <div className="content" style={{ flexDirection: "column" }}>
      <div className="reserve-div" style={{ flexDirection: "column" }}>
        <div className="content" style={{ flexDirection: "column" }}>
          <p style={{ fontSize: "3vh", paddingBottom: "1vw" }}>出發地</p>
          <div>
            <input type="text" id="depart" name="depart" value={depart} onChange={handleInputDepartChange} style={{ fontSize: "3vh", width: '60vw', marginLeft: "7.5vw" }} />
            <button onClick={() => navigate('/locationchoose')} style={{ height: '4vh', width: '5vw',marginTop: "-2.5vh",border:"None",backgroundColor:"white", position: 'relative', top: '1vh'}}>
              <img src={apiImage} alt="api1" />
            </button>
          </div>
  
          <p style={{ fontSize: "3vh", paddingBottom: "1vw" }}>目的地</p>
          <div>
            <input type="text" id="destination" name="destination" value={destination} onChange={handleInputChange} style={{ fontSize: "3vh", width: '60vw', marginLeft: "7.5vw" }} />
            <button onClick={() => navigate('/locationchoose')} style={{ height: '4vh', width: '5vw',marginTop: "-2.5vh",border:"None",backgroundColor:"white", position: 'relative', top: '1vh' }}>
              <img src={apiImage} alt="api2" />
            </button>
          </div>
        </div>
  
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="auto-accept" style={{ paddingLeft: "20vw", marginTop: "5vh" }}>
            <label htmlFor="departuretime" className="checkbox-label">
              <input type="checkbox" id="departuretime" name="departuretime" value="departuretime" style={{ fontSize: "1vh" }} />
              <span style={{ fontSize: "2vh", color: "black" }}>出發時間</span>
            </label>
          </div>
          <div className="auto-accept" style={{ paddingLeft: "20vw", marginTop: "5vh" }}>
            <label htmlFor="arrivaltime" className="checkbox-label">
              <input type="checkbox" id="arrivaltime" name="arrivaltime" value="arrivaltime" style={{ fontSize: "1vh" }} />
              <span style={{ fontSize: "2vh", color: "black" }}>抵達時間</span>
            </label>
          </div>
        </div>
  
        <select onChange={handleChange} style={{ fontSize: "1vh", backgroundColor: "#D9D9D9", width: '85vw', marginLeft: "7.5vw" }}>
          <option value="1">1人</option>
          <option value="2">2人</option>
          <option value="3">3人</option>
          <option value="4+">4+人</option>
        </select>
  
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ fontSize: "3vh", paddingLeft: "6vw", paddingTop: "2.5vw", paddingBottom: "2.5vw", margin: 0 }}>乘客人數</p>
          <div className="auto-accept" style={{ paddingLeft: "20vw", marginTop: "5vh" }}>
            <label htmlFor="carpooling" className="checkbox-label">
              <input type="checkbox" id="carpooling" name="carpooling" value="carpooling" style={{ fontSize: "1vh" }} />
              <span style={{ fontSize: "2vh", color: "black" }}>允許共乘</span>
            </label>
          </div>
        </div>
  
        <select onChange={handleChange2} style={{ fontSize: "1vh", backgroundColor: "#D9D9D9", width: '85vw', marginLeft: "7.5vw" }}>
          <option value="1">1人</option>
          <option value="2">2人</option>
          <option value="3">3人</option>
          <option value="4">4人</option>
          <option value="5">5人</option>
          <option value="6">6人</option>
          <option value="7">7人</option>
          <option value="8">8人</option>
        </select>
  
        <div className="profile-div" style={{ flexDirection: "column", paddingTop: "15vh" }}>
          <p>4/20的預約行程</p>
          <p>出發時間: 14 : 50</p>
          <p>抵達時間: 14 : 59</p>
          <p>預估車資: 75元</p>
        </div>
      </div>
  
      <div className="menu-gesture">
        <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
          <img className="ges-icon" src={buttonImage} style={{ marginRight: '40vw' }} alt="Back" />
        </button>
        <button onClick={() => navigate('/ordercomplete')} style={{ background: 'none', border: 'none', padding: 0 }}>
          <img className="ges-icon" src={nextImage} alt="Next" />
        </button>
      </div>
    </div>
  );
  
}

export default Reserve;
