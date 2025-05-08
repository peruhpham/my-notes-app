# my-notes-app
my-notes-app

/my-notes-app
├── /client (Frontend - ReactJS)
│   ├── /public
│   │   ├── index.html
│   ├── /src
│   │   ├── /api
│   │   │   └── index.js
│   │   ├── /components
│   │   │   ├── NotesPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   └── ChangePasswordPage.js
│   │   ├── /styles
│   │   │   ├── LoginPage.css
│   │   │   ├── RegisterPage.css
│   │   │   ├── NotesPage.css
│   │   │   ├── ChangePasswordPage.css
│   │   │   └── theme.css
│   │   ├── App.js
│   │   └── index.js
├── /server (Backend - ExpressJS)
│   ├── /controllers
│   │   ├── authController.js
│   │   ├── noteController.js
│   ├── /db
│   │   └── index.js
│   ├── /routes
│   │   ├── authRoutes.js
│   │   └── noteRoutes.js
│   ├── /middleware
│   │   └── authenticateToken.js
│   ├── app.js
│   └── config.js
└── package.json



Cài các thư viện bị thiếu
Chạy lệnh sau trong thư mục client:
cd client
npm install react-router-dom axios