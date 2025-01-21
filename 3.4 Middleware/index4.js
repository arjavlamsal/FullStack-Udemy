import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny"));
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("/Users/arjav/Downloads/3.4 Middleware/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`${req.body.street}${req.body.pet}`);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});