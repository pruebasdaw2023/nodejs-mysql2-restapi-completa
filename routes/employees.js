const express = require('express');
const router = express.Router();
const { getEmployees, createEmployees, updateEmployees, deleteEmployees } = require('../controllers/employees.controller')
  
  router.get('/employees', getEmployees);


  router.post('/employees', createEmployees )


  router.put('/employees', updateEmployees )

  router.delete('/employees', deleteEmployees)

  module.exports = router;