const express = require('express');
const router = express.Router();
const HelloController = require('../controllers/HelloController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const ProfileController = require('../controllers/ProfileController');
const TodoController = require('../controllers/TodoController');


//  This is my first routing
router.get('/hello', HelloController.Hello)

router.post('/createProfile', ProfileController.CreateProfile)
router.get('/getProfile', AuthMiddleware, ProfileController.GetProfile)
router.put('/updateProfile', AuthMiddleware, ProfileController.UpdateProfile)
router.delete('/deleteProfile/:id', AuthMiddleware, ProfileController.DeleteProfile)

router.post('/userLogin', ProfileController.UserLogin)
router.get('/selectProfile', AuthMiddleware, ProfileController.SelectProfile)

router.post('/createTodo', AuthMiddleware, TodoController.CreateTodo)
router.get('/selectTodo', AuthMiddleware, TodoController.SelectTodo)
router.put('/updateTodo', AuthMiddleware, TodoController.UpdateTodo)

module.exports = router;