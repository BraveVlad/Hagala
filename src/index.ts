import "dotenv/config";
import { createServer } from "http";
import express from "express";
import cookieParser from "cookie-parser";
import { json } from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(cookieParser());
app.use(json());

app.get("/api/hello", (req, res) => {
    res.send("world");
});

app.use(express.static("public"));

const server = createServer(app);
const port = process.env.PORT ?? 3000;

async function init() {
    if (!process.env.MONGO_CONNECTION_STRING) {
        throw new Error("Must provide connection string for mongodb");
    }

    if (!process.env.DB_NAME) {
        throw new Error("Must provide main DB name");
    }

    // TODO - Set DB AND CONNECTION STRING
    // await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    //     dbName: process.env.DB_NAME
    // });

    server.listen(port, () => console.log(`Listening on http://localhost:${port}`));
}

init();