import express, { NextFunction, Request, Response } from "express";

// const controller = require('./../Controllers/authController')
import fs from "fs";

const router = express.Router();

router.get("/word", (req, res: Response) => {
    fs.readFile("TestData.json", "utf-8", (err, jsonString) => {
        res.status(200).json(JSON.parse(jsonString));
    });
});

export default router;
