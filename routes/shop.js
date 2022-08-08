const path = require('path');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.prods;
  res.render('shop', {
    pageTitle: 'Shop',
    prods: products,
  });
});

module.exports = router;
