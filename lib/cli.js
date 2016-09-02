"use strict";

process.title = 'The Best Calendar'

const {argv : [,, ...args]} = process
const {monthSlice} = require('./monthOutput')
const {monthName} = require('./monthTitle')
const {daysOfWeek} = require('./daysTitle')
const {yearBuild} = require('./yearOutput')


// const day = getDayOfWeek(args[0], args[1], args[2])

const monthTitle = monthName(args[0], args[1])
const daysTitle = daysOfWeek()
const Weeks = monthSlice(args[0], args[1], args[2])

const year = yearBuild(args[0])

// console.log('Terminal size: ' + process.stdout.columns + 'x' + process.stdout.rows);
