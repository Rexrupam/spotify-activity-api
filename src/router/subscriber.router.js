import { dataFile, getSubscriber,  } from "../controller/subscriber.controller.js";
import {Router} from "express"

const router = Router();

router.use(dataFile)   // apply data file to all routes
router.route('/subscribers').get(getSubscriber)

export default router;
