import {Router} from "express"
import { login, callback, stop, topTracks, play, playAnyTop10Track, getCurrentPlay } from "../controller/spotify.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const router = Router();


router.route('/login').get(login)
router.route('/spotify/callback').get(callback)
router.route('/stop').get(verifyToken,stop)
router.route('/play').get(verifyToken,play)
router.route('/toptrack').get(verifyToken,topTracks)
router.route('/playanytrack').get(verifyToken,playAnyTop10Track)
router.route('/current-track').get(verifyToken,getCurrentPlay)
export default router;
