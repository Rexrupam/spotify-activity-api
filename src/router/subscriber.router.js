import { dataFile, getSubscriber, getSubscriberName  } from "../controller/subscriber.controller.js";
import {Router} from "express"

const router = Router();

router.use(dataFile)   // apply data file to all routes
router.route('/subscribers').get(getSubscriber)
router.route('/subscribers/names').get(getSubscriberName)

export default router;
