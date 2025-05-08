import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ChangePasswordPage.css';

function ChangePasswordPage() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5000/api/auth/change-password', {
                oldPassword,
                newPassword,
            }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setMessage('Password changed successfully');
        } catch (err) {
            setMessage('Failed to change password');
        }
    };

    return (
        <div className="change-password-container">
            <h2>Change Password</h2>
            <form onSubmit={handleChangePassword}>
                <input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
                <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                <button type="submit">Change Password</button>
                {message && <p>{message}</p>}
            </form>
            <p>
                <a href="/">Quay lại đăng nhập</a>
            </p>
        </div>
    );
}

export default ChangePasswordPage;