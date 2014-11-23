should = require 'should'

fixtures = require './support/fixtures'

describe 'merge tests', ->
  merge = require '../lib/merge'

  it 'should merge correctly', ->
    r = merge fixtures.leftFileA,fixtures.rightFileA,'k1','k1','kx'

    should.exist r

    console.log JSON.stringify(r)
