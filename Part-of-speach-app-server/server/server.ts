import express, { NextFunction, Request, Response } from "express";
import http from "http";
import dotenv from "dotenv";
import body_parser from "body-parser";
import morgan from "morgan";
import { errorMiddleWare } from "./Middlewares/errorMiddleWare";
import dataRouter from "./Routers/dataRouter";
import cors from "cors";

const app = express();
dotenv.config();

//listening to port 8000
const port = process.env.PORT || 8000;

//use morgan
app.use(morgan(":method :url :status :http-version :response-time "));

//use cors
app.use(cors());
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
app.use(dataRouter);
//Not found MW
app.use((res: Response) => {
    res.status(404).json({ page: "Not Found" });
});
//error MW
app.use(errorMiddleWare);
