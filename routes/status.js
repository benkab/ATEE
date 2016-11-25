var express     = require('express');
var router      = express.Router();
var Status      = require('../models/status');
var bcrypt      = require('bcryptjs');

router.get('/', function (req, res, next) {

    Status.find()
        .exec(function (err, status) {
            if(err){
                return res.status(500).json({
                    title : 'Une erreur est survenue',
                    error : err
                })
            }
            res.status(200).json({
                message : 'Liste des status',
                obj     : status
            });
        });

});

router.post('/', function (req, res, next) {

    var description     = req.body.description;

    var status = new Status({
        description     : description
    });

    status.save(function (err, result) {
        if(err){
            return res.status(500).json({
                title : 'Une erreur est survenue',
                error : err
            })
        }
        res.status(201).json({
            message : 'Nouveau status cree',
            obj     : result
        });
    });

});

module.exports = router;
