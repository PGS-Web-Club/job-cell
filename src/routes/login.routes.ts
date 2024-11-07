import express from "express";
const router = express.Router();

import { loginPage, postLogin } from "../controllers/login.controller";

router.get('/login', loginPage);
router.post('/login', postLogin);



export default router;