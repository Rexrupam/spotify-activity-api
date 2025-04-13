import {Router} from "express"
import { healthCheck } from "../controller/spotify.controller.js";

const router = Router();

router.route('/healthCheck').get(healthCheck)

export default router;

