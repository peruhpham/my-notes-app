const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Lấy tất cả ghi chú
router.get('/', noteController.getNotes);

// Tạo ghi chú mới
router.post('/', noteController.createNote);

module.exports = router;

