const express = require('express');
const app = express();

const testRoute = require('./routes/test');
app.use('/test', testRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
