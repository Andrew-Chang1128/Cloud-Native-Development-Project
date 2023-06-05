import React from "react";
import { message } from 'antd';
import { Menu, Form, Container } from "semantic-ui-react";

function Signin({ setToken }) {
    const [activeItem, setActiveItem] = React.useState('register');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (activeItem === 'register') {
            const response = await fetch('http://localhost:4000/user/createUser', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            }).then((response) => {
                if (response.status === 200) {
                    message.success("User information inserted successfully");
                    setActiveItem("signin");
                } else if (response.status === 422) {
                    message.error("inappropriate parameters");
                } else if (response.status === 409) {
                    message.error("User already exist");
                } else if (response.status === 500) {
                    message.error("Failed to insert user information");
                }
              });
        } else if (activeItem === 'signin') {
            const response = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            }).then(async (response) => {
                if (response.status === 200) {
                    message.success("Login successfully");
                    const token = await response.text();
                    setToken(token);
                    window.location.reload(false);
                } else if (response.status === 422) {
                    message.error("inappropriate parameters");
                } else if (response.status === 401) {
                    message.error("Wrong username or password");
                }
              });
        }
    };

    let form;
    if (activeItem === 'register') {
        form = <Form onSubmit={handleSubmit}>
                <Form.Input 
                    label="姓名" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="請輸入姓名" 
                />
                <Form.Input 
                    label="信箱" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="請輸入信箱" 
                />
                <Form.Input  
                    label="密碼" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="請輸入密碼"
                    type="password"
                />
                <Form.Button>
                    註冊
                </Form.Button>
            </Form>;
    } else {
        form = <Form onSubmit={handleSubmit}>
                <Form.Input 
                    label="信箱" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="請輸入信箱" 
                />
                <Form.Input  
                    label="密碼" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="請輸入密碼"
                    type="password"
                />
                <Form.Button>
                    登入
                </Form.Button>
            </Form>;
    }

    return (
    <>
        <Container>
            <Menu widths={2} style={{marginTop:'2vh'}}>
                <Menu.Item 
                    active={activeItem === 'register'} 
                    onClick={() => setActiveItem("register")}
                    >
                    註冊
                </Menu.Item>
                <Menu.Item 
                    active={activeItem === 'signin'} 
                    onClick={() => setActiveItem("signin")} 
                    >
                        登入
                </Menu.Item>
            </Menu>
            {form}
        </Container>
    </>
    );
   
}

export default Signin;
