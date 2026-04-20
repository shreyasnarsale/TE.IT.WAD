# 📘 Practical: GitHub Version Control using Git Commands

## 🎯 Aim

To create a version control account on GitHub and use Git commands to create a repository and push code to GitHub.

---

## 🛠️ Tools & Technologies Used

* Git
* GitHub
* Command Prompt / Terminal

---

## ⚙️ Procedure

### 🔹 Step 1: Create GitHub Account and Repository

* Sign up on GitHub
* Create a new repository

---

### 🔹 Step 2: Clone Repository to Local System

```bash
git clone https://github.com/your-username/repository-name.git
cd repository-name
```

---

### 🔹 Step 3: Add Files to Repository

```bash
git add .
```

---

### 🔹 Step 4: Commit Changes

```bash
git commit -m "Initial commit"
```

---

### 🔹 Step 5: Push Code to GitHub

```bash
git push origin main
```

---

### 🔹 Step 6: Create and Switch Branch

```bash
git checkout -b new-feature
```

---

### 🔹 Step 7: Add Changes in Branch

```bash
git add .
git commit -m "Feature added"
git push origin new-feature
```

---

### 🔹 Step 8: Merge Branch to Main

```bash
git checkout main
git pull origin main
git merge new-feature
git push origin main
```

---

### 🔹 Step 9: Pull Latest Changes

```bash
git pull origin main
```

---

## 📌 Output

* Repository successfully created on GitHub
* Files uploaded and version controlled
* Branch created and merged successfully

---

## ⚠️ Important Notes

* Use **main** instead of master
* Always commit before pushing
* Use meaningful commit messages
* Avoid uploading unnecessary files

---


