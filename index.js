const express = require('express');
require('dotenv').config();
const verifyToken = require('./middlewares/auth');
const mockMiddles = require('./middlewares/mockMiddles');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/account/login');
const resgisterRoute = require('./routes/account/resgister');
const logoutRoute = require('./routes/account/logout');
const headlineRoute = require('./routes/user/profile');
const articlesRoute = require('./routes/articles/articles')
const testprotectedRoute = require('./routes/test/protected')
const stubsApi = require('./routes/stubsApi/stubsapi')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//test middlewares verifyToken
app.use('/protected', verifyToken, testprotectedRoute);
app.use('/login', loginRoute);
app.use('/resgister', resgisterRoute);
app.use('/logout', verifyToken,logoutRoute);
app.use('/headline',mockMiddles, headlineRoute);
app.use('/articles',mockMiddles, articlesRoute);
app.use('/',mockMiddles,stubsApi)


mongoose.connect('mongodb://localhost/node6', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
