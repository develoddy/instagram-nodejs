import { Router } from "express";
import { createFollowers, deleteFollowers, getFollower, getFollowers, updateFollowers } from "../controllers/followers.controller.js";

const router = Router();

router.get('/followers', getFollowers);
router.post('/followers', createFollowers);
router.put('/followers/:id', updateFollowers);
router.delete('/followers/:id', deleteFollowers);
router.get('/followers/:id', getFollower);

export default router;