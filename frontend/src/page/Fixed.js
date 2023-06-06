import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import homeImage from '../image/home.png';
import plusImage from '../image/plus.png'
import '../App.css';

function Fixed(){
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
        <p style={{ fontSize: "calc(12px + 4vh)", paddingLeft: "6vw", paddingTop: "2.5vw", paddingBottom: "2.5vw", margin: 0 }}>固定路線</p>
        <button onClick={() => navigate('/fixedadd')} style={{ position: "relative", paddingLeft: "50vw", paddingTop: "2.5vw", paddingBottom: "2.5vw", backgroundColor: "white", border: "none", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <img src={plusImage} alt="Plus" />
          <span style={{ fontSize: "calc(10px + 1vh)" }}>新增</span>
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
/* <div>
       <p style={{ fontSize: '50px', position: 'absolute', top: '125px', left: '50px' }}>訂單查詢</p>

      <div style={{ position: 'absolute', top: '744px', left: '0px', width: '390px', height: '100px' }}>
        <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}>
          <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
            <img style={{ width: '25px', height: '50px', position: 'absolute', top: '20px', left: '180px' }} src={buttonImage} alt="Back" />
          </button>
        </div>
      </div>
    </div> */
export default Fixed;