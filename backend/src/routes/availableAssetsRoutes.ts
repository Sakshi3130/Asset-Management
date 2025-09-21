import {authenticateToken} from "../middleware/verifyJWT";
import {getAvailableAssets} from "../controllers/employeeController";
import express from 'express';
const router = express.Router();
router.get('/available',authenticateToken, getAvailableAssets);

export default router