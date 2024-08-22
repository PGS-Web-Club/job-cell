import express from "express";
const router = express.Router();

import userRoute from "./users/users.routes";

router.use(userRoute);

export default router;