var mongoose = require('mongoose');

var genomeSchema = mongoose.Schema({
    locus: {
        type: String,
        required: true
    },

    definition: {
        type: String,
        required: true
    },

    sequence: {
        type: String,
        require: true
    }

}, {timestamps: true});

var Genome = mongoose.model('Genome', genomeSchema);
