import type { Request, Response, NextFunction } from "express";

export const postJobPage = (req: Request, res: Response, next: NextFunction) => {
    return res.render('admin/job-post', { title: 'Post a job' });
};
