"use strict";

process.title = 'The Best Calendar'

const {argv : [,, ...args]} = process
const {getDayOfWeek, monthName} = require('./zeller')

const day = getDayOfWeek(args[0], args[1], args[2])

const monthTitle = monthName(args[0], args[1])

