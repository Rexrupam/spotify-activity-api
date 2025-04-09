import {Router} from "express"
import { healthCheck } from "../controller/blog.controller.js";

const router = Router();

router.route('/healthCheck').get(healthCheck)

export default router;

