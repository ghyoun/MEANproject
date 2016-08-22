var mongoose = require('mongoose');
var Genome = mongoose.model('Genome');

module.exports = {

  index : function(req, res) {
    console.log(req.session);
    Genome.find(function(err, genomes) {
      if (err) return res.send(err);

      res.send(genomes);
    });
  },

};