const express = require('express');
const router = express.Router();

router.put('/', (req, res) => {
  res.json({
    type: 'PUT',
    path: '/logout',
    message: '注销'
  });
});

module.exports = router;
