/* GET wishlist */
module.exports.wishlist = function(req, res){
    res.render('wishlist', { title: 'Wishlist' });
    };

/* Input New Wish */
module.exports.newwish = function(req, res){
    res.render('index', { title: 'New Wish' });
    };