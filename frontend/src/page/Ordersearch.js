import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import buttonImage from '../image/back.png';
import '../App.css';

function Ordersearch() {
    const navigate = useNavigate();
    const [divElements, setDivElements] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/route/reservation', {
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
                            <div class="timeString">{timeString}</div>
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
            <div className="content" style={{ "flex-direction": "column" }}>
                <div className="profile-div" style={{ "flex-direction": "column" }}>
                    <h1>訂單查詢</h1>
                </div>
                <div className="profile-button">
                    {divElements}
                </div>

            </div>

            <div className="menu-gesture">
                <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img className="ges-icon" src={buttonImage} alt="Back" />
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
export default Ordersearch;