import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/NotesPage.css';

function NotesPage() {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [user, setUser] = useState({}); // Lưu thông tin người dùng

    // Lấy thông tin người dùng
    const fetchUser = async () => {
        const token = localStorage.getItem('token');

        // const res = await axios.get('http://localhost:5000/api/auth/me', {
        //     headers: { Authorization: `Bearer ${token}` },
        // });
        // setUser(res.data); // Lưu thông tin người dùng

        // try {
        //     const res = await axios.get('http://localhost:5000/api/auth/me', {
        //         headers: { Authorization: `Bearer ${token}` },
        //     });
        //     setUser(res.data); // Lưu thông tin người dùng
        // } catch (err) {
        //     console.error('Failed to fetch user:', err);
        //     navigate('/'); // Điều hướng về trang đăng nhập nếu token không hợp lệ
        // }
    };

    // const fetchUser = async () => {
    //     const token = localStorage.getItem('token');
    //     try {
    //         const res = await axios.get('http://localhost:5000/api/auth/me', {
    //             headers: { Authorization: `Bearer ${token}` },
    //         });
    //         setUser(res.data);
    //         return true;
    //     } catch (err) {
    //         console.error('Failed to fetch user:', err);
    //         navigate('/');
    //         return false;
    //     }
    // };
    

    // Lấy danh sách ghi chú
    const fetchNotes = async () => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.get('http://localhost:5000/api/notes', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setNotes(res.data);
        } catch (err) {
            console.error('Failed to fetch notes:', err);
        }
    };

    // Thêm ghi chú mới
    const handleAddNote = async () => {
        const token = localStorage.getItem('token');
        if (!newNote.trim()) return;
        try {
            await axios.post('http://localhost:5000/api/notes', { content: newNote }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setNewNote('');
            fetchNotes();
        } catch (err) {
            console.error('Failed to add note:', err);
        }
    };

    // Đăng xuất
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    useEffect(() => {
        fetchUser(); // Lấy thông tin người dùng
        fetchNotes(); // Lấy danh sách ghi chú
    }, []);

    return (
        <div className="home-notes-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <header className="user-header">
                    <div className="user-info">
                        <img 
                            src={user.avatar || "https://marketplace.canva.com/b0LFw/MAFW8jb0LFw/1/tl/canva-boy-avatar-illustration-set-collection-MAFW8jb0LFw.png"} 
                            alt="User Avatar" 
                            className="user-avatar" 
                        />
                        <span className="user-name">{user.name || "User"}</span>
                    </div>
                </header>

                <h3>Teamspaces</h3>

                <ul>
                    <li>Home</li>
                    <li>Data notes</li>
                    <li>Blog</li>
                </ul>

                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <header className="header">
                    <h2>Good afternoon, {user.name || "User"}</h2>
                    <input type="text" placeholder="Search or find anything..." />
                </header>

                <section className="notes-section">
                    <h3>Your Notes</h3>
                    <div className="notes-grid">
                        {notes.map((note) => (
                            <div key={note.id} className="note-card">
                                {note.content}
                            </div>
                        ))}
                    </div>
                    <div className="add-note">
                        <input
                            type="text"
                            placeholder="Add a new note..."
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                        />
                        <button onClick={handleAddNote}>Add Note</button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default NotesPage;





// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/NotesPage.css';

// const NotesPage = () => {
//     const [user, setUser] = useState({});
//     const [notes, setNotes] = useState([]);
//     const [newNote, setNewNote] = useState('');
//     const navigate = useNavigate();

//     // Sử dụng useCallback để tránh tái tạo hàm fetchUser mỗi lần render
//     const fetchUser = useCallback(async () => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             navigate('/');
//             return false;
//         }

//         try {
//             const res = await axios.get('http://localhost:5000/api/auth/me', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUser(res.data);
//             return true;
//         } catch (err) {
//             console.error('Failed to fetch user:', err);
//             navigate('/');
//             return false;
//         }
//     }, [navigate]);

//     // Fetch ghi chú
//     const fetchNotes = async () => {
//         const token = localStorage.getItem('token');
//         try {
//             const res = await axios.get('http://localhost:5000/api/notes', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setNotes(res.data);
//         } catch (err) {
//             console.error('Failed to fetch notes:', err);
//         }
//     };

//     // Thêm ghi chú mới
//     const handleAddNote = async () => {
//         const token = localStorage.getItem('token');
//         if (!newNote.trim()) return;
//         try {
//             await axios.post('http://localhost:5000/api/notes', { content: newNote }, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setNewNote('');
//             fetchNotes();
//         } catch (err) {
//             console.error('Failed to add note:', err);
//         }
//     };

//     // Đăng xuất
//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/');
//     };

//     useEffect(() => {
//         const init = async () => {
//             const isAuthenticated = await fetchUser();
//             if (isAuthenticated) {
//                 fetchNotes();
//             }
//         };
//         init();
//     }, [fetchUser]); // fetchUser đã được sử dụng trong useCallback và thêm vào dependency array

//     return (
//         <div className="home-notes-container">
//             <aside className="sidebar">
//                 <header className="user-header">
//                     <div className="user-info">
//                         <img 
//                             src={user.avatar || "https://via.placeholder.com/40"} 
//                             alt="User Avatar" 
//                             className="user-avatar" 
//                         />
//                         <span className="user-name">{user?.name || "User"}</span>
//                     </div>
//                 </header>
//                 <h3>Teamspaces</h3>
//                 <ul>
//                     <li>Home</li>
//                     <li>Blog</li>
//                     <li>List notes</li>
//                     <li>..</li>
//                     <li>..</li>
//                 </ul>
//                 <button className="invite-btn">Invite members</button>
//                 <button className="logout-btn" onClick={handleLogout}>Đăng xuất</button>
//             </aside>

//             <main className="main-content">
//                 <header className="header">
//                     <h2>Good afternoon, {user?.name || "User"}</h2>
//                     <input type="text" placeholder="Search or find anything..." />
//                 </header>

//                 <section className="note-input">
//                     <textarea
//                         placeholder="Viết ghi chú mới..."
//                         value={newNote}
//                         onChange={(e) => setNewNote(e.target.value)}
//                     />
//                     <button className="add-btn" onClick={handleAddNote}>+ Thêm ghi chú</button>
//                 </section>

//                 <section className="recent-notes">
//                     <h3>Ghi chú gần đây</h3>
//                     <div className="notes-grid">
//                         {notes.map(note => (
//                             <div key={note.id} className="note-card">
//                                 {note.content}
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default NotesPage;
