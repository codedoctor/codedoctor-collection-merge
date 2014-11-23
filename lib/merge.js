(function() {
  var Hoek, merge, _;

  _ = require('underscore');

  Hoek = require('hoek');

  module.exports = merge = function(sourceA, sourceB, keyAPropertyName, keyBPropertyName, key2RenameTo) {
    var a, b, cloneA, helper, key, results, _i, _j, _len, _len1, _ref, _ref1;
    if (sourceA == null) {
      sourceA = [];
    }
    if (sourceB == null) {
      sourceB = [];
    }
    if (key2RenameTo == null) {
      key2RenameTo = null;
    }
    Hoek.assert(keyAPropertyName, "keyAPropertyName required");
    Hoek.assert(keyBPropertyName, "keyBPropertyName required");
    if (!key2RenameTo) {
      key2RenameTo = keyBPropertyName;
    }
    results = [];
    helper = {};
    for (_i = 0, _len = sourceA.length; _i < _len; _i++) {
      a = sourceA[_i];
      cloneA = _.clone(a);
      results.push(cloneA);
      key = (_ref = a[keyAPropertyName]) != null ? _ref.toString() : void 0;
      if (key) {
        helper[key] = cloneA;
      }
    }
    for (_j = 0, _len1 = sourceB.length; _j < _len1; _j++) {
      b = sourceB[_j];
      key = (_ref1 = b[keyBPropertyName]) != null ? _ref1.toString() : void 0;
      if (key) {
        cloneA = helper[key];
        if (cloneA) {
          _.extend(cloneA, _.omit(b, keyBPropertyName));
          cloneA[key2RenameTo] = b[keyBPropertyName];
        }
      }
    }
    return results;
  };

}).call(this);

//# sourceMappingURL=merge.js.map
