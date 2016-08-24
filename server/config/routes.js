var mongoose = require('mongoose')
var genomes = require('./../controllers/genomes.js');
var aminoacids = require('./../controllers/aminoacids.js');

module.exports = function(app){
    app.get('/genomes', genomes.index);
    app.get('/aminoacids', aminoacids.index);

    app.post('/getAmino', aminoacids.findName);
}
