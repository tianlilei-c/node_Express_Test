const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('进了这里');
  res.json({
    type: 'POST',
    path: '/login',
    message: 'loginapi'
  });
});

module.exports = router;
