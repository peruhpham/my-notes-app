


import React, { useState } from 'react';
import '../styles/LoginPage.css';
import axios from 'axios';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Attempting to log in with:', { email, password });
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });

            console.log('Login successful:', response.data);

            // Lưu token vào localStorage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);

            // Điều hướng đến trang ghi chú (ví dụ)
            window.location.href = '/notes';

        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="login-page">
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br />
                {error && <p className="error">{error}</p>}
                <button type="submit">Đăng nhập</button>
            </form>
            <p>
                Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
            </p>
            <p>
                <a href="/change-password">Quên mật khẩu?</a>
            </p>
        </div>
    );
}

export default LoginPage;