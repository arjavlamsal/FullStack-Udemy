import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;   // This variable will be used to check if the user is authorised.

app.use(express.urlencoded({ extended: true }));    // This is used to parse the data sent from the form.

function passwordCheck(req, res, next){ // Custom Middleware that checks the password.
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
        userIsAuthorised = true;
    }
    next(); // This is used to move to the next middleware or route.
}

app.use(passwordCheck); // Calling the custom middleware.

app.get('/', (req, res) => {    // This is the route that the user will see when they first visit the website.
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {  // This is the route that the form sends the data to.
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect('/');
}
});


app.listen(port, () => {    // Starts the server.
    console.log(`Server is running on port ${port}`);
});


