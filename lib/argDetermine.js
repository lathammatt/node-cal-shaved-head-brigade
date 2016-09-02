"use strict";

const {monthSlice} = require('./monthOutput')
const {yearBuild} = require('./yearOutput')


// ==== main call function, determines whether current month, whole year, or user-selected month is needed

const determineArgs = (year, month, q) => {
	if (year === undefined && month === undefined) {
		let m = new Date().getMonth() + 1
 		let K = new Date().getFullYear()
 		monthSlice(K, m)
	} else if (1900 < year && year < 9999 && month === undefined){
		yearBuild(year)
	} else {
		monthSlice(year, month, q)
	}
}

module.exports = {determineArgs}
