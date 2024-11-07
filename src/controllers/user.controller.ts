import type { Request, Response, NextFunction } from "express";

export const applyJobPage = (req: Request, res: Response, next: NextFunction) => {
    return res.render('client/index', { title: 'Job Cell' });
};