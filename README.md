# 📝 Fullstack Blog Application

A fullstack blog platform built with **Vue.js, Node.js, Express, Prisma, and PostgreSQL**.  
This project demonstrates building and connecting a complete frontend and backend system with authentication and API integration.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based login system)
- 📝 Create, read, and manage blog posts (API ready)
- 🌐 RESTful API built with Express & Prisma
- 🎨 Responsive frontend built with Vue.js
- 🔗 Frontend connected to backend for dynamic data

---

## 🛠 Tech Stack

### Frontend
- Vue 3 (Vite)
- Vue Router
- Axios

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

---

## 📂 Project Structure
blog_app/
├── backend/
│ ├── routes/
│ ├── controllers/
│ ├── prisma/
│ └── server.js / app.js
│
├── frontend/
│ └── blog_app/
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── router/


---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/anjsola/blog_app.git
cd blog_app

2. Setup Backend
cd backend
npm install

Create a .env file:

PORT=5000
DATABASE_URL=your_postgresql_url
JWT_SECRET=your_secret

Run backend:

npm run dev

3. Setup Frontend
cd frontend/blog_app
npm install
npm run dev

Frontend runs on:

http://localhost:5173
🔌 API Endpoints (Sample)
POST /api/auth/login
POST /api/auth/register
GET /api/posts
POST /api/posts
🚧 Current Status

This project is actively being developed.
Upcoming features include:

✍️ Create post from frontend
🔐 Protected routes
📄 Individual article pages
🚀 Deployment

💡 What I Learned
Building REST APIs with Express and Prisma
Implementing JWT authentication
Connecting Vue frontend to backend APIs
Structuring a fullstack application