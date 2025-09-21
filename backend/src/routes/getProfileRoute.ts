import{Router} from "express";
import {getProfile} from "../controllers/getProfileController";
import {authenticateToken} from "../middleware/verifyJWT";

const router = Router();

router.get('/employees/:employeeId',authenticateToken,getProfile);

export default router;