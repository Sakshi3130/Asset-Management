import express from 'express';

const router = express.Router();
import authLogin from "../controllers/loginController";
import LoginController from "../controllers/loginController";

// const LoginController = require('../controllers/loginController');

router.post('/', authLogin);

export default router;


