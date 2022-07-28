import express from "express";
import http from "http";
import fs from "fs";
import dotenv from "dotenv";
import body_parser from "body-parser";
import morgan from "morgan";
import { errorMiddleWare } from "./Middlewares/errorMiddleWare";
import quizRouter from "./Routers/quizRouter";

const app = express();
dotenv.config();

//listening to port 8000
const port = process.env.PORT;

//use morgan
app.use(morgan(":method :url :status :http-version :response-time "));

// body parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

http.createServer(app).listen(port, async () => {
    try {
        console.log(`server running on ${port}  `);
    } catch (error) {
        console.log(error);
    }
});
//routes
app.use(quizRouter);
//Not found MW
app.use((req: any, res: any) => {
    res.status(404).json({ page: "Not Found" });
});
//error MW
app.use(errorMiddleWare);
