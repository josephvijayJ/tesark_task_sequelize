const express = require('express');
const router = express.Router();
const User = require('../models/user_info');
const db = require('../db');

router.get('/allUsers', async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json(error);
  }
});
router.post('/postdata', async (req, res) => {
  const {
    name,
    contact,
    aadhar,
    stockPoint,
    joiningDate,
    reportingManager,
    bloodGroup,
    emergencyContact,
    position,
    aadharPic,
    employeeType,
    shift,
  } = req.body;
  try {
    const data = await User.create({
      name,
      contact,
      aadhar,
      stockPoint,
      joiningDate,
      reportingManager,
      bloodGroup,
      emergencyContact,
      position,
      aadharPic,
      employeeType,
      shift,
    });
    console.log(data);
    res
      .status(201)
      .json({
        message: 'Data saved uccessfully',
        formSuccess: true,
        id: data.id,
      });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
