import express from "express";
const router = express.Router();

import indexRoute from "./users/index.routes";
import loginRoute from "./login.routes";
import userRoute from "./users/user.routes";
import adminRoute from "./admin/adminIndex.routes";
import postRoute from "./admin/post.routes";

router.use(indexRoute);
router.use(loginRoute);
router.use(userRoute);
router.use(adminRoute);
router.use(postRoute);

export default router;