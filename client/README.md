# TODO App - Frontend

A React-based frontend for the TODO application. Allows users to view, create, edit, mark as done/undone, and delete TODO items through a clean and simple user interface.

---

## Tech Stack

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- CSS

---

## Features

- View all TODO items
- Add a new TODO with a title and optional description
- Edit TODO title and description
- Mark a TODO as done or undone
- Delete a TODO
- Display a loading state while fetching data
- Show user-friendly error messages
- Completed TODOs are displayed with distinct styling

---

## Project Structure

client/
│
├── src/
│   ├── api/
│   │   └── todoApi.js
│   │
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── ErrorMessage.jsx
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
└── README.md

---

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Environment File

Create a `.env` file inside the `client/` folder and add the following:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 3. Run the Frontend

```bash
npm run dev
```

The frontend will be available at:
http://localhost:5173

---

## Backend Requirement

Before using the frontend, make sure the backend server is running at:
http://localhost:5000

---

## API Connection

The frontend communicates with the backend using **Axios**.

**Base URL:**
http://localhost:5000/api

**Example endpoint:**
GET http://localhost:5000/api/todos

---

## How to Test

1. Start the backend server.
2. Start the frontend using `npm run dev`.
3. Open `http://localhost:5173` in your browser.
4. Add a new TODO.
5. Edit the TODO.
6. Mark it as done or undone.
7. Delete the TODO actions.

---

## Assumptions and Limitations

- The backend must be running before starting the frontend.
- Authentication is not included as it was not required for this assignment.
- All TODO items are currently shared globally (no user-specific data).
- Basic CSS is used for styling.
- MongoDB data is managed through the backend API.