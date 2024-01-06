import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Register.scss'

function Register() {
    let history = useHistory()
    function handleClickLogin() {
        history.push("/login")
    };
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@gmail+\.com+$/;
        return emailRegex.test(email);
    }
    const handleEmailBlur = () => {
        setValidEmail(!isValidEmail(email));
    };

    const handleEmailFocus = () => {
        setValidEmail(false);
    };
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
    const handleRegisterClick = () => {
        alert("register btn clicked")
    }
    return (
        <div className="Register-container">
            <div className='box'>
                <form>
                    <h3>Đăng Ký</h3>
                    <div className='form-group'>
                        <label htmlFor='email'>Nhập email: </label> <br />
                        <input
                            type='email'
                            autoComplete='off'
                            id='email'
                            placeholder='abcxyz@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={handleEmailFocus}
                            onBlur={handleEmailBlur}
                            style={{
                                backgroundColor: validEmail ? '#ff000040' : 'white',
                                border: validEmail ? '1px solid red' : '1px solid #ffffff00'
                            }}
                        />
                        <i className='message'>{validEmail && 'Định dạng email chưa đúng'}</i>

                    </div>
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
                        <i className='message'>{validUsername && 'Ít nhất 5 ký tư và bắt đầu bằng \'@\''}</i>

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
                    <button onClick={handleRegisterClick}>Đăng ký ngay</button>
                </form>
                <div className='register'>Đã có tài khoản <span onClick={handleClickLogin}>Đăng nhập</span></div>
            </div>
        </div>
    )
}

export default Register;