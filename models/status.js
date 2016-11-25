var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');


var schema  = new Schema({
    description : {
        type: String,
        required: true
    }
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Status', schema);