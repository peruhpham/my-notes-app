
// const jwt = require('jsonwebtoken');
// const JWT_SECRET = 'your_jwt_secret';

// module.exports = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     if (!authHeader) return res.sendStatus(401);

//     const token = authHeader.split(' ')[1];
//     try {
//         const decoded = jwt.verify(token, JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         res.sendStatus(403);
//     }
// };



const jwt = require('jsonwebtoken');
const secret = 'your_secret_key';

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
