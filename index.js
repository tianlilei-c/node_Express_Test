const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const loginRoute = require('./routes/account/login');
const resgisterRoute = require('./routes/account/resgister');
const logoutRoute = require('./routes/account/logout');
const headlineRoute = require('./routes/user/headline');
const articlesRoute = require('./routes/articles/articles')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/login', loginRoute);
app.use('/resgister', resgisterRoute);
app.use('/logout', logoutRoute);
app.use('/headline', headlineRoute);
app.use('/articles', articlesRoute);

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
