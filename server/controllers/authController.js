const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const JWT_SECRET = 'your_jwt_secret';

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existing.length > 0) return res.status(400).json({ message: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
            [username, email, hashedPassword]
        );
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [users] = await db.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        if (users.length === 0) {
            console.log('No user found with email:', email); // Debug log
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const user = users[0];
        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            console.log('Incorrect password for user:', user.email); // Debug log
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // console.log('User logged in:', user.email); // Debug log
        // Nếu login thành công, tạo JWT token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });

        console.log('User logged in:', user.email); // Debug log

        // Trả về token và username
        res.json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('../db');
// const JWT_SECRET = 'your_jwt_secret'; // Đổi thành biến môi trường trong thực tế

// exports.register = async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
//         if (existing.length > 0) return res.status(400).json({ message: 'Email already exists' });

//         const hashedPassword = await bcrypt.hash(password, 10);
//         await db.query(
//             'INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
//             [username, email, hashedPassword]
//         );
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// exports.login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const [users] = await db.query(
//             'SELECT * FROM users WHERE email = ?',
//             [email]
//         );
//         if (users.length === 0) {
//             console.log('No user found with email:', email); // Debug log
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         const user = users[0];
//         const valid = await bcrypt.compare(password, user.password);

//         if (!valid) {
//             console.log('Incorrect password for user:', user.email); // Debug log
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         // Tạo JWT token với thời gian hết hạn 1 ngày
//         const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });

//         console.log('User logged in:', user.email); // Debug log

//         // Trả về token và username
//         res.json({ token, username: user.username });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };


// exports.getMe = async (req, res) => {
//     try {
//         const [users] = await db.query('SELECT id, username, email FROM users WHERE id = ?', [req.user.userId]);
//         if (users.length === 0) return res.status(404).json({ message: 'User not found' });
//         res.json(users[0]);
//     } catch (err) {
//         res.status(500).json({ message: 'Server error' });
//     }
// };
