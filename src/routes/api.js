const express = require('express');
const router = express.Router();
const HelloController = require('../controllers/HelloController');
const ProfileController = require('../controllers/ProfileController');
const AuthMiddleware = require('../middleware/AuthMiddleware');


//  This is my first routing
router.get('/hello', HelloController.Hello)

router.post('/createProfile', ProfileController.CreateProfile)
router.get('/getProfile', ProfileController.GetProfile)
router.put('/updateProfile/:id', ProfileController.UpdateProfile)
router.delete('/deleteProfile/:id', ProfileController.DeleteProfile)

router.post('/userLogin', ProfileController.UserLogin)
router.post('/selectProfile', AuthMiddleware , ProfileController.SelectProfile)

module.exports = router;