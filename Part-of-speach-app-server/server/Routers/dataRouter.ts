import express, { NextFunction, Request, Response } from "express";
import { getWords, getRanks } from "../Controllers/wordsController";

const router = express.Router();

router.get("/quiz", getWords);
router.get("/rank", getRanks);

export default router;
