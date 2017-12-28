# MEAN Stack Blog Project (Under Developement!)
Developing it for learning MEAN Stack web development

## Stage-1: Backend API Development
Backend API Developement for Posts using **NodeJS**, **Express** and **Mongoose**

#### Posts URL Design:-

Method | Path | Description
--- | --- | ---
GET | /api/posts | Get latest 5 posts
POST | /api/posts | For creating a new post
GET | /api/posts?page=2 | Pagination
GET | /api/posts/:id | Get a post by ID
PUT | /api/posts/:id | Update a post by ID
DELETE | /api/posts/:id | Delete a post by ID

#### Comments URL Design:-

Method | Path | Description
--- | --- | ---
GET | /api/posts/:id/comments | Get all comments
POST | /api/posts/:id/comments | For creating a new comment
GET | /api/posts/:id/comments/:id | Get a comment by ID
PUT | /api/posts/:id/comments/:id | Update a comment by ID
DELETE | /api/posts/:id/comments/:id | Delete a comment by ID

## Stage-2: Frontend Developement
Frontend developement and connecting it with backend API using **AngularJS**