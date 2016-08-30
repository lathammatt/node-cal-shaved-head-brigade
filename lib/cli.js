"use strict";

process.title = 'The Best Calendar'

const {argv : [,, ...args]} = process
const {zellerEquation} = require('./zeller')

const day = zellerEquation(args)

console.log("day", day);
