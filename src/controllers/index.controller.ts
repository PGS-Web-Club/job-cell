import type { Request, Response, NextFunction } from "express";

export const indexPage = (req: Request, res: Response, next: NextFunction) => {
    return res.render('client/index', { title: 'Job Cell' });
};

export const aboutUsPage = (req: Request, res: Response) => {
    return res.render('client/about', { title: 'About Us' });
};

export const contactPage = (req: Request, res: Response) => {
    return res.render('client/contact', { title: 'Contact Us' });
};

