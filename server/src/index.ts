import express from "express";
import mongoose, { ConnectOptions }  from "mongoose";
import { Auth } from "./routes/auth";
import bodyparser from "body-parser"
import cors from "cors";
import * as Mongoose from "mongoose"

const app = express();
const port = 8888;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors({origin: "http://localhost:8889", credentials: true}));
app.use(Auth);

const username = "username";
const password = "password";
const cluster = "cluster";
const dbname = "db";

app.get("/", async (req, res) => {
    mongoose.connect(
        `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true
        } as ConnectOptions
    )
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Conneced successfully");
    });
    //res.send("salut !");
});

app.listen(port, function () {
    console.log("app listening on port", port);
});
