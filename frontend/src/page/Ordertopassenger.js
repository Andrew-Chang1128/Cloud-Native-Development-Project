import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import homeImage from '../image/home.png';
import plusImage from '../image/plus.png'
import '../App.css';

function Ordertopassenger(){
  const navigate = useNavigate();
  const [divElements, setDivElements] = useState([]);
  const backend_url = process.env.REACT_APP_BACKEND_URL;

  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

  useEffect(() => {
    fetch(backend_url+'/route', {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
    }).then(async (response) => {
        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            const generatedDivs = data.map(item => {
              let datetime = new Date(item.startTime);
              let timeString = pad(datetime.getHours(),2) + ":" + pad(datetime.getMinutes(),2);
              let departure = item.routeList[0].loc;
              let destination = item.routeList[item.routeList.length - 1].loc;
              let status = [];
              const weekdays = {
                "Sunday": "週日",
                "Monday": "週一",
                "Tuesday": "週二",
                "Wednesday": "週三",
                "Thursday": "週四",
                "Friday": "週五",
                "Saturday": "週六"
              };

              Object.keys(weekdays).map((key) => {
                if (item.dayOfWeek.includes(key)) {
                  status.push(weekdays[key]);
                }
              });
                return (
                    <div class="orderItem">
                      <div class="departure">{departure} → {destination}</div>
                      {/* <div class="destination">{destination}</div> */}
                      <div class="timeString">{timeString} 出發</div>
                      <div class="Status">{status.join("、")}</div>
                    </div>
                );
            });
            setDivElements(generatedDivs);
        } else if (response.status === 401) {
            alert("Unauthorized");
        }
    })
}, []);
  return (
    <>
       <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ fontSize: "4vh", paddingLeft: "6vw", paddingTop: "2.5vw", paddingBottom: "2.5vw", margin: 0, whiteSpace: "nowrap" }}>尚未修改</p>
          <button onClick={() => navigate('/fixedadd')} style={{ position: "relative", paddingLeft: "30vw", paddingTop: "2.5vw", paddingBottom: "2.5vw", backgroundColor: "white", border: "none", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <img src={plusImage} alt="Plus" />
            <span style={{ fontSize: "2vh" }}>新增</span>
          </button>
        </div>

      <div className="content" style={{ "flex-direction": "column" }}>

                <div className="profile-button">
                    {divElements}
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

export default Ordertopassenger;