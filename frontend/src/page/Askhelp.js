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
    <div>

      <button onClick={() => navigate('/')} style={{ background: 'gray', border: 'none', padding: 0,position: 'absolute', top: '575px', left: '75px', width: '250px', height: '50px'  }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img style={{ width: '50px', height: '50px' }} src={messageImage} alt="Message" />
              <span style={{ marginLeft: '50px', color: 'black'}}>傳送訊息給司機</span>
            </div>
      </button>
      <button onClick={handleClick} style={{ background: 'gray', border: 'none', padding: 0,position: 'absolute', top: '650px', left: '75px', width: '250px', height: '50px'  }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img style={{ width: '50px', height: '50px' }} src={cellphoneImage} alt="Cellphone" />
              <span style={{ marginLeft: '50px', color: 'black'}}>致電給司機</span>
            </div>
      </button>

      <div style={{ position: 'absolute', top: '744px', left: '0px', width: '390px', height: '100px' }}>
        <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}>
          <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
            <img style={{ width: '25px', height: '50px', position: 'absolute', top: '20px', left: '180px' }} src={buttonImage} alt="Back" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Askhelp;