const express = require('express');
const router = express.Router();
const pool = require('../db.js')
const employeesRoutes = require('./employees')

/* GET home page. */
router.get('/ping', async (req, res, next) => {
  const [result] = await pool.query('SELECT 1 + 1 AS result')
  res.json(result[0]);
});

router.get('/', (req, res, next) => {
  res.send('Hola mundo');
});

router.use(employeesRoutes)

module.exports = router;
