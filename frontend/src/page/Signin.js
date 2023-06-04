import React from "react";
import { Menu, Form, Container } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

function Signin() {
    const [activeItem, setActiveItem] = React.useState('register');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        let response;
        if (activeItem === 'register') {
            response = await fetch('http://localhost:5000/usr/createUser', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
        }
        console.log(response);
    
        // Handle the response as needed
        // if (response.ok) {
        //   // User creation was successful
        //   console.log('User created successfully!');
        // } else {
        //   // User creation failed
        //   console.error('Failed to create user');
        // }
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
                <Form.Button onClick={() => navigate('/signin')}>
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
                <Form.Button onClick={() => navigate('/menu')}>
                    登入
                </Form.Button>
            </Form>;
    }

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
            {form}
        </Container>
    </>
    );
   
}

export default Signin;