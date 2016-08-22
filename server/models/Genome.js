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
    },

    simple_name: {
        type: String,
        require: true
    },

    type: {
        type: String
    }

}, {timestamps: true});

//to call the genomes use this model call
var Genome = mongoose.model('Genome', genomeSchema);
