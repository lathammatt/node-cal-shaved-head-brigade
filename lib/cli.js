"use strict";

process.title = 'The Best Calendar'

const {argv : [,, ...args]} = process
const {monthSlice} = require('./monthOutput')
const {monthName} = require('./monthTitle')
const {daysOfWeek} = require('./daysTitle')
const {yearBuild} = require('./yearOutput')
const {determineArgs} = require('./argDetermine')

const user = determineArgs(args[0], args[1], args[2])
