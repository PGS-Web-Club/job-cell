import express from "express";
const router = express.Router();

import { loginPage, postLogin, forgotPassword } from "../controllers/login.controller";

router.get('/login', loginPage);
router.post('/login', postLogin);
router.get('/forgot-password', forgotPassword);


export default router;