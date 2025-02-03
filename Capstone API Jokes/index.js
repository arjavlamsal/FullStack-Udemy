import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

const API_URL = "https://v2.jokeapi.dev/joke/Any"

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL, {
            params: {
                type: "single",
                amount: 1,
            }
        });
        res.render("index.ejs", { joke : JSON.stringify(result.data.joke) });
    } catch (error) {
        console.log(error);
    };
});

app.listen(PORT, () => {
    console.log("Listening on PORT:3000.");
});