# 🚀 Node.js Static Website with Contact Form

![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![Express](https://img.shields.io/badge/Express.js-Framework-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

A complete **Node.js + Express.js** application that serves a responsive static website with a fully functional contact form and backend data handling.

---

## 📖 Project Overview

This project demonstrates how to build a full-stack web application using **Node.js** and **Express.js**, including frontend UI, backend API, and data storage.

### 🔑 Key Highlights

* Static website hosting using Express
* Contact form with validation
* Backend form handling (POST requests)
* JSON-based data storage (no database required)
* Responsive UI for all devices
* Clean and modular code structure

---

## ✨ Features

* 🌐 Serve static files (HTML, CSS, JS)
* 📩 Contact form with real-time validation
* 🔁 Asynchronous form submission (Fetch API)
* 💾 Store data in JSON file
* 📊 Admin route to view submissions
* ⚠️ Error handling & validation
* 📱 Fully responsive design
* 🎨 Modern UI with animations

---

## 📁 Project Structure

```
Node Application/
├── server.js
├── package.json
├── README.md
│
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
└── data/
    └── submissions.json
```

---

## ⚙️ Installation

### 1️⃣ Navigate to Project Folder

```bash
cd "C:\Users\Shreyas\Desktop\Node Application"
```

### 2️⃣ Initialize Project (if needed)

```bash
npm init -y
```

### 3️⃣ Install Dependencies

```bash
npm install express body-parser
```

---

## ▶️ Run the Application

```bash
npm start
```

or

```bash
node server.js
```

---

## 🌍 Open in Browser

👉 http://localhost:3000

---

## 📬 Contact Form Workflow

1. User fills form (Name, Email, Message)
2. Clicks **Submit**
3. Data sent via **Fetch API (POST)**
4. Server validates input
5. Data stored in `submissions.json`
6. Success message displayed

---

## 🔗 API Endpoints

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| POST   | `/submit`            | Submit contact form  |
| GET    | `/admin/submissions` | View all submissions |

---

## 💾 Sample Data

```json
{
  "id": 1713500000000,
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!",
  "submittedAt": "2026-04-19T10:30:00.000Z"
}
```

---

## 🎨 UI Sections

* Header (Navigation)
* Hero Section
* About Section
* Contact Form
* Footer

### 📱 Responsive Design

* Desktop
* Tablet (768px)
* Mobile (480px)

---

## 🧠 Code Explanation

### 🔹 Backend (server.js)

* Express server setup
* Middleware configuration
* Routes handling (GET, POST)
* JSON file read/write
* Input validation

### 🔹 Frontend

* HTML5 semantic structure
* CSS3 styling (Flexbox + Grid)
* JavaScript (Fetch API + validation)

---

## 🧪 Validation & Error Handling

* Required fields check
* Email format validation
* Server-side validation
* User-friendly messages

---

## ⚠️ Troubleshooting

| Issue               | Solution              |
| ------------------- | --------------------- |
| npm not found       | Install Node.js       |
| Port already in use | Change PORT           |
| Express not found   | Run `npm install`     |
| Form not submitting | Check browser console |

---

## 🔮 Future Improvements

* 🔹 MongoDB integration
* 🔹 Authentication system
* 🔹 Email notifications
* 🔹 Admin dashboard UI
* 🔹 Deployment on AWS / Render

---

## 🎯 Learning Outcomes

* Understanding Express.js
* Handling HTTP requests
* Serving static files
* Form validation techniques
* File-based data storage
* Responsive web design

---

## 👨‍💻 Author

**Shreyas Narsale**
BE IT Student

---

## 📜 License

MIT License – Free to use for learning purposes.

---

## 🙌 Acknowledgement

Developed as part of academic coursework to understand Node.js and full-stack fundamentals.

---

⭐ *If you found this project helpful, feel free to use and enhance it!*
