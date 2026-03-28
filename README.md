# SAIntellect Task Manager

A full-stack Task Manager application built with **React** (frontend) and **Node.js + Express** (backend).

---

## 🗂️ Project Structure

```
Task Manager - SAIntellect/
├── Backend/                  # Express REST API
│   ├── src/
│   │   ├── controller/       # Route handlers (task.js)
│   │   ├── Errors/           # Custom error class
│   │   └── helpers/          # JWT authenticator
│   ├── .env                  # Environment variables
│   └── index.js              # App entry point
│
└── Task_manager_frontend/    # React + Vite frontend
    ├── src/
    │   ├── components/       # Reusable UI components
    │   ├── pages/            # Page-level components
    │   └── utils/            # API call utility
    └── index.html
```

---

## ✨ Features

- 📋 View all tasks
- ➕ Add new tasks (Title, Description, Status)
- ✏️ Edit existing tasks
- 🗑️ Delete tasks with confirmation
- 🔒 Bearer token authorization on all API routes
- 🌐 CORS enabled for frontend-backend communication

---

## 🛠️ Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | React, Vite             |
| Backend   | Node.js, Express        |
| Auth      | Static Bearer Token     |
| Dev Tool  | Nodemon                 |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend/` folder:

```env
secret=mysecret
```

Start the backend server:

```bash
npm run start:dev
```

The API will run on **http://localhost:3000**

---

### Frontend Setup

```bash
cd Task_manager_frontend
npm install
npm run dev
```

The app will run on **http://localhost:5173**

---

## 📡 API Endpoints

All endpoints require the header:
```
Authorization: Bearer saintellect
```

| Method | Endpoint              | Description        |
|--------|-----------------------|--------------------|
| GET    | `/api/task/all`       | Get all tasks      |
| POST   | `/api/task/add`       | Create a new task  |
| PUT    | `/api/task/update/:id`| Update a task      |
| DELETE | `/api/task/delete/:id`| Delete a task      |

### Task Object

```json
{
  "id": 1,
  "title": "Task Title",
  "description": "Task description",
  "status": "pending | in-progress | completed"
}
```

---

## 📁 Environment Variables

| Variable | Description          | Example     |
|----------|----------------------|-------------|
| `secret` | JWT signing secret   | `mysecret`  |

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push and open a Pull Request

---

## 👤 Author

**SAIntellect** — [GitHub](https://github.com/Sahusuman880)
