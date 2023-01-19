import express from "express";
import mongoose, { ConnectOptions }  from "mongoose";
import { Auth } from "./routes/auth";
import bodyparser from "body-parser"
import cors from "cors";

const app = express();
const port = 8888;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors({origin: "http://localhost:8889", credentials: true}));
app.use(Auth);

app.get("/", async (req, res) => {
    res.send("salut !");
});

app.listen(port, function () {
    console.log("app listening on port", port);
});
