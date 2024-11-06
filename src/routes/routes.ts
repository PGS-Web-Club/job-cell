import express from "express";
const router = express.Router();

import indexRoute from "./users/index.routes";
import adminRoute from "./admin/adminIndex.routes";

router.use(indexRoute);
router.use(adminRoute);

export default router;