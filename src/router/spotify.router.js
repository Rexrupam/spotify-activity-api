import {Router} from "express"
import { login, healthCheck, callback, stop, topTracks, play, playAnyTop10Track } from "../controller/spotify.controller.js";

const router = Router();

router.route('/healthCheck').get(healthCheck)
router.route('/login').get(login)
router.route('/spotify/callback').get(callback)
router.route('/stop').get(stop)
router.route('/play').get(play)
router.route('/toptrack').get(topTracks)
router.route('/playanytrack').get(playAnyTop10Track)
export default router;
