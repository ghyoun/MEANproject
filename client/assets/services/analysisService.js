app.service('analysisService', function() {
  var reference_codon = [];
  var reference_amino = [];
  var compare1_codon = [];
  var compare1_amino = [];
  var compare2_codon = [];
  var compare2_amino = [];
  var compare3_codon = [];
  var compare3_amino = [];
  var compare4_codon = [];
  var compare4_amino = [];

  var clear = function() {
      var reference_codon = [];
      var reference_amino = [];
      var compare1_codon = [];
      var compare1_amino = [];
      var compare2_codon = [];
      var compare2_amino = [];
      var compare3_codon = [];
      var compare3_amino = [];
      var compare4_codon = [];
      var compare4_amino = [];
  }

  var addReferenceCodon= function(codon) {
      reference_codon.push(codon);
  };

  var getReferenceCodon = function(){
      return reference_codon;
  };

  var addReferenceAmino = function(amino) {
      reference_amino.push(amino);
  };

  var getReferenceAmino = function(){
      return reference_amino;
  };

  var addCompare1Codon= function(codon) {
      compare1_codon.push(codon);
  };

  var getCompare1Codon = function(){
      return compare1_codon;
  };

  var addCompare1Amino = function(amino) {
      compare1_amino.push(amino);
  };

  var getCompare1Amino = function(){
      return compare1_amino;
  };

  var addCompare2Codon= function(codon) {
      compare2_codon.push(codon);
  };

  var getCompare2Codon = function(){
      return compare2_codon;
  };

  var addCompare2Amino = function(amino) {
      compare2_amino.push(amino);
  };

  var getCompare2Amino = function(){
      return compare2_amino;
  };

  var addCompare3Codon= function(codon) {
      compare3_codon.push(codon);
  };

  var getCompare3Codon = function(){
      return compare3_codon;
  };

  var addCompare3Amino = function(amino) {
      compare3_amino.push(amino);
  };

  var getCompare3Amino = function(){
      return compare3_amino;
  };

  var addCompare4Codon= function(codon) {
      compare4_codon.push(codon);
  };

  var getCompare4Codon = function(){
      return compare4_codon;
  };

  var addCompare4Amino = function(amino) {
      compare4_amino.push(amino);
  };

  var getCompare4Amino = function(){
      return compare4_amino;
  };

  return {
    clear: clear,
    addReferenceCodon: addReferenceCodon,
    getReferenceCodon: getReferenceCodon,
    addReferenceAmino: addReferenceAmino,
    getReferenceAmino: getReferenceAmino,
    addCompare1Codon: addCompare1Codon,
    getCompare1Codon: getCompare1Codon,
    addCompare1Amino: addCompare1Amino,
    getCompare1Amino: getCompare1Amino,
    addCompare2Codon: addCompare2Codon,
    getCompare2Codon: getCompare2Codon,
    addCompare2Amino: addCompare2Amino,
    getCompare2Amino: getCompare2Amino,
    addCompare3Codon: addCompare3Codon,
    getCompare3Codon: getCompare3Codon,
    addCompare3Amino: addCompare3Amino,
    getCompare3Amino: getCompare3Amino,
    addCompare4Codon: addCompare4Codon,
    getCompare4Codon: getCompare4Codon,
    addCompare4Amino: addCompare4Amino,
    getCompare4Amino: getCompare4Amino,
  };

});
