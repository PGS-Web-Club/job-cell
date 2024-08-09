import express from "express";
const router = express.Router();

import userRoute from "./users/users.routes";

router.use('/users', userRoute);

export default router;