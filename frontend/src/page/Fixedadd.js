import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import nextImage from '../image/next.png'
import buttonImage from '../image/back.png';
import apiImage from '../image/api.png';
import plusImage from '../image/plus.png'

function Fixedadd() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("1");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  }

  const handleChange2 = (people) => {
    setSelectedValue(people.target.value);
  }
  return (
    <>
      <div className="content" style={{ flexDirection: "column" }}>
        <div className="profile-button" style={{ flexDirection: "column" }}>
          <h1 style={{ paddingBottom: "1vw" }}>固定路線設定</h1>
          <button onClick={() => navigate('/locationchoose')} style={{ width: '85vw', marginLeft: "7.5vw", backgroundColor: "#D9D9D9", fontSize: "calc(12px + 2vh)" }}>
            <img src={apiImage} alt="api1" />
            <span>新竹火車站</span>
          </button>
          <button onClick={() => navigate('/locationchoose')} style={{ width: '85vw', marginLeft: "7.5vw", backgroundColor: "#D9D9D9", fontSize: "calc(12px + 2vh)" }}>
            <img src={apiImage} alt="api1" />
            <span>交通大學南大門</span>
          </button>
          <button onClick={() => navigate('/locationchoose')} style={{ width: '85vw', marginLeft: "7.5vw", backgroundColor: "#D9D9D9", fontSize: "calc(12px + 2vh)" }}>
            <img src={apiImage} alt="api1" />
            <span>台積電12A</span>
          </button>
          <button onClick={() => navigate('/locationchoose')} style={{ width: '85vw', marginLeft: "7.5vw", backgroundColor: "#D9D9D9", fontSize: "calc(12px + 2vh)" }}>
            <img src={plusImage} alt="plus" />
            <span  style={{ color: "#969696" }}>新增地點</span>
          </button>
        </div>
        <div className="profile-div" style={{ flexDirection: "column", paddingTop: "10vh" }}>
          <p style={{ fontSize: "calc(12px + 2vh)", paddingBottom: "1vw" }}>出發時間</p>
        </div>
        <div className="profile-div" style={{ flexDirection: "row", paddingTop: "1vh", display: "flex", alignItems: "center" }}>
        <div className="auto-accept" style={{ paddingLeft: "5vw" ,marginTop: "1vw"}}>
            <label htmlFor="monday" className="checkbox-label">
              <input type="checkbox" id="monday" name="topping" value="monday" style={{ fontSize: "1vh" }} />
              <span style={{ fontSize: "2vh", color:"black" }}>週一</span>
            </label>
          </div>
          <div className="auto-accept" style={{ paddingLeft: "1.5vw" ,marginTop: "1vw"}}>
            <label htmlFor="tuesday" className="checkbox-label">
              <input type="checkbox" id="tuesday" name="topping2" value="tuesday" style={{ fontSize: "1vh" }} />
              <span style={{ fontSize: "2vh", color:"black" }}>週二</span>
            </label>
          </div>
          <div className="auto-accept" style={{ paddingLeft: "1.5vw" ,marginTop: "1vw"}}>
            <label htmlFor="wednesday" className="checkbox-label">
              <input type="checkbox" id="wednesday" name="topping3" value="wednesday" style={{ fontSize: "1vh" }} />
              <span style={{ fontSize: "2vh", color:"black" }}>週三</span>
            </label>
          </div>
          <div className="auto-accept" style={{ paddingLeft: "5vw" ,marginTop: "1vw"}}>
            <label htmlFor="thursday" className="checkbox-label">
              <input type="checkbox" id="thursday" name="topping4" value="thursday" style={{ fontSize: "1vh" }} />
              <span style={{ fontSize: "2vh", color:"black" }}>週四</span>
            </label>
          </div>
          <div className="auto-accept" style={{ paddingLeft: "5vw" ,marginTop: "1vw"}}>
            <label htmlFor="friday" className="checkbox-label">
              <input type="checkbox" id="friday" name="topping5" value="friday" style={{ fontSize: "1vh" }} />
              <span style={{ fontSize: "2vh", color:"black" }}>週五</span>
            </label>
          </div>
          <div className="auto-accept" style={{ paddingLeft: "5vw" ,marginTop: "1vw"}}>
            <label htmlFor="saturday" className="checkbox-label">
              <input type="checkbox" id="saturday" name="topping6" value="saturday" style={{ fontSize: "1vh" }} />
              <span style={{ fontSize: "2vh", color:"black" }}>週六</span>
            </label>
          </div>
          <div className="auto-accept" style={{ paddingLeft: "1.5vw" ,marginTop: "1vw"}}>
            <label htmlFor="sunday" className="checkbox-label">
              <input type="checkbox" id="sunday" name="topping7" value="sunday" style={{ fontSize: "1vh" }} />
              <span style={{ fontSize: "2vh", color:"black" }}>週日</span>
            </label>
          </div>
        </div>
        
        <div className="profile-div" style={{ flexDirection: "row", paddingTop: "0vh", display: "flex", alignItems: "center" }}>
              <select onChange={(e) => handleChange(e)} style={{fontSize: "1vh" ,backgroundColor: "#D9D9D9" ,width: '20vw', marginLeft: "7.5vw"}}>
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
                <option value="24">00</option>
              </select>
              <p style={{ fontSize: "calc1vh", marginLeft: "-4.5vw"}}>:</p>
              <select onChange={(e) => handleChange2(e)} style={{fontSize: "1vh" ,backgroundColor: "#D9D9D9" ,width: '20vw', marginLeft: "1.5vw"}}>
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
                <option value="0">00</option>
              </select>
        </div>




      </div>

      <div className="menu-gesture">
        <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
          <img className="ges-icon" src={buttonImage} style={{ marginRight: '40vw' }} alt="Back" />
        </button>
        <button onClick={() => navigate('/fixedcomplete')} style={{ background: 'none', border: 'none', padding: 0 }}>
          <img className="ges-icon" src={nextImage} alt="Next" />
        </button>
      </div>
    </>
  );
}

export default Fixedadd;
