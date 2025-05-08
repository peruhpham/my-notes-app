import React, { useState } from 'react';
import { register } from '../api';
import '../styles/RegisterPage.css';

function RegisterPage() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await register(form);
            setMessage('Đăng kí thành công. Vui lòng đăng nhập.');
        } catch (err) {
            setMessage(err.response?.data?.message || 'Đăng kí thất bại.');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
            <p>
            Đã có tài khoản? <a href="/">Đăng nhập ngay</a>
            </p>
        </div>
    );
}

export default RegisterPage;
