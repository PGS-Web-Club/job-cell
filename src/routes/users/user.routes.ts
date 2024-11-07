import express from "express";
const router = express.Router();

import { applyJobPage } from "../../controllers/user.controller";

router.post('/apply-job', applyJobPage);


export default router;