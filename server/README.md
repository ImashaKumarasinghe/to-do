# TODO App Backend

This is the backend API for the TODO app.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Setup Instructions
# TODO App - Backend

A Node.js/Express REST API for the TODO application, connected to MongoDB using Mongoose.

---

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

---

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Environment File

Create a `.env` file in the root of the project and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

> Replace `your_mongodb_connection_string` with your actual MongoDB Atlas URI or local MongoDB URI.

### 3. Run the Backend

```bash
npm run dev
```

The backend server will run at:
http://localhost:5000

---

## API Endpoints

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| GET    | /api/todos            | Get all todos       |
| POST   | /api/todos            | Create a new todo   |
| PUT    | /api/todos/:id        | Update a todo       |
| PATCH  | /api/todos/:id/done   | Toggle done status  |
| DELETE | /api/todos/:id        | Delete a todo       |

---

## Assumptions and Limitations

- Authentication is not included as it was not required for this assignment.
- All TODO items are shared globally (no user-specific data).
- MongoDB Atlas or a local MongoDB instance can be used.

---

## Project Structure
server/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── Todo.js
│   │
│   ├── controllers/
│   │   └── todoController.js
│   │
│   ├── routes/
│   │   └── todoRoutes.js
│   │
│   ├── middleware/
│   │   └── errorHandler.js
│   │
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
└── README.md


1. Install dependencies:

```bash
npm install

2.Create a .env file:
PORT=5000
MONGO_URI=my_mongodb_connection_string

3.Run the backend:
npm run dev

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | /api/todos          | Get all todos      |
| POST   | /api/todos          | Create todo        |
| PUT    | /api/todos/:id      | Update todo        |
| PATCH  | /api/todos/:id/done | Toggle done status |
| DELETE | /api/todos/:id      | Delete todo        |

4.Assumptions and Limitations
This app does not include user authentication.
All todos are shared globally.
MongoDB Atlas or local MongoDB can be used.