# 🚀 Angular Full Stack Authentication Application

## 📌 Project Overview

This project is a **Full Stack Web Application** built using **Angular (Frontend)** and **Node.js + Express (Backend)** with **MongoDB Database**.

It provides a complete **Authentication System** with:

* User Registration
* User Login
* Profile Page
* Backend API Integration

---

## 🛠️ Technologies Used

### 🔹 Frontend

* Angular
* TypeScript
* HTML / CSS

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MongoDB (Mongoose)

---

## 📂 Project Structure

```
Angular-Application/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   └── services/
│
├── public/
├── package.json
├── angular.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 Step 1: Clone Repository

```
git clone https://github.com/shreyasnarsale/TE.IT.WAD.git
cd TE.IT.WAD/Angular-Application
```

---

### 🔹 Step 2: Install Frontend Dependencies

```
npm install
```

---

### 🔹 Step 3: Install Backend Dependencies

```
cd backend
npm install
```

---

## 🔐 Environment Configuration

Create a `.env` file inside the **backend** folder:

```
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/angular-app
JWT_SECRET=your_secret_key
```

---

## ▶️ Running the Application

### 🟢 Start Backend Server

```
cd backend
npm start
```

Backend will run on:
👉 http://localhost:5000

---

### 🟢 Start Angular Frontend

Open new terminal:

```
cd Angular-Application
ng serve
```

Frontend will run on:
👉 http://localhost:4200

---

## 🔁 Application Flow

1. User registers via Angular UI
2. Angular sends API request to backend
3. Backend stores data in MongoDB
4. User logs in and receives authentication response
5. Data is managed using services

---

## 🚫 Important Notes

* Do NOT upload `node_modules`
* Do NOT upload `.env` file
* Ensure MongoDB is running before backend
* Backend runs on port **5000**
* Frontend runs on port **4200**

---

## 📌 Features

✅ User Registration & Login
✅ Angular Components & Routing
✅ REST API using Express
✅ MongoDB Integration
✅ Clean Project Structure

---

## 📈 Future Enhancements

* JWT Authentication implementation
* Password encryption using bcrypt
* Role-based access control
* UI improvements
* Deployment on cloud

---

## 👨‍💻 Author

**Shreyas Narsale**

---

## 📜 License

This project is for educational purposes only.
