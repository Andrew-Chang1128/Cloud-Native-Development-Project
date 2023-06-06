import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import homeImage from '../image/home.png';
import plusImage from '../image/plus.png'
import '../App.css';

function Fixedtoorder(){
  const navigate = useNavigate();
  const location = useLocation();
    console.log(location.state);
  const [divElements, setDivElements] = useState([]);
  const backend_url = process.env.REACT_APP_BACKEND_URL;
  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

  useEffect(() => {
    console.log(backend_url+'/route/order/'+location.state.id.toString());
    console.log(`${localStorage.getItem('token')}`);
    fetch(backend_url+'/route/order/'+location.state.id.toString(), {
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
                let timeString = pad(datetime.getHours(),2) + ":" + pad(datetime.getMinutes(),2);
                let numofpassenger = item.passenger.length;
                let feetotal = item.passenger.reduce((accumulator, currentPassenger) => accumulator + currentPassenger.fee, 0);

            
                return (
                    <div class="orderItem">
                        <div class="dateString">{dateString}的行程</div>
                        <div class="orderStatus">{numofpassenger}人</div>
                        <div class="timeString">{timeString} 出發</div>
                        <div class="orderFee">{feetotal} 元</div>
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
          <p style={{ fontSize: "4vh", paddingLeft: "6vw", paddingTop: "2.5vw", paddingBottom: "2.5vw", margin: 0, whiteSpace: "nowrap" }}>訂單查閱</p>
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

export default Fixedtoorder;