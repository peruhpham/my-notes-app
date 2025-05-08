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

Tuyệt vời! Đây là file `README.md` mẫu mình soạn sẵn cho dự án React + Express + MySQL của bạn:

---

```markdown
# 📓 Notes Web Application

Một ứng dụng ghi chú (Notes Web App) gồm:
- ✅ Frontend: ReactJS
- ✅ Backend: ExpressJS + MySQL

---

## 📦 Cấu trúc thư mục

```

/root-project
│
├── /client (Frontend - React)
│   └── ...
│
├── /server (Backend - ExpressJS)
│   ├── /controllers
│   ├── /db
│   ├── /middleware
│   ├── /routes
│   ├── app.js
│   └── package.json
│
└── README.md

````

---

## 🚀 Hướng dẫn cài đặt

### 1️⃣ Clone repository

```bash
git clone <repo-url>
cd root-project
````

---

### 2️⃣ Cài đặt frontend (React)

```bash
cd client
npm install
```

---

### 3️⃣ Cài đặt backend (ExpressJS)

```bash
cd ../server
npm install
```

---

### 4️⃣ Cấu hình database (MySQL)

* Tạo cơ sở dữ liệu MySQL:

  ```sql
  CREATE DATABASE notes_db;
  ```

* Chỉnh file `.env` trong thư mục `/server` (tạo nếu chưa có):

  ```
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=your_mysql_password
  DB_NAME=notes_db
  JWT_SECRET=your_jwt_secret
  ```

---

## 🔥 Chạy dự án

### Chạy backend

```bash
cd server
npm start
```

### Chạy frontend

```bash
cd ../client
npm start
```

---

## 🌟 Các API chính (Backend)

| Phương thức | Endpoint           | Chức năng                |
| ----------- | ------------------ | ------------------------ |
| POST        | /api/auth/login    | Đăng nhập                |
| POST        | /api/auth/register | Đăng ký                  |
| GET         | /api/auth/me       | Lấy thông tin người dùng |
| GET         | /api/notes         | Lấy danh sách ghi chú    |
| POST        | /api/notes         | Tạo ghi chú mới          |
| PUT         | /api/notes/\:id    | Cập nhật ghi chú         |
| DELETE      | /api/notes/\:id    | Xóa ghi chú              |

---

## 🛡️ Lưu ý

✅ Không commit thư mục `node_modules` → đã có `.gitignore`
✅ Sử dụng `npm install` để cài thư viện sau khi clone
✅ Luôn giữ file `.env` nằm ngoài Git (thêm vào `.gitignore` nếu cần)

---

## 💖 Đóng góp

Mọi ý tưởng đóng góp, issue, hoặc pull request đều được hoan nghênh!

---

## 📄 License

MIT License © 2025 Your Name

```

---

```
