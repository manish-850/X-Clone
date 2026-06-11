# X/Twitter Clone

A full-stack X/Twitter clone built with Express, MongoDB, and React/Vite.

## Overview

This repository contains a backend API and a frontend client for a social feed application. Users can register, log in, create posts with images, like/dislike posts, follow/unfollow other users, and browse a feed. The backend stores data in MongoDB and uploads images through ImageKit.

## Features

- User authentication with registration, login, and logout
- Protected frontend routes for authenticated users
- Create posts with optional image upload
- Like and dislike posts
- Follow and unfollow users
- Fetch current user profile and follower/following lists
- Feed endpoint to browse posts
- Cookie-based JWT authentication with `httpOnly` cookies

## Tech Stack

- Backend: Node.js, Express, MongoDB, Mongoose
- Frontend: React, Vite, React Router
- Authentication: JWT, cookies
- Image upload: ImageKit
- HTTP client: Axios
- Styling: SCSS

## Repository Structure

- `server.js` - backend entry point
- `src/app.js` - Express app configuration
- `src/config/database.js` - MongoDB connection logic
- `src/routes/` - backend route definitions
- `src/controllers/` - request handlers
- `src/models/` - Mongoose models
- `src/services/imageKit.js` - image upload helper
- `Frontend/` - React frontend app
- `Frontend/src/` - frontend source files
- `Frontend/src/Features/` - feature-specific pages and services
- `Frontend/src/Context/` - global state providers

## Prerequisites

- Node.js 18+ and npm
- MongoDB database
- ImageKit account for image uploads

## Setup

### Backend

1. Install dependencies in the project root:

```bash
npm install
```

2. Create a `.env` file in the project root with the following keys:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

3. Start the backend server:

```bash
npm run dev
```

The backend listens on `http://localhost:3000`.

### Frontend

1. Install dependencies in the frontend folder:

```bash
cd Frontend
npm install
```

2. Start the frontend dev server:

```bash
npm run dev
```

The frontend application will run on Vite's default port, typically `http://localhost:5173`.

## API Endpoints

### Auth

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in with username/email and password
- `POST /api/auth/logout` - Log out and clear the auth cookie

### Posts

- `POST /api/posts/` - Create a new post (protected, multipart form data with `postImg`)
- `GET /api/posts/` - Get all posts created by the current user
- `GET /api/posts/details/:postId` - Get a single post's details
- `POST /api/posts/like/:postId` - Like a post
- `POST /api/posts/dislike/:postId` - Remove a like from a post
- `GET /api/posts/feed` - Get the global feed
- `GET /api/posts/liked` - Get posts liked by the current user
- `GET /api/posts/likeCount/:postId` - Get the like count for a post

### User

- `POST /api/user/follow/:id` - Follow a user
- `POST /api/user/unfollow/:id` - Unfollow a user
- `GET /api/user/me` - Get current user profile
- `GET /api/user/following` - Get the current user's followings
- `GET /api/user/followers` - Get the current user's followers
