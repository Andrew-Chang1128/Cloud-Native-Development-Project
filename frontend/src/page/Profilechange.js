import React from "react";
import buttonImage from '../image/back.png';
import {Form, Container } from "semantic-ui-react";

function Profilechange(){
    const [oldpassword, setOldpassword] = React.useState('');
    const [newpassword, setNewpassword] = React.useState('');
    const [againpassword, setAgainpassword] = React.useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      // 处理表单提交逻辑
      // ...
    };
      let form;
        form = <Form onSubmit={handleSubmit}>
                <Form.Input 
                    label="舊密碼" 
                    value={oldpassword} 
                    onChange={(e) => setOldpassword(e.target.value)}
                    placeholder="輸入舊密碼" 
                    type="password"
                />  
                <Form.Input 
                    label="新密碼" 
                    value={newpassword} 
                    onChange={(e) => setNewpassword(e.target.value)}
                    placeholder="輸入新密碼" 
                    type="password"
                />
                <Form.Input  
                    label="密碼" 
                    value={againpassword} 
                    onChange={(e) => setAgainpassword(e.target.value)}
                    placeholder="請再次輸入"
                    type="password"
                />
                <Form.Button>
                    修改
                </Form.Button>
            </Form>;
  return (
    <>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ fontSize: "4vh", paddingLeft: "6vw", paddingTop: "2.5vw", paddingBottom: "2.5vw", margin: 0, whiteSpace: "nowrap" }}>修改資訊</p>
        </div>
        

        <Container>
            {form}
        </Container>


        <div className="menu-gesture" style={{ position: "fixed", bottom: 0 }}>
          <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', padding: 0 }}>
              <img className="ges-icon" src={buttonImage} alt="Back" />
          </button>
        </div>
    </>
  );
}

export default Profilechange;

