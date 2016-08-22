var mongoose = require('mongoose');

var genomeSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    }

}, {timestamps: true});
