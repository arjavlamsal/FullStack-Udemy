import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); //__dirname is the directory name of the current module.

const app = express();  // Create an instance of express.
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse 'form' data. Always should be before the route handlers.

// Serve the HTML file.
app.get("/", (req, res) => {  
  res.sendFile(__dirname + "/public/index.html");
});

// Handle form submission.
app.post("/submit", (req, res) => { 
  console.log(req.body);  // Request body is parsed and stored in req.body by the middleware.
});

// Start the server.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});





