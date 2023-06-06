import React from "react";
import { useNavigate } from 'react-router-dom';
import nextImage from '../image/next.png'
import buttonImage from '../image/back.png';
import apiImage from '../image/api.png';
import plusImage from '../image/plus.png'

function Fixedadd() {
  const navigate = useNavigate();
  const handleChange = (e) => {
    this.setState({ selectedValue: e.target.value })
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

        <div className="profile-div" style={{ flexDirection: "column", paddingTop: "15vh" }}>
        <p style={{ fontSize: "calc(12px + 2vh)", paddingBottom: "1vw" }}>出發時間</p>
            <select onChange={(e) => handleChange(e)} style={{fontSize: "calc(12px + 1vh)" ,backgroundColor: "#D9D9D9" ,width: '85vw', marginLeft: "7.5vw"}}>
                <option value="1">假日, 星期六 09:50</option>
                <option value="2">假日, 星期六 10:50</option>
                <option value="3">假日, 星期六 12:50</option>
                <option value="4+">平日, 星期五 09:50</option>
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
