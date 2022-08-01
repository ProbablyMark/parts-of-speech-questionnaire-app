import { Request, Response, NextFunction } from "express";

//Error Middleware

export const errorMiddleWare = (error: any, req: Request, res: Response, next: NextFunction) => {
    try {
        let status = error.status || 500;
        res.status(status).json({ Error: `${error}` });
    } catch (error) {
        next(error);
    }
};
