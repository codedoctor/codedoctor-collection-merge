(function() {
  var Hoek, merge, _;

  _ = require('underscore');

  Hoek = require('hoek');

  module.exports = merge = function(sourceA, sourceB, keyAPropertyName, keyBPropertyName, key2RenameTo) {
    var a, b, cloneA, helper, key, results, _i, _j, _len, _len1;
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
      key = a[keyAPropertyName].toString();
      helper[key] = cloneA;
    }
    for (_j = 0, _len1 = sourceB.length; _j < _len1; _j++) {
      b = sourceB[_j];
      key = b[keyBPropertyName].toString();
      cloneA = helper[key];
      if (cloneA) {
        _.extend(cloneA, _.omit(b, keyBPropertyName));
        cloneA[key2RenameTo] = b[keyBPropertyName];
      }
    }
    return results;
  };

}).call(this);

//# sourceMappingURL=merge.js.map
