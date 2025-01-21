import express from "express";

const app = express();
const port = 3000;

// Custom middleware for logging.
const logger = (req, res, next) => {  // 2 objects req & res, 1 method next.
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  next(); // Pass control to the next middleware function, if no then to router handler. If not called, the request will hang.
}

// Use the custom logger middleware.
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

