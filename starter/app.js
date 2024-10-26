const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/TourRoutes');
const userRouter = require('./routes/UserRoutes');

app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  req.requestTime4 = new Date().toDateString();
  next();
 });


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);


module.exports = app;