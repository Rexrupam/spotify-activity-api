import {Router} from "express"
import { login, healthCheck } from "../controller/spotify.controller.js";

const router = Router();

router.route('/healthCheck').get(healthCheck)
router.route('/login').post(login)

export default router;

