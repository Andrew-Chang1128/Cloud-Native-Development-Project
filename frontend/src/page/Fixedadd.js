import React from "react";
import { useNavigate } from 'react-router-dom';
import nextImage from '../image/next.png'
import buttonImage from '../image/back.png';
function Fixedadd(){
  const navigate = useNavigate();
    return (
      <>
        <div className="content" style={{ "flex-direction": "column" }}>
          <div className="profile-div" style={{ "flex-direction": "column" }}>
            <p>出發地</p>
            <button onClick={() => navigate('/order')} style={{ width: '85vw', marginLeft: "7.5vw"}}>
              {/* <img src={profilechangeImage} alt="Profilechange" /> */}
              <span>交通大學</span>
            </button>
            <p>目的地</p>
            <button onClick={() => navigate('/order')} style={{ width: '85vw', marginLeft: "7.5vw"}}>
                {/* <img src={paymentImage} alt="Payments" /> */}
                <span>新竹火車站</span>
            </button>
            <p>乘客人數</p>
            <button onClick={() => navigate('/order')} style={{ width: '85vw', marginLeft: "7.5vw"}}>
                {/* <img src={paymentImage} alt="Payments" /> */}
                <span>2</span>
            </button>
          </div>
          <div className="profile-div" style={{ "flex-direction": "column", paddingTop: "15vh" }}>
            <p>出發時間</p>
            <p>平日, 星期六   09:50</p>
          </div>
          
        </div>
        
        <div className="menu-gesture">
          <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0}}>
              <img className="ges-icon" src={buttonImage} style={{ marginRight: '40vw' }} alt="Back" />
          </button>
          <button onClick={() => navigate('/fixedaddcomplete')} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img className="ges-icon" src={nextImage} alt="Next" />
          </button>
        </div>
    </>
        
    );
}

export default Fixedadd;

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