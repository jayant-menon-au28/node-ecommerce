const path = require('path');

const express = require('express');

const app = express();

// Importing routers for route handling
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// App Level Middleware

// for parsing requests
app.use(express.urlencoded({ extended: true }));

// for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Handling routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// For unhandled routes (404)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Starting the server
app.listen(3000, () => {
  console.log('Server listening...');
});
