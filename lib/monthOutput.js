"use strict";

const {monthBuild} = require('../lib/monthBuild')
const {weekOne, weekTwo, weekThree, weekFour, weekFive, weekSix} = require('../lib/weekOutput')
const {monthName} = require('../lib/monthTitle')
const {daysOfWeek} = require('../lib/daysTitle')

// ====== builds month-only display

const monthSlice = (year, month, q) => {
	let finalArray = monthBuild(year, month, q)
	console.log(monthName(year, month))
	console.log(daysOfWeek())
	console.log(weekOne(finalArray))
	console.log(weekTwo(finalArray))
	console.log(weekThree(finalArray))
	console.log(weekFour(finalArray))
	console.log(weekFive(finalArray))
	console.log(weekSix(finalArray))
	return finalArray
}

module.exports = {monthSlice}
