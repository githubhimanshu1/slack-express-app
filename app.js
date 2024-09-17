// app.js
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('./middlewares/loggers');

// Import routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const alertRouter = require('./routes/alertRouter');

const app = express();

// Middlewares
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/alert', alertRouter);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Export the app
module.exports = app;
