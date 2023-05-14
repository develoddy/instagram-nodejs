import { Router } from "express";
import { 
    getProfiles, 
    createProfiles,
    getProfile,
    updateProfiles,
    deleteProfiles
} from "../controllers/profiles.controller.js";

const router = Router();

router.get('/profiles', getProfiles);
router.post('/profiles', createProfiles);
router.put('/profiles/:id', updateProfiles);
router.delete('/profiles/:id', deleteProfiles);
router.get('/profile/:id', getProfile);

export default router;

