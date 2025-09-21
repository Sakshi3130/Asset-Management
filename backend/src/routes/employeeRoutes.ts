import express from 'express';
import {
    getAssetsByEmployeeId,
    requestAsset,
    getAvailableAssets,
    updateProfile,
    getMyRequests, getAvailableAssetsToRequest,getEmployeeAssetHistory
} from "../controllers/employeeController";
import {authenticateToken} from "../middleware/verifyJWT";
import {getEmployeeAssetHistoryQuery} from "../models/employeeModel";
const router = express.Router();
router.get('/:employeeId/assets',authenticateToken, getAssetsByEmployeeId);
router.post('/requests', authenticateToken, requestAsset);
router.patch('/:employee_id', authenticateToken, updateProfile);
router.get('/:employeeId/requests', authenticateToken, getMyRequests);
router.get('/:employeeId/assets/available',authenticateToken,getAvailableAssetsToRequest)
router.get('/history/employees/:employeeId', authenticateToken, getEmployeeAssetHistory);
export default router;