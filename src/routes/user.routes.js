import { Router } from "express";
import { 
    getUsers, 
    createUser,
    updateUsers,
    deleteUsers,
    getUser
} from "../controllers/users.controller.js";

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:uid', updateUsers);
router.delete('/users/:uid', deleteUsers);
router.get('/users/:uid', getUser);

export default router;

