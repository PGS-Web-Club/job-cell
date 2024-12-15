import express from "express";
const router = express.Router();

import { postJobPage } from "../../controllers/admin.controller";

router.get('/post-job', postJobPage);

export default router; 