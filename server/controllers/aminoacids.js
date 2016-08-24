var mongoose = require('mongoose');
var AminoAcid = mongoose.model('AminoAcid');

module.exports = {
    index : function(req, res) {
      // console.log(req.session);
      AminoAcid.find(function(err, aminoacid) {
        if (err) return res.send(err);

        res.send(aminoacid);
      });
    },

};
