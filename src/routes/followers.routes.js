import { Router } from "express";
// import { createPost, deletePosts, getPost, getPosts, updatePosts } from "../controllers/post.controller.js";

const router = Router();

router.get('/followers', getFollowers);
router.post('/followers', createFollower);
router.put('/followers/:id', updateFollowers);
router.delete('/followers/:id', deleteFollowers);
router.get('/followers/:id', getFollowers);

export default router;