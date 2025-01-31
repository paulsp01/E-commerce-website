const express = require('express');
const authController=require("../controllers/auth.controller");
const { body, validationResult } = require('express-validator');

const router = express.Router();


router.post('/register', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('firstname').isLength({ min: 3 }).withMessage('Firstname must be at least 3 characters'),
    body('lastname').isLength({ min: 3 }).withMessage('Lastname must be at least 2 characters'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
   
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, authController.register);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
],  authController.login); 


module.exports = router;