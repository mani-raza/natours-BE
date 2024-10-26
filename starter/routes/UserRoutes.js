const express = require('express');

function getUsers(req, res) {
    res.status(404).json({
      status: 'Failure',
      requestTime: req.requestTime4,
      message: "Invalid request users"
    });
  }
  
   function crateUser(req, res) {
    res.status(404).json({
      status: 'Failure',
      requestTime: req.requestTime4,
      message: "Invalid request create users"
    });
  }
  
   function getUsersByID(req, res) {
    res.status(404).json({
      status: 'Failure',
      requestTime: req.requestTime4,
      message: "Invalid request get User"
    });
  }
  
   function updateUser(req, res) {
    res.status(404).json({
      status: 'Failure',
      requestTime: req.requestTime4,
      message: "Invalid request update users"
    });
  }
  
   function deleteUser(req, res) {
    res.status(404).json({
      status: 'Failure',
      requestTime: req.requestTime4,
      message: "Invalid request Delete users"
    });
  }

const router = express.Router();

router
.route('/')
.get(getUsers)
.post(crateUser)

router
.route('/:id')
.get(getUsersByID)
.patch(updateUser)
.delete(deleteUser)


module.exports = router;