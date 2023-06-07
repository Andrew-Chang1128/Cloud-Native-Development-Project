import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import nextImage from '../image/next.png'
import buttonImage from '../image/back.png';
import apiImage from '../image/api.png';


function Fixedadd() {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.state);

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

    let defaultDepart1 = '';
    let defaultDepart2 = '';
    let defaultDepart3 = '';
    let defaultDepart1_lat = -1;
    let defaultDepart1_lng = -1;
    let defaultDepart2_lat = -1;
    let defaultDepart2_lng = -1;
    let defaultDepart3_lat = -1;
    let defaultDepart3_lng = -1;
    let defaultIsChecked1 = false;
    let defaultIsChecked2 = false;
    let defaultIsChecked3 = false;
    let defaultIsChecked4 = false;
    let defaultIsChecked5 = false;
    let defaultIsChecked6 = false;
    let defaultIsChecked7 = false;
    let defaultHour = 0;
    let defaultMinute = 0;

    if (location.state != null && location.state.from === "Locationchoose") {
        if (location.state.type === 1) {
            defaultDepart2 = location.state.status.depart2.loc;
            defaultDepart3 = location.state.status.depart3.loc;
        } else if (location.state.type === 2) {
            defaultDepart1 = location.state.status.depart1.loc;
            defaultDepart3 = location.state.status.depart3.loc;
        } else if (location.state.type === 3) {
            defaultDepart1 = location.state.status.depart1.loc;
            defaultDepart2 = location.state.status.depart2.loc;
        }
        defaultDepart1_lat = location.state.status.depart1.lat;
        defaultDepart1_lng = location.state.status.depart1.lng;
        defaultDepart2_lat = location.state.status.depart2.lat;
        defaultDepart2_lng = location.state.status.depart2.lng;
        defaultDepart3_lat = location.state.status.depart3.lat;
        defaultDepart3_lng = location.state.status.depart3.lng;
        defaultIsChecked1 = location.state.status.isChecked1;
        defaultIsChecked2 = location.state.status.isChecked2;
        defaultIsChecked3 = location.state.status.isChecked3;
        defaultIsChecked4 = location.state.status.isChecked4;
        defaultIsChecked5 = location.state.status.isChecked5;
        defaultIsChecked6 = location.state.status.isChecked6;
        defaultIsChecked7 = location.state.status.isChecked7;
        defaultHour = location.state.status.hour;
        defaultMinute = location.state.status.minute;
    }


    const [depart1, setDepart1] = useState(defaultDepart1);
    const handleInputDepart1Change = (depart1) => {
        setDepart1(depart1.target.value);
        console.log("depart1", depart1.target.value)
    };

    const [depart2, setDepart2] = useState(defaultDepart2);
    const handleInputDepart2Change = (depart2) => {
        setDepart2(depart2.target.value);
        console.log("depart2", depart2.target.value)
    };

    const [depart3, setDepart3] = useState(defaultDepart3);
    const handleInputDepart3Change = (depart3) => {
        setDepart3(depart3.target.value);
        console.log("depart3", depart3.target.value)
    };

    const [depart1_lat, setDepart1_lat] = useState(defaultDepart1_lat);
    const [depart1_lng, setDepart1_lng] = useState(defaultDepart1_lng);

    const [depart2_lat, setDepart2_lat] = useState(defaultDepart2_lat);
    const [depart2_lng, setDepart2_lng] = useState(defaultDepart2_lng);

    const [depart3_lat, setDepart3_lat] = useState(defaultDepart3_lat);
    const [depart3_lng, setDepart3_lng] = useState(defaultDepart3_lng);

    const [isChecked1, setIsChecked1] = useState(defaultIsChecked1);
    const [isChecked2, setIsChecked2] = useState(defaultIsChecked2);
    const [isChecked3, setIsChecked3] = useState(defaultIsChecked3);
    const [isChecked4, setIsChecked4] = useState(defaultIsChecked4);
    const [isChecked5, setIsChecked5] = useState(defaultIsChecked5);
    const [isChecked6, setIsChecked6] = useState(defaultIsChecked6);
    const [isChecked7, setIsChecked7] = useState(defaultIsChecked7);

    const handleInputIsChecked1Change = (isChecked1) => {
        setIsChecked1(isChecked1.target.checked);
        console.log("isChecked1", isChecked1.target.checked)
    };
    const handleInputIsChecked2Change = (isChecked2) => {
        setIsChecked2(isChecked2.target.checked);
        console.log("isChecked2", isChecked2.target.checked)
    };
    const handleInputIsChecked3Change = (isChecked3) => {
        setIsChecked3(isChecked3.target.checked);
        console.log("isChecked3", isChecked3.target.checked)
    };
    const handleInputIsChecked4Change = (isChecked4) => {
        setIsChecked4(isChecked4.target.checked);
        console.log("isChecked4", isChecked4.target.checked)
    };
    const handleInputIsChecked5Change = (isChecked5) => {
        setIsChecked5(isChecked5.target.checked);
        console.log("isChecked5", isChecked5.target.checked)
    };
    const handleInputIsChecked6Change = (isChecked6) => {
        setIsChecked6(isChecked6.target.checked);
        console.log("isChecked6", isChecked6.target.checked)
    };
    const handleInputIsChecked7Change = (isChecked7) => {
        setIsChecked7(isChecked7.target.checked);
        console.log("isChecked7", isChecked7.target.checked)
    };

    const [hour, setHour] = useState(defaultHour);
    const handleInputHourChange = (hour) => {
        setHour(hour.target.value);
        console.log("hour", hour.target.value)
    };

    const [minute, setMinute] = useState(defaultMinute);
    const handleInputMinuteChange = (minute) => {
        setMinute(minute.target.value);
        console.log("minute", minute.target.value)
    };

    if (location.state != null) {
        console.log(location.state);
        if (location.state.from === "Locationchoose") {
            if (location.state.type === 1) {
                reverseGeocode(location.state.status.depart1.lat, location.state.status.depart1.lng)
                    .then(result => {
                        setDepart1(result);
                    });
            } else if (location.state.type === 2) {
                reverseGeocode(location.state.status.depart2.lat, location.state.status.depart2.lng)
                    .then(result => {
                        setDepart2(result);
                    });
            } else if (location.state.type === 3) {
                reverseGeocode(location.state.status.depart3.lat, location.state.status.depart3.lng)
                    .then(result => {
                        setDepart3(result);
                    });
            }
        }

    }

    const addRoute = () => {
        let dayOfWeek = [];
        if (isChecked1) {
            dayOfWeek.push("Monday");
        }
        if (isChecked2) {
            dayOfWeek.push("Tuesday");
        }
        if (isChecked3) {
            dayOfWeek.push("Wednesday");
        }
        if (isChecked4) {
            dayOfWeek.push("Thursday");
        }
        if (isChecked5) {
            dayOfWeek.push("Friday");
        }
        if (isChecked6) {
            dayOfWeek.push("Saturday");
        }
        if (isChecked7) {
            dayOfWeek.push("Sunday");
        }
        let maxNumOfPassenger = 4;
        let date = new Date();
        date.setHours(hour);
        date.setMinutes(minute);
        date.setSeconds(0);
        date.setMilliseconds(0);
        let startTime = date.toISOString();
        let routeList = [{ loc: depart1, lat: depart1_lat, lng: depart1_lng }, { loc: depart2, lat: depart2_lat, lng: depart2_lng }, { loc: depart3, lat: depart3_lat, lng: depart3_lng }];

        fetch(process.env.REACT_APP_BACKEND_URL + '/route', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ dayOfWeek, maxNumOfPassenger, startTime, routeList }),
        }).then(async (response) => {
            console.log(response);
            navigate('/fixedcomplete');
        })

    }


    return (
        <>
            <div className="content" style={{ flexDirection: "column" }}>
                <div className="reserve-div" style={{ flexDirection: "column" }}>
                    <div className="content" style={{ flexDirection: "column" }}>
                        <div>
                            <input type="text" id="depart1" name="depart1" value={depart1} onChange={handleInputDepart1Change} style={{ fontSize: "3vh", width: '60vw', marginLeft: "7.5vw" }} />
                            <button onClick={() => navigate('/locationchoose', {
                                state: {
                                    from: "Fixedadd", type: 1,
                                    status: {
                                        depart1: { loc: depart1, lat: depart1_lat, lng: depart1_lng }, depart2: { loc: depart2, lat: depart2_lat, lng: depart2_lng },
                                        depart3: { loc: depart3, lat: depart3_lat, lng: depart3_lng }, isChecked1: isChecked1, isChecked2: isChecked2, isChecked3: isChecked3,
                                        isChecked4: isChecked4, isChecked5: isChecked5, isChecked6: isChecked6, isChecked7: isChecked7, hour: hour, minute: minute
                                    }
                                }
                            })} style={{ height: '4vh', width: '5vw', marginTop: "-2.5vh", border: "None", backgroundColor: "white", position: 'relative', top: '1vh' }}>
                                <img src={apiImage} alt="api1" />
                            </button>
                        </div>
                        <div>
                            <input type="text" id="depart2" name="depart2" value={depart2} onChange={handleInputDepart2Change} style={{ fontSize: "3vh", width: '60vw', marginLeft: "7.5vw" }} />
                            <button onClick={() => navigate('/locationchoose', {
                                state: {
                                    from: "Fixedadd", type: 2,
                                    status: {
                                        depart1: { loc: depart1, lat: depart1_lat, lng: depart1_lng }, depart2: { loc: depart2, lat: depart2_lat, lng: depart2_lng },
                                        depart3: { loc: depart3, lat: depart3_lat, lng: depart3_lng }, isChecked1: isChecked1, isChecked2: isChecked2, isChecked3: isChecked3,
                                        isChecked4: isChecked4, isChecked5: isChecked5, isChecked6: isChecked6, isChecked7: isChecked7, hour: hour, minute: minute
                                    }
                                }
                            })} style={{ height: '4vh', width: '5vw', marginTop: "-2.5vh", border: "None", backgroundColor: "white", position: 'relative', top: '1vh' }}>
                                <img src={apiImage} alt="api1" />
                            </button>
                        </div>
                        <div>
                            <input type="text" id="depart3" name="depart3" value={depart3} onChange={handleInputDepart3Change} style={{ fontSize: "3vh", width: '60vw', marginLeft: "7.5vw" }} />
                            <button onClick={() => navigate('/locationchoose', {
                                state: {
                                    from: "Fixedadd", type: 3,
                                    status: {
                                        depart1: { loc: depart1, lat: depart1_lat, lng: depart1_lng }, depart2: { loc: depart2, lat: depart2_lat, lng: depart2_lng },
                                        depart3: { loc: depart3, lat: depart3_lat, lng: depart3_lng }, isChecked1: isChecked1, isChecked2: isChecked2, isChecked3: isChecked3,
                                        isChecked4: isChecked4, isChecked5: isChecked5, isChecked6: isChecked6, isChecked7: isChecked7, hour: hour, minute: minute
                                    }
                                }
                            })} style={{ height: '4vh', width: '5vw', marginTop: "-2.5vh", border: "None", backgroundColor: "white", position: 'relative', top: '1vh' }}>
                                <img src={apiImage} alt="api1" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="profile-div" style={{ flexDirection: "column", paddingTop: "8vh" }}>
                    <p style={{ fontSize: "calc(12px + 2vh)", paddingBottom: "1vw" }}>出發時間</p>
                </div>
                <div className="profile-div" style={{ flexDirection: "row", paddingTop: "1vh", display: "flex", alignItems: "center" }}>
                    <div className="auto-accept" style={{ paddingLeft: "5vw", marginTop: "1vw" }}>
                        <label htmlFor="monday" className="checkbox-label">
                            <input type="checkbox" id="monday" name="topping" value="monday" style={{ fontSize: "1vh" }} checked={isChecked1} onChange={(e) => handleInputIsChecked1Change(e)} />
                            <span style={{ fontSize: "2vh", color: "black", whiteSpace: "nowrap" }}>週一</span>
                        </label>
                    </div>
                    <div className="auto-accept" style={{ paddingLeft: "0.5vw", marginTop: "1vw" }}>
                        <label htmlFor="tuesday" className="checkbox-label">
                            <input type="checkbox" id="tuesday" name="topping2" value="tuesday" style={{ fontSize: "1vh" }} checked={isChecked2} onChange={(e) => handleInputIsChecked2Change(e)} />
                            <span style={{ fontSize: "2vh", color: "black", whiteSpace: "nowrap" }}>週二</span>
                        </label>
                    </div>
                    <div className="auto-accept" style={{ paddingLeft: "0.5vw", marginTop: "1vw" }}>
                        <label htmlFor="wednesday" className="checkbox-label">
                            <input type="checkbox" id="wednesday" name="topping3" value="wednesday" style={{ fontSize: "1vh" }} checked={isChecked3} onChange={(e) => handleInputIsChecked3Change(e)} />
                            <span style={{ fontSize: "2vh", color: "black", whiteSpace: "nowrap" }}>週三</span>
                        </label>
                    </div>
                    <div className="auto-accept" style={{ paddingLeft: "0.5vw", marginTop: "1vw" }}>
                        <label htmlFor="thursday" className="checkbox-label">
                            <input type="checkbox" id="thursday" name="topping4" value="thursday" style={{ fontSize: "1vh" }} checked={isChecked4} onChange={(e) => handleInputIsChecked4Change(e)} />
                            <span style={{ fontSize: "2vh", color: "black", whiteSpace: "nowrap" }}>週四</span>
                        </label>
                    </div>
                    <div className="auto-accept" style={{ paddingLeft: "0.5vw", marginTop: "1vw" }}>
                        <label htmlFor="friday" className="checkbox-label">
                            <input type="checkbox" id="friday" name="topping5" value="friday" style={{ fontSize: "1vh" }} checked={isChecked5} onChange={(e) => handleInputIsChecked5Change(e)} />
                            <span style={{ fontSize: "2vh", color: "black", whiteSpace: "nowrap" }}>週五</span>
                        </label>
                    </div>
                    <div className="auto-accept" style={{ paddingLeft: "0.5vw", marginTop: "1vw" }}>
                        <label htmlFor="saturday" className="checkbox-label">
                            <input type="checkbox" id="saturday" name="topping6" value="saturday" style={{ fontSize: "1vh" }} checked={isChecked6} onChange={(e) => handleInputIsChecked6Change(e)} />
                            <span style={{ fontSize: "2vh", color: "black", whiteSpace: "nowrap" }}>週六</span>
                        </label>
                    </div>
                    <div className="auto-accept" style={{ paddingLeft: "0.5vw", marginTop: "1vw" }}>
                        <label htmlFor="sunday" className="checkbox-label">
                            <input type="checkbox" id="sunday" name="topping7" value="sunday" style={{ fontSize: "1vh" }} checked={isChecked7} onChange={(e) => handleInputIsChecked7Change(e)} />
                            <span style={{ fontSize: "2vh", color: "black", whiteSpace: "nowrap" }}>週日</span>
                        </label>
                    </div>
                </div>

                <div className="profile-div" style={{ flexDirection: "row", paddingTop: "0vh", display: "flex", alignItems: "center" }}>
                    <select defaultValue={hour} onChange={(e) => handleInputHourChange(e)} style={{ fontSize: "1vh", backgroundColor: "#D9D9D9", width: '20vw', marginLeft: "7.5vw" }}>
                        <option value="0">00</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                    </select>
                    <p style={{ fontSize: "calc1vh", marginLeft: "-4.5vw" }}>:</p>
                    <select defaultValue={minute} onChange={(e) => handleInputMinuteChange(e)} style={{ fontSize: "1vh", backgroundColor: "#D9D9D9", width: '20vw', marginLeft: "1.5vw" }}>
                        <option value="0">00</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                    </select>
                </div>




            </div>

            <div className="menu-gesture">
                <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img className="ges-icon" src={buttonImage} style={{ marginRight: '40vw' }} alt="Back" />
                </button>
                <button onClick={addRoute} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img className="ges-icon" src={nextImage} alt="Next" />
                </button>
            </div>
        </>
    );
}

export default Fixedadd;
