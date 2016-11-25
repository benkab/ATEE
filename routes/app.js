var express     = require('express');
var router      = express.Router();
var User        = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/nodes', function (req, res, next) {

    User.find({}, function (err, result) {
        if(err){
            return res.send('error');
        }
        res.render('node', {users: result});
    });

});

router.post('/', function (req, res, next) {

    var surname     = req.body.surname;
    var name        = req.body.name;
    var email       = req.body.email;
    var password    = req.body.password;

    var user = new User({
        surname     : surname,
        name        : name,
        email       : email,
        password    : password
    });

    user.save();

    res.redirect('/');

});

module.exports = router;
