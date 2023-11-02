const express = require('express');
const app = express();

const loginRoute = require('./routes/account/login');
const resgisterRoute = require('./routes/account/resgister');
const logoutRoute = require('./routes/account/logout');
const headlineRoute = require('./routes/user/headline');
const articlesRoute = require('./routes/articles/articles')

app.use('/login', loginRoute);
app.use('/resgister', resgisterRoute);
app.use('/logout', logoutRoute);
app.use('/headline', headlineRoute);
app.use('/articles', articlesRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
