import {Router} from "express"
import { healthCheck } from "../controller/healthCheck.controller.js";

const router=Router();

router.route('/healthCheck').get(healthCheck)

export default router;