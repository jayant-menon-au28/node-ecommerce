const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  products.push(req.body.title);
  console.log(products);
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    pageTitle: 'Shop',
    prods: products,
    path: '/',
  });
};
