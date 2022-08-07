const path = require('path');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Middlewares and Routes
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// imported router object with routes registered from routes/admin.js
// order matters, if this was after '/' route middleware, we'd never
// reach it.
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Starting the server
app.listen(3000, () => {
  console.log('Server listening...');
});
