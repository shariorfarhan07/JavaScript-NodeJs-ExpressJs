// Import Express.js module
const express = require('express');
let todo=[
]
// Initialize the Express application
const app = express();
//  this is a middleware that tells to parse everything as json
app.use(express.json()); 
// Define the port number for the server to listen on
const port = 3000;

// Define a route for the root URL ('/') and specify the response
app.get('/', (req, res) => {
  res.send(todo);
});

app.post('/', (req, res) => {
    todo.push(req.body);
    res.send("done");
  });

// Start the server and have it listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log a message to the console indicating the server is running
});