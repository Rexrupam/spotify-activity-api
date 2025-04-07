import {getSubscriber, getSubscriberById, getSubscriberName  } from "../controller/subscriber.controller.js";
import {Router} from "express"

const router = Router();

router.route('/subscribers').get(getSubscriber)
router.route('/subscribers/names').get(getSubscriberName)
router.route('/subscribers/:id').get(getSubscriberById)
export default router;
