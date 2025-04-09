import {Router} from "express"
import { createBlog, healthCheck, recommendateBlog } from "../controller/blog.controller.js";

const router = Router();

router.route('/healthCheck').get(healthCheck)
router.route('/createBlog').post(createBlog)
router.route('/recommendation/:id').get(recommendateBlog)
export default router;
