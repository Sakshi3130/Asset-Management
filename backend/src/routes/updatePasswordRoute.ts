import {Router} from "express";
import {updatePassword} from "../controllers/updatePasswordController";
import {authenticateToken} from "../middleware/verifyJWT";


const router = Router();

router.put('/employees/:employeeId', authenticateToken, updatePassword);

export default router;