const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const method = req.method;
  const endpoint = req.originalUrl;
  res.json({
    message: `You requested the ${method} method for the ${endpoint} endpoint`
  });
});

router.put('/', (req, res) => {
  const method = req.method;
  const endpoint = req.originalUrl;
  res.json({
    message: `You requested the ${method} method for the ${endpoint} endpoint`
  });
});

module.exports = router;
