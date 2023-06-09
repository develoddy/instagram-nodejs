import { Router } from "express";
import { createPost, deletePosts, getPost, getPosts, updatePosts } from "../controllers/post.controller.js";

const router = Router();

router.get('/posts', getPosts);
router.post('/posts', createPost);
router.put('/posts/:id', updatePosts);
router.delete('/posts/:id', deletePosts);
router.get('/post/:id', getPost);

export default router;

