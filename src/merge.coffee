_ = require 'underscore'
Hoek = require 'hoek'

module.exports = merge = (sourceA = [],sourceB = [],keyAPropertyName,keyBPropertyName,key2RenameTo = null) ->
  Hoek.assert keyAPropertyName,"keyAPropertyName required"
  Hoek.assert keyBPropertyName,"keyBPropertyName required"

  key2RenameTo =  keyBPropertyName unless key2RenameTo

  results = []
  helper = {}

  for a in sourceA
    cloneA = _.clone a
    results.push cloneA

    key = a[keyAPropertyName].toString()

    helper[key] = cloneA

  for b in sourceB

    key = b[keyBPropertyName].toString()

    cloneA = helper[key]


    if cloneA
      _.extend cloneA, _.omit(b, keyBPropertyName)
      cloneA[key2RenameTo] = b[keyBPropertyName]

  results