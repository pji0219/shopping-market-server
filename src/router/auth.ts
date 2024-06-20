import express from 'express';

import * as validate from '../middleware/validate';
import * as authController from '../controller/auth';

const router = express.Router();

router.post('/signup', validate.validateSignup, authController.signup);

router.post('/login', validate.validateCredential, authController.login);

export default router;
