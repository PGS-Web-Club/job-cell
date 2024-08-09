import express from "express";
const router = express.Router();

import { index } from "../../controllers/index.controller";

/**
 * @swagger
 * /api/v1/users/:
 *   get:
 *     summary: Used to render inital page
 *     description: It is used to render the first page of the application
 *     responses:
 *       200:
 *         description: Render front inital page of the application
 */

router.get('/', index);


export default router;