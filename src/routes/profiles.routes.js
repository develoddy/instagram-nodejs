import { Router } from "express";
import { 
    getProfiles, 
    createProfiles,
    getProfile,
    updateProfiles,
    deleteProfiles,
    getProfilesPosts
} from "../controllers/profiles.controller.js";

const router = Router();

router.get('/profiles', getProfiles);
router.post('/profiles', createProfiles);
router.put('/profiles/:id', updateProfiles);
router.delete('/profiles/:id', deleteProfiles);
router.get('/profiles/:id', getProfile);

router.get('/profiles/:id/posts', getProfilesPosts);

export default router;

