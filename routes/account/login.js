const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful', name: user.name });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
