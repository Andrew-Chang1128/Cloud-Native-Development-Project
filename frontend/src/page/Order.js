import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import nextImage from '../image/next.png'
import buttonImage from '../image/back.png';
import apiImage from '../image/api.png';

import H from "@here/maps-api-for-javascript";

function Order() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);

    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }
    const [depart, setDepart] = useState('');
    const handleInputDepartChange = (depart) => {
        setDepart(depart.target.value);
    };
    const [destination, setDestination] = useState('');
    const handleInputChange = (event) => {
        setDestination(event.target.value);
    };

    async function reverseGeocode(lat, lng){
      var re = '';
      await fetch('https://revgeocode.search.hereapi.com/v1/revgeocode?apiKey='+
          process.env.REACT_APP_HERE_MAP_APIKEY+
          '&at='+lat.toString()+','+lng.toString(), {
          method: 'GET'
      }).then(async (response) => {
          if (response.status === 200) {
              const data = await response.json();
              console.log(data);
              if(data.items.length > 0){
                re = data.items[0].title;
              }
          }else {
              console.log("Status Code:", response.status);
          }
      }).catch(function(error) {
          console.log('error = ' + error)
      });
      return re;
    }

    async function calculateRoute(points){
        const pstr = points.map(x => x[0].toString()+','+x[1].toString());
        var spstr = '';
        if (pstr.length > 2){
            spstr = "&via=" + pstr.slice(1,-1).join("!passThrough=true&via=")+'!passThrough=true';
        }
        var re = {};
        await fetch('https://router.hereapi.com/v8/routes?apiKey='+
            process.env.REACT_APP_HERE_MAP_APIKEY+
            '&transportMode=car&origin='+pstr[0]+'&destination='+pstr.slice(-1)[0]+
            '&return=travelSummary', {
            method: 'GET'
        }).then(async (response) => {
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                // console.log(data.routes[0].sections[0].travelSummary);
                re = data.routes[0].sections[0].travelSummary;
            }else {
                console.log("Status Code:", response.status);
            }
        }).catch(function(error) {
            console.log('error = ' + error)
        });
        // console.log(re);
        return re;
    }
    var stops = [[25.02940176238104, 121.50055862568333], 
        [25.048876668724624,121.50619014148239], 
        [25.03991282424907,121.51290273721504]];
    calculateRoute(stops);
    
    return (
        <>
            <div className="content" style={{ "flex-direction": "column" }}>
                <div className="content" style={{ flexDirection: "column" }}>
                    <p style={{ fontSize: "3vh", paddingBottom: "1vw" }}>出發地</p>
                    <div>
                        <input type="text" id="depart" name="depart" value={depart} onChange={handleInputDepartChange} style={{ fontSize: "3vh", width: '60vw', marginLeft: "7.5vw" }} />
                        <button onClick={() => navigate('/locationchoose', { state: { id: 1, name: 'sabaoon' } })} style={{ height: '4vh', width: '5vw', marginTop: "-2.5vh", border: "None", backgroundColor: "white", position: 'relative', top: '1vh' }}>
                            <img src={apiImage} alt="api1" />
                        </button>
                    </div>

                    <p style={{ fontSize: "3vh", paddingBottom: "1vw" }}>目的地</p>
                    <div>
                        <input type="text" id="destination" name="destination" value={destination} onChange={handleInputChange} style={{ fontSize: "3vh", width: '60vw', marginLeft: "7.5vw" }} />
                        <button onClick={() => navigate('/locationchoose')} style={{ height: '4vh', width: '5vw', marginTop: "-2.5vh", border: "None", backgroundColor: "white", position: 'relative', top: '1vh' }}>
                            <img src={apiImage} alt="api2" />
                        </button>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ fontSize: "3vh", paddingLeft: "6vw", paddingTop: "2.5vw", paddingBottom: "2.5vw", margin: 0 }}>乘客人數</p>
                    <div className="auto-accept" style={{ paddingLeft: "30vw", marginTop: "5vh" }}>
                        <label htmlFor="carpooling" className="checkbox-label">
                            <input type="checkbox" id="carpooling" name="topping3" value="carpooling" style={{ fontSize: "2vh" }} />
                            <p style={{ fontSize: "3vh)", color: "black" }}>允許共乘</p>
                        </label>
                    </div>
                </div>
                <select onChange={(e) => handleChange(e)} style={{ fontSize: "1vh", backgroundColor: "#D9D9D9", width: '85vw', marginLeft: "7.5vw" }}>
                    <option value="1">1人</option>
                    <option value="2">2人</option>
                    <option value="3">3人</option>
                    <option value="4">4人</option>
                    <option value="5">5人</option>
                    <option value="6">6人</option>
                    <option value="7">7人</option>
                    <option value="8">8人</option>
                </select>

                <div className="profile-div" style={{ "flex-direction": "column", paddingTop: "15vh" }}>
                    <p>出發時間: 12 : 22</p>
                    <p>抵達時間: 12 : 57</p>
                    <p>預估車資: 80元</p>
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
        </>

    );
}

export default Order;

/* <div className="profile-buttons">
          <p style={{ fontSize: '30px', position: 'absolute', top: '125px', left: '50px' }}>出發地</p>

          <p style={{ fontSize: '30px', position: 'absolute', top: '225px', left: '50px' }}>目的地</p>

          <p style={{ fontSize: '30px', position: 'absolute', top: '325px', left: '50px' }}>出發時間</p>

          <p style={{ fontSize: '30px', position: 'absolute', top: '425px', left: '50px' }}>抵達時間</p>

          <p style={{ fontSize: '30px', position: 'absolute', top: '525px', left: '50px' }}>乘客人數</p>




        
      <div style={{ position: 'absolute', top: '744px', left: '0px', width: '390px', height: '100px' }}>
            <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}>
                <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img style={{ width: '25px', height: '50px', position: 'absolute', top: '25px', left: '80px' }} src={buttonImage} alt="Back" />
                </button>
                <button onClick={() => navigate('/Ordernext')} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img style={{ width: '25px', height: '50px', position: 'absolute', top: '25px', left: '290px' }} src={nextImage} alt="Next" />
                </button>
            </div>
      </div>


    </div> */