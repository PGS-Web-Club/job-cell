import type { Request, Response, NextFunction } from "express";
import { prismaClient } from "../utils/db";

export const applyJobPage = (req: Request, res: Response, next: NextFunction) => {
    return res.render('client/index', { title: 'Job Cell' });
};