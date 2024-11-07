import type { Request, Response, NextFunction } from "express";

export const loginPage = (req: Request, res: Response) => {
    return res.render('login', { title: 'Login' });
};


export const postLogin = (req: Request, res: Response) => {
    return res.status(200).json({ status: "success", message: "Login successful" }).redirect('/');
};
