import { Router } from "express"
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.use(logMiddleware);

router.get('/:id', getItem);
router.get('/', getItems);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);



export { router}