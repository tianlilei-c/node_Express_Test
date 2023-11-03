const express = require('express');
const router = express.Router();

router.put('/', async (req, res) => {
  try {
    const { email } = req.body;
    console.log('email', req.body);
    const user = await User.findOne({ where: { email } });
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
