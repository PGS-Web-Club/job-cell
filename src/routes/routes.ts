import express from "express";
const router = express.Router();

import userRoute from "./users/users.routes";
import adminRoute from "./admin/adminIndex.routes";

router.use(userRoute);
router.use(adminRoute);

export default router;