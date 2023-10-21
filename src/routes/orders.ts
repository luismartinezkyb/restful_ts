import { Router } from "express";
import { getOrderController } from "../controllers/orders";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.use(checkJwt);
router.get('/', getOrderController);

export { router};