import express from "express";
const router = express.Router();

import { postJobPage } from "../../controllers/admin.controller";

/**
 * @swagger
 * /:
 *   get:
 *     summary: Used to render inital page
 *     description: It is used to render the first page of the application
 *     responses:
 *       200:
 *         description: Render front inital page of the application
 */

router.get('/post-job', postJobPage);



export default router;