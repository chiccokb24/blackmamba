var express = require('express');
var router = express.Router();
var ctrlWishlist = require('../controllers/wishlist');

router.get('/', ctrlWishlist.wishlist);
router.get('/newwish', ctrlWishlist.newwish);

module.exports = router;
