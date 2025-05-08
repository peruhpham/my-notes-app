const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const { register, login } = require('../controllers/authController');
// const { authenticateJWT } = require('../middleware/authMiddleware'); // Thêm middleware xác thực token

// // Đăng ký người dùng
// router.post('/register', register);

// // Đăng nhập người dùng
// router.post('/login', login);

// // Lấy thông tin người dùng hiện tại (sau khi đã xác thực)
// router.get('/me', authenticateJWT, (req, res) => {
//     // req.user sẽ chứa thông tin người dùng sau khi được xác thực
//     res.json({
//         userId: req.user.userId,
//         username: req.user.username,
//     });
// });

// module.exports = router;


