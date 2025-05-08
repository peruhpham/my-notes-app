const db = require('../db');

// Get all notes
exports.getNotes = (req, res) => {
    const query = 'SELECT * FROM notes WHERE user_id = ?';

    db.query(query, [req.user.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to fetch notes' });
        }
        res.json(result);
    });
};

// Create a new note
exports.createNote = (req, res) => {
    const { content } = req.body;
    const query = 'INSERT INTO notes (user_id, content) VALUES (?, ?)';

    db.query(query, [req.user.id, content], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to create note' });
        }
        res.status(201).json({ message: 'Note created successfully' });
    });
};


// const db = require('../db');  // Giả sử bạn đang sử dụng MySQL để lưu trữ ghi chú

// // Lấy tất cả ghi chú
// exports.getNotes = async (req, res) => {
//     try {
//         const [notes] = await db.query('SELECT * FROM notes');
//         res.json(notes);
//     } catch (err) {
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// // Tạo ghi chú mới
// exports.createNote = async (req, res) => {
//     const { content } = req.body;
//     try {
//         if (!content) {
//             return res.status(400).json({ message: 'Content is required' });
//         }
//         await db.query('INSERT INTO notes (content) VALUES (?)', [content]);
//         res.status(201).json({ message: 'Note created successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Server error' });
//     }
// };

