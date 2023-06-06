import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import nextImage from '../image/next.png'
import buttonImage from '../image/back.png';
import apiImage from '../image/api.png';

import H from "@here/maps-api-for-javascript";

function Order() {
    const navigate = useNavigate();
    const location = useLocation();

    var date;
    var orderId;
    
    if (location.state != null) {
        if(location.state.from === "Passroute"){
            date = location.state.date;
            orderId = location.state.orderId;
        }else if(location.state.from === "Locationchoose"){
            date = location.state.status.date.date;
            orderId = location.state.status.orderId.orderId;
        }
        // console.log('xxx', date, orderId);
    }

    // const [date, setDate] = useState(defaultDate);
    // const handleInputDateChange = (e) => {
    //     setDate(date.target.value);
    //     console.log("date: ", e);
    // };
    
    // const [orderId, setOrderId] = useState(defaultOrderId);
    // const handleInputOrderIdChange = (e) => {
    //     setOrderId(orderId.target.value);
    //     console.log("orderId: ", e);
    // };

    async function reverseGeocode(lat, lng) {
        var re = '';
        await fetch('https://revgeocode.search.hereapi.com/v1/revgeocode?apiKey=' +
            process.env.REACT_APP_HERE_MAP_APIKEY +
            '&at=' + lat.toString() + ',' + lng.toString(), {
            method: 'GET'
        }).then(async (response) => {
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                if (data.items.length > 0) {
                    re = data.items[0].title;
                }
            } else {
                console.log("Status Code:", response.status);
            }
        }).catch(function (error) {
            console.log('error = ' + error)
        });
        return re;
    }

    let defaultDepart = '';
    let defaultDestination = '';
    let defaultIsChecked = false;
    let defaultSelectedValue = 1;

    if (location.state != null) {
        if(location.state.from === "Locationchoose"){
            if (location.state.type === 1) {
                defaultDestination = location.state.status.destination.destination;
            } else if (location.state.type === 2) {
                defaultDepart = location.state.status.depart.depart;
            }
            defaultIsChecked = location.state.status.isChecked.isChecked;
            defaultSelectedValue = location.state.status.selectedValue.selectedValue;
        }
    }

    const [depart, setDepart] = useState(defaultDepart);
    const handleInputDepartChange = (depart) => {
        setDepart(depart.target.value);
        console.log("depart: ", depart);
    };

    const [destination, setDestination] = useState(defaultDestination);
    const handleInputDestinationChange = (event) => {
        setDestination(event.target.value);
        console.log("destination: ", destination);
    };

    const [isChecked, setIsChecked] = useState(defaultIsChecked);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        console.log("isChecked: ", isChecked);
    };

    const [selectedValue, setSelectedValue] = useState(defaultSelectedValue);
    const handleSelectedChange = (e) => {
        setSelectedValue(e.target.value);
        console.log("selectedValue: ", selectedValue);
    }

    if (location.state != null) {
        console.log(location.state);
        if(location.state.from === "Locationchoose"){
            if (location.state.type === 1) {
                reverseGeocode(location.state.status.depart.lat, location.state.status.depart.lng)
                    .then(result => {
                        setDepart(result);
                    });
            } else if (location.state.type === 2) {
                reverseGeocode(location.state.status.destination.lat, location.state.status.destination.lng)
                    .then(result => {
                        setDestination(result);
                    });
            }
        }
        
    }

    async function calculateRoute(points) {
        const pstr = points.map(x => x[0].toString() + ',' + x[1].toString());
        var spstr = '';
        if (pstr.length > 2) {
            spstr = "&via=" + pstr.slice(1, -1).join("!passThrough=true&via=") + '!passThrough=true';
        }
        var re = {};
        await fetch('https://router.hereapi.com/v8/routes?apiKey=' +
            process.env.REACT_APP_HERE_MAP_APIKEY +
            '&transportMode=car&origin=' + pstr[0] + '&destination=' + pstr.slice(-1)[0] +
            '&return=travelSummary', {
            method: 'GET'
        }).then(async (response) => {
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                // console.log(data.routes[0].sections[0].travelSummary);
                re = data.routes[0].sections[0].travelSummary;
            } else {
                console.log("Status Code:", response.status);
            }
        }).catch(function (error) {
            console.log('error = ' + error)
        });
        // console.log(re);
        return re;
    }
    var stops = [[25.02940176238104, 121.50055862568333],
    [25.048876668724624, 121.50619014148239],
    [25.03991282424907, 121.51290273721504]];
    calculateRoute(stops);

    const orderComplete = () => {
        let oid = orderId;
        let numOfPassenger = selectedValue;
        let datetime = date;
        let start = { loc: depart, lat: -1, lng: -1 };
        let end = { loc: destination, lat: -1, lng: -1 };
        console.log("numOfPassenger", numOfPassenger)
        console.log("datetime", datetime)
        console.log("start", start)
        console.log("end", end)
        console.log(JSON.stringify({ numOfPassenger, datetime, start, end }))
        fetch(process.env.REACT_APP_BACKEND_URL + '/route/reservation/' + oid, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ numOfPassenger, datetime, start, end }),
        }).then(async (response) => {
            console.log(response);
            navigate('/ordercomplete');
        })
    }

    return (
        <>
            <div className="content" style={{ "flex-direction": "column" }}>
                <div className="content" style={{ flexDirection: "column" }}>
                    <p style={{ fontSize: "3vh", paddingBottom: "1vw" }}>出發地</p>
                    <div>
                        <input type="text" id="depart" name="depart" value={depart} onChange={handleInputDepartChange} style={{ fontSize: "3vh", width: '60vw', marginLeft: "7.5vw" }} />
                        <button onClick={() => navigate('/locationchoose', {
                            state: {
                                from: "order", type: 1,
                                status: { depart: { depart }, destination: { destination }, isChecked: { isChecked }, selectedValue: { selectedValue },
                                orderId: { orderId }, date: { date } }
                            }
                        })} style={{ height: '4vh', width: '5vw', marginTop: "-2.5vh", border: "None", backgroundColor: "white", position: 'relative', top: '1vh' }}>
                            <img src={apiImage} alt="api1" />
                        </button>
                    </div>

                    <p style={{ fontSize: "3vh", paddingBottom: "1vw" }}>目的地</p>
                    <div>
                        <input type="text" id="destination" name="destination" value={destination} onChange={handleInputDestinationChange} style={{ fontSize: "3vh", width: '60vw', marginLeft: "7.5vw" }} />
                        <button onClick={() => navigate('/locationchoose', {
                            state: {
                                from: "order", type: 2,
                                status: { depart: { depart }, destination: { destination }, isChecked: { isChecked }, selectedValue: { selectedValue } ,
                                orderId: { orderId }, date: { date } }
                            }
                        })} style={{ height: '4vh', width: '5vw', marginTop: "-2.5vh", border: "None", backgroundColor: "white", position: 'relative', top: '1vh' }}>
                            <img src={apiImage} alt="api2" />
                        </button>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ fontSize: "3vh", paddingLeft: "6vw", paddingTop: "2.5vw", paddingBottom: "2.5vw", margin: 0 }}>乘客人數</p>
                    <div className="auto-accept" style={{ paddingLeft: "30vw", marginTop: "5vh" }}>
                        <label htmlFor="carpooling" className="checkbox-label">
                            <input type="checkbox" id="carpooling" name="topping3" value="carpooling" style={{ fontSize: "2vh" }} checked={isChecked} onChange={(e) => handleCheckboxChange(e)} />
                            <p style={{ fontSize: "3vh)", color: "black" }}>允許共乘</p>
                        </label>
                    </div>
                </div>
                <select defaultValue={selectedValue} onChange={(e) => handleSelectedChange(e)} style={{ fontSize: "1vh", backgroundColor: "#D9D9D9", width: '85vw', marginLeft: "7.5vw" }}>
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
                <button onClick={orderComplete} style={{ background: 'none', border: 'none', padding: 0 }}>
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