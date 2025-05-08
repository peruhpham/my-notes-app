import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotesPage from './components/NotesPage';
import ChangePasswordPage from './components/ChangePasswordPage';

function App() {
    const token = localStorage.getItem('token');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/notes" element={token ? <NotesPage /> : <Navigate to="/login" />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/change-password" element={token ? <ChangePasswordPage /> : <Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
