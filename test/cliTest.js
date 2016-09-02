'use strict'

const { exec } = require('child_process')

const { assert: { strictEqual } } = require('chai')
describe('cli', () => {
  it.skip('should handle no args', (cb) => {
    exec('bin/cal', (err, stdout) => {
      exec('cal', (err2, stdout2) => {
        strictEqual(stdout.toString(), stdout2.toString())
        cb()
      })
    })
  })
})
