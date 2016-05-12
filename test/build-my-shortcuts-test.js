'use strict'

var tap = require('tap')
var buildMyShortcuts = require('../lib/build-my-shortcuts')
var administrasjonen = require('../data/administrasjonen.json')
var skole = require('../data/skole.json')
var tannhelse = require('../data/tannhelse.json')

tap.equal(JSON.stringify(administrasjonen), JSON.stringify(buildMyShortcuts(['administrasjonen'])), 'It returns administrasjonen correct')

tap.equal(JSON.stringify(skole), JSON.stringify(buildMyShortcuts(['skole'])), 'It returns skole correct')

tap.equal(JSON.stringify(tannhelse), JSON.stringify(buildMyShortcuts(['tannhelse'])), 'It returns tannhelse correct')