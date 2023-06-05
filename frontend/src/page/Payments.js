import React from "react";

import buttonImage from '../image/back.png';
function Payments() {

  return (
      <>
        <div className="content" style={{ "flex-direction": "column" }}>
        <p>這是付款資訊的頁面!</p>
        </div>
        
        <div className="menu-gesture">
          <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img className="ges-icon" src={buttonImage} alt="Back" />
          </button>
        </div>
      </>
  );
}

export default Payments;
