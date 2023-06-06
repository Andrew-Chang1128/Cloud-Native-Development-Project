import React from "react";
import { useNavigate } from 'react-router-dom';
import checkImage from '../image/check.png'


function Fixedcomplete() {
  const navigate = useNavigate();

  return (
    <>
        <div className="content" style={{ "flex-direction": "column" }}>
          <div className="profile-div" style={{ "flex-direction": "column" }}>
            <p>路線設定完成!</p>
            <p>請依指定時間及路線行駛。</p>
          </div>
        </div>
        
        <div className="menu-gesture">
          <button onClick={() => navigate('/fixed')} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img className="ges-icon" src={checkImage} alt="check" />
          </button>
        </div>
    </>
  );
}

export default Fixedcomplete;

/*
<div>
      <p style={{ fontSize: '30px', position: 'absolute', top: '125px', left: '50px' }}>訂單已成立!</p>
      <p style={{ fontSize: '30px', position: 'absolute', top: '200px', left: '50px' }}>請於指定時間內至指定搭車地點等候。</p>

      <button onClick={() => navigate('/')} style={{ background: 'gray', border: 'none', padding: 0,position: 'absolute', top: '575px', left: '75px', width: '250px', height: '50px'  }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img style={{ width: '50px', height: '50px' }} src={messageImage} alt="Message" />
              <span style={{ marginLeft: '50px'}}>傳送訊息給司機</span>
            </div>
      </button>
      <button onClick={() => navigate('/')} style={{ background: 'gray', border: 'none', padding: 0,position: 'absolute', top: '650px', left: '75px', width: '250px', height: '50px'  }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img style={{ width: '50px', height: '50px' }} src={cellphoneImage} alt="Cellphone" />
              <span style={{ marginLeft: '50px'}}>致電給司機</span>
            </div>
      </button>
      <div style={{ position: 'absolute', top: '744px', left: '0px', width: '390px', height: '100px' }}>
        <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', padding: 0 }}>
            <img style={{ width: '50px', height: '50px', position: 'absolute', top: '20px', left: '160px' }} src={homeImage} alt="Home" />
          </button>
        </div>
      </div>
    </div>
*/
