const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Create a new user
router.post('/', userController.createUser);

// Retrieve all users
router.get('/', userController.getAllUsers);

// Retrieve a single user by id
router.get('/:id', userController.getUserById);

// Update a user by id
router.put('/:id', userController.updateUser);

// Delete a user by id
router.delete('/:id', userController.deleteUser);

module.exports = router;
