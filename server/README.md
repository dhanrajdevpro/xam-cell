# XamCell Server API

This is the Node.js/Express backend API server for the XamCell application.

## Features

- RESTful API endpoints
- Authentication routes
- Student management
- CORS enabled
- Error handling middleware

## API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Students

- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### General

- `GET /api` - API status
- `GET /api/health` - Health check

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Start production server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:5000` by default.

## Environment Variables

Create a `.env` file in the server directory:

```
PORT=5000
NODE_ENV=development
```

## Project Structure

```
server/
├── index.js              # Main server file
├── package.json          # Server dependencies
├── routes/               # API route handlers
│   ├── auth.js          # Authentication routes
│   └── students.js      # Student management routes
└── middleware/          # Custom middleware (future use)
```
