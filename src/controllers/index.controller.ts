import type { Request, Response, NextFunction } from "express";

export const index = (req: Request, res: Response, next: NextFunction) => {
    return res.json('Index page');
};