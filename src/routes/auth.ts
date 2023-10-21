import { Router } from "express";
import { loginController, registerContoller } from "../controllers/auth";

const router = Router();


router.post('/register', registerContoller)
router.post('/login', loginController)

export {router}