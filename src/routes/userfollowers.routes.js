import { Router } from "express";
import { createUserFollower, deleteUserFollowers, getUserFollower, getUserFollowers, updateUserFollowers } from "../controllers/userfollowers.controller.js";

const router = Router();

router.get('/userfollowers', getUserFollowers);
router.post('/userfollowers', createUserFollower);
router.put('/userfollowers/:id', updateUserFollowers);
router.delete('/userfollowers/:id', deleteUserFollowers);
router.get('/userfollowers/:id', getUserFollower);

export default router;