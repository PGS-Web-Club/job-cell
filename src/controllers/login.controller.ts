import type { Request, Response, NextFunction } from "express";

export const loginPage = (req: Request, res: Response) => {
    return res.render('login', { title: 'Login' });
};

export const postLogin = (req: Request, res: Response) => {
    return res.status(200).redirect('/');
};

export const forgotPassword = (req: Request, res: Response) => {
    return res.render('forgot-password', { title: "Reset Password" });
};