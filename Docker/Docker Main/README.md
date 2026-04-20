# 🐳 Dockerized Node.js Application

## 📌 Project Overview

This project demonstrates how to run a **Node.js (Express) application inside Docker**.
The application serves static files and runs on port **3000**.

---

## 📂 Project Structure

```id="yq9p9x"
Docker/
│
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
└── public/
    └── index.html
```

---

## 🛠️ Requirements

* Node.js (for local testing)
* Docker installed

---

## ⚙️ Setup Instructions

### 🔹 Step 1: Verify Docker Installation

```id="4z8bap"
docker --version
docker run hello-world
```

---

### 🔹 Step 2: Install Dependencies (Local)

```id="y2o0r4"
npm install
```

---

## 🐳 Docker Setup

### 🔹 Step 3: Build Docker Image

```id="u8rjfp"
docker build -t my-node-app .
```

---

### 🔹 Step 4: Run Docker Container

```id="y0s6jm"
docker run -d -p 3000:3000 --name node-container my-node-app
```

---

### 🔹 Step 5: Check Running Containers

```id="2h8qdc"
docker ps
```

---

### 🔹 Step 6: Stop Container

```id="4k3p1p"
docker stop node-container
```

---

### 🔹 Step 7: Remove Container

```id="7f7y9g"
docker rm node-container
```

---

### 🔹 Step 8: Remove Image

```id="xq3sh8"
docker rmi my-node-app
```

---

## ▶️ Running the Application

After running the container, open your browser:

👉 http://localhost:3000

---

## 📌 Application Flow

1. Docker builds image from Dockerfile
2. Node.js app runs inside container
3. Express server listens on port 3000
4. Browser accesses app via localhost

---

## ⚠️ Important Notes

* Ensure port **3000** is free
* Do not delete `package.json`
* Always rebuild image after changes

---

## 📈 Output

* Node.js app runs successfully inside Docker
* Accessible via browser

---

## 📚 Conclusion

This practical demonstrates containerization of a Node.js application using Docker, making the application portable and easy to deploy.

---
