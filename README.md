# Tasks Express Backend Web Application

This is express backend app that allows users to view tasks details, as well as add, edit, and delete tasks from a database.

## Routes
- /
- /login
- /register
- /task/all
- /task/add
- /task/update/:id
- /task/delete/:id

## Features

- View tasks details and information
- Add, edit, and delete tasks
- Secure user authentication with JWT
- Efficient data storage and retrieval with MongoDB Atlas
- REST APIs and CRUD operations for seamless user experience

## Getting Started

To get started with this project, you will need to:

1. Clone the repository
2. Install dependencies with `npm install`
3. Configure environment variables (see below)
4. Start the application with `npm start`

### Environment Variables

The following environment variables need to be configured:

- `PORT`: the port number for the server to listen on
- `MONGODB_URI`: the URI for the MongoDB Atlas database
- `JWT_SECRET`: the secret key for JWT authentication

## Technologies Used

- Express.js
- MongoDB Atlas
- JWT

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
