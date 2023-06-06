import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSearchParams} from "react-router-dom"
import homeImage from '../image/home.png';
import '../App.css';

function Passroute(){
  const navigate = useNavigate();
  const [divElements, setDivElements] = useState([]);
  const backend_url = process.env.REACT_APP_BACKEND_URL;
  const [searchParams, setSearchParams] = useSearchParams();


  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

  let routeid = searchParams.get("routeid");

  useEffect(() => {
    fetch(backend_url+'/route/order/'+routeid, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
    }).then(async (response) => {
        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            const generatedDivs = data.map(item => {
                let dt = new Date(item.datetime);

                console.log(dt);
                return (
                  <button className="orderItem"  onClick={() => navigate("/order")} style={{alignContent:"center", justifyContent:"center"}}>
                    <div   key={item.orderId}>
                      <div>{dt.toLocaleString()}</div>
                    </div>
                  </button>
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
          <p style={{ fontSize: "4vh", paddingLeft: "6vw", paddingTop: "2.5vw", paddingBottom: "2.5vw", margin: 0, whiteSpace: "nowrap" }}>固定路線</p>
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
export default Passroute;