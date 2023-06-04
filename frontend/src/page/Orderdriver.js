import React from "react";
import { useNavigate } from 'react-router-dom';
import checkdriverImage from '../image/checkdriver.png'
import falseImage from '../image/false.png';
function Order(){
  const navigate = useNavigate();
    return (
      <>
        <div className="content" style={{ "flex-direction": "column" }}>
        <div className="profile-div" style={{ "flex-direction": "column", paddingTop: "5vh" }}>
            <p>乘客: 王小明</p>
            <p>乘客人數: 2人</p>
            <p>出發地: 交通大學</p>
            <p>目的地: 新竹火車站</p>
          </div>
          <div className="profile-div" style={{ "flex-direction": "column", paddingTop: "15vh" }}>
            <p>出發時間: 12 : 22</p>
            <p>抵達時間: 12 : 57</p>
            <p>預估車資: 80元</p>
          </div>
          
        </div>
        
        <div className="menu-gesture">
          <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0}}>
              <img className="ges-icon" src={falseImage} style={{ marginRight: '40vw' }} alt="false" />
          </button>
          <button onClick={() => navigate('/ordercomplete')} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img className="ges-icon" src={checkdriverImage} alt="checkdriver" />
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