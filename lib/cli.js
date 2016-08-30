"use strict";

process.title = 'The Best Calendar'

const {argv : [,, ...args]} = process
const {getDayOfWeek} = require('./zeller')

const day = getDayOfWeek(args)

