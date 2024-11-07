import express from "express";
const router = express.Router();

import { indexPage, aboutUsPage, contactPage } from "../../controllers/index.controller";

/**
 * @swagger
 * /:
 *   get:
 *     summary: Used to render inital page
 *     description: It is used to render the initial page of the application
 *     responses:
 *       200:
 *         description: Render inital page of the application
 */

router.get('/', indexPage);
router.get('/about-us', aboutUsPage);
router.get('/contact', contactPage);


export default router;