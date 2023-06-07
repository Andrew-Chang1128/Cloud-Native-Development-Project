import React from "react";
import buttonImage from '../image/back.png';
import messageImage from '../image/message.png'
import cellphoneImage from '../image/cellphone.png'
import { useNavigate } from 'react-router-dom';
function Askhelp(){
  const navigate = useNavigate();
  const handleClick = () => {
    window.location.replace('tel:+886-900-000-000');
  };
  return (
    <>
    <div className="content" style={{ "flex-direction": "column" }}>
          <div className="profile-button" style={{ paddingTop: "calc(20px + 15vh)" }}>
            {/*<button onClick={() => navigate('/menu')}>
              <img src={messageImage} alt="Message" />
              <span>傳送訊息給司機</span>
  </button>*/}
            <button onClick={handleClick} className="orderItem" >
                <img src={cellphoneImage} alt="Cellphone" />
                <span>致電客服</span>
            </button>
            
          </div>
        </div>
        
        <div className="menu-gesture">
          <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img className="ges-icon" src={buttonImage} alt="Back" />
          </button>
        </div>
    </>
  );
}

export default Askhelp;