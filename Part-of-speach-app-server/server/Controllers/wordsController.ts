import { NextFunction, Request, Response } from "express";
import data from "../../TestData.json";

export const getWords = (req: Request, res: Response) => {
    res.status(200).send(data.wordList); //sending  the words array to client
};
export const getRanks = (req: Request, res: Response) => {
    let counter = 0;
    data.scoresList.forEach((savedScore: any) => {
        //checking how many scores are below the already sent score
        if (savedScore < req.body.score) {
            counter++;
        }
    });
    let total = Object.keys(data.scoresList).length;
    let rank = (counter / total) * 100; //calculating rank
    rank = Math.round(rank * 100) / 100;
    res.status(200).json(rank);
};
