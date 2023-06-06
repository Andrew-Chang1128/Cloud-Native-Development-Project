import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import homeImage from '../image/home.png';
import plusImage from '../image/plus.png'
import '../App.css';

function Fixed(){
  const navigate = useNavigate();
  const [divElements, setDivElements] = useState([]);
  const backend_url = process.env.REACT_APP_BACKEND_URL;
  
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
                let datetime = new Date(item.datetime);
                let dateString = datetime.getFullYear() + "/" + (datetime.getMonth() + 1) + "/" + datetime.getDate();
                let timeString = datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds();
                let status;

                let curtime = new Date();
                if (curtime > datetime) {
                    status = "已完成";
                } else {
                    status = "已預約";
                }

                return (
                    <div class="orderItem">
                        <div class="dateString">{dateString}</div>
                        <div class="orderStatus">{status}</div>
                        <div class="timeString">{timeString} </div>
                        <div class="orderFee">{item.passenger[0].fee}</div>
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