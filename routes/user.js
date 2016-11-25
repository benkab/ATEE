var express     = require('express');
var router      = express.Router();
var User        = require('../models/user');
var bcrypt      = require('bcryptjs');

router.get('/', function (req, res, next) {

    User.find()
        .exec(function (err, users) {
            if(err){
                return res.status(500).json({
                    title : 'Une erreur est survenue',
                    error : err
                })
            }
            res.status(200).json({
                message : 'Liste des agents',
                obj     : users
            });
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
        password    : bcrypt.hashSync(password, 10)
    });

    user.save(function (err, result) {
        if(err){
            return res.status(500).json({
                title : 'Une erreur est survenue',
                error : err
            })
        }
        res.status(201).json({
            message : 'Nouvel agent cree',
            obj     : result
        });
    });

});

module.exports = router;
