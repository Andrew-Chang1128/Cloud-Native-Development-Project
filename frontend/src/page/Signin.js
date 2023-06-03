import React from "react";
import { Menu, Form, Container } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

function Signin() {
    const [activeItem, setActiveItem] = React.useState('register');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    return (
    <>
        <Container>
            <Menu widths={2}>
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
            <Form>
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
                <Form.Button onClick={() => navigate('/menu')}>
                    {activeItem === 'register' && '註冊'}
                    {activeItem === 'signin' && '登入'}
                </Form.Button>
            </Form>
        </Container>
    </>
    );
   
}

export default Signin;