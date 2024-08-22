import type { Request, Response, NextFunction } from "express";

export const indexPage = (req: Request, res: Response, next: NextFunction) => {
    return res.render('index', { title: 'Job Cell' });
};