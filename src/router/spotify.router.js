import {Router} from "express"
import { login, healthCheck, callback, getgoogle} from "../controller/spotify.controller.js";

const router = Router();

router.route('/healthCheck').get(healthCheck)
router.route('/login').get(login)
router.route('/spotify/callback').get(callback)

export default router;

