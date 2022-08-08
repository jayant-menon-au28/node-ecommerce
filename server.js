const path = require('path');

const express = require('express');

const app = express();

// setting templating engine and views folder
app.set('view engine', 'ejs');
app.set('views', 'views');

// Importing routers
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// App Level Middleware

// for parsing requests
app.use(express.urlencoded({ extended: true }));

// for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Handling routes
app.use('/admin', adminData.router);
app.use(shopRoutes);

// For unhandled routes (404)
app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: '',
  });
});

// Starting the server
app.listen(3000, () => {
  console.log('Server listening...');
});
