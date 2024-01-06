import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Login.scss';

function Login() {
    let history = useHistory()
    function handleClickRegister() {
        history.push("/register")
    };
    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    const handleUsernameBlur = () => {
        if (username.charAt(0) === '@' && username.length > 4) {
            setValidUsername(false);
        } else {
            setValidUsername(true)
        }
    };

    const handleUsernameFocus = () => {
        setValidUsername(false);
    };

    const handlePasswordBlur = () => {
        setValidPassword(password.length < 5);
    };

    const handlePasswordFocus = () => {
        setValidPassword(false);
    };
    const handleLoginClick = () => {
        alert("login btn clicked")
    }
    return (
        <div className="Login-container">
            <div className='line-1'></div>
            <div className='box'>
                <form>
                    <h3>Đăng nhập</h3>
                    <div className='form-group'>
                        <label htmlFor='username'>Nhập username: </label> <br />
                        <input
                            type='text'
                            autoComplete='off'
                            id='username'
                            placeholder='@username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={handleUsernameFocus}
                            onBlur={handleUsernameBlur}
                            style={{
                                backgroundColor: validUsername ? '#ff000040' : 'white',
                                border: validUsername ? '1px solid red' : '1px solid #ffffff00'
                            }}
                        />
                        <i className='message'>{validUsername && 'Ít nhất5 ký tự và bắt đầu với \'@\''}</i>

                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Nhập mật khẩu: </label><br />
                        <input
                            type='password'
                            id='password'
                            autoComplete='off'
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={handlePasswordFocus}
                            onBlur={handlePasswordBlur}
                            style={{
                                backgroundColor: validPassword ? '#ff000040' : 'white',
                                border: validPassword ? '1px solid red' : '1px solid #ffffff00'
                            }}
                        />
                        <i className='message'>{validPassword && 'Mật khẩu tối thiểu 6 ký tự'}</i>
                    </div>
                    <button onClick={handleLoginClick}>Đăng nhập ngay</button>
                </form>
                <div className='register'>Chưa có tài khoản <span onClick={handleClickRegister}>Đăng ký</span></div>
            </div>
        </div>
    );
}

export default Login;
