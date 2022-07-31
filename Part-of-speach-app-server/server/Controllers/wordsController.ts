import { NextFunction, Request, Response } from "express";
import data from "../../TestData.json";

export const getWords = (req: Request, res: Response) => {
    res.status(200).send(data.wordList);
};
export const getRanks = (req: Request, res: Response) => {
    res.status(200).send(data.scoresList);
};
