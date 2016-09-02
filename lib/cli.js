"use strict";

process.title = 'The Best Calendar'

const {argv : [,, ...args]} = process
const {determineArgs} = require('./argDetermine')




const user = determineArgs(args[0], args[1], args[2])
