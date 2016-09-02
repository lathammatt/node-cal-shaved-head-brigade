"use strict"

const {getDayOfWeek} = require('../lib/zeller')


const monthDays = (month) => {
	let daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	let monthSelect = daysInMonth[month]
	return monthSelect
}

const weekStart = (q) => {
	let spaces = "   "
	let weekArray = []
	for (var i = 0; i < q; i++){
		weekArray.push(spaces)
	}
	return weekArray
}

const monthBuild = (year, month, q) => {
	let day = getDayOfWeek(year, month, q)
	let spaceArray = weekStart(day)
	let alltheDays = monthDays(month)
	// ==== outputs days of month into array with appropriate padding if one-digit or two-digit number
	for (var i = 0; i < alltheDays; i++){
		if (i < 9){
			spaceArray.push(` ${i+1} `)
		} else {
			spaceArray.push(`${i+1} `)
		}
	}
	// ===== adds month-end padding to fill out remaining space
	let spaces = "   "
	for (var i = 0; i < (43-spaceArray.length); i++){
		spaceArray.push(spaces)
	}
	return spaceArray
}

module.exports = {monthDays, weekStart, monthBuild}
