const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({
    type: 'POST',
    path: '/register',
    message: '注册'
  });
});



module.exports = router;
