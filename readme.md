# JWT Authentication System
A secure JWT Authentication System built using the MERN stack. This project allows users to register, log in, access protected routes, and log out using JSON Web Tokens (JWT).

## Features
- User Signup
- User Login
- JWT Authentication
- Protected Profile Route
- Logout Functionality
- Password Hashing using bcrypt
- 404 Error Page
- Responsive UI

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

## Folder Structure
JWT-Authentication/
│
├── backend/
├── frontend/
└── README.md

## Installation

### Clone the repository
```bash
git clone <your-repository-url>
```

### Backend
```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:
```bash
cd Backend
node server.js /nodemon server.js

### Frontend
```bash
cd Frontend
npm install
npm run dev

## Future Improvements
- Implement Forgot Password functionality.
- Add Email Verification during signup.
- Introduce Refresh Tokens for improved security.
- Add Role-Based Access Control (Admin/User).
- Enable Update Profile functionality.
- Allow users to change their password.
