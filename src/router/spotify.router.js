import {Router} from "express"
import { login, healthCheck, callback, stop, topTracks } from "../controller/spotify.controller.js";

const router = Router();

router.route('/healthCheck').get(healthCheck)
router.route('/login').get(login)
router.route('/spotify/callback').get(callback)
router.route('/stop').get(stop)
router.route('/toptrack').get(topTracks)

export default router;

