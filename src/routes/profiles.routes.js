import { Router } from "express";
import { 
    getProfiles, 
    createProfile 
} from "../controllers/profiles.controller.js";

const router = Router();

router.get('/profiles', getProfiles);
router.post('/profiles', createProfile);
router.put('/profiles/:id');
router.delete('/profiles/:id');
router.get('/profiles/:id');

export default router;

