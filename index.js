const jsonServer = require("json-server");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// JSON Server setup
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Use JSON Server middlewares
app.use(middlewares);

// Mount JSON Server router
app.use("/", router); // Assuming you want JSON Server to handle all routes

// Vercel deployment requires listening on process.env.PORT
module.exports = app; // Export the Express app for deployment

// Optional: Start the server locally
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
