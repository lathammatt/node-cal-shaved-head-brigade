"use strict";

// ==== builds month title for both month and year displays


const monthName = (year, month) => {
	month = Number(month)
	year = Number(year)
	let monNames = [0, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	let width = 20
	let monthArray = []
	let title = monNames[month] + " " + year.toString()
	let monthSplit = title.split('')
	let monthLength = monthSplit.length
	// ==== determines front padding
	let spaceNumber = Math.floor((width - monthLength)/2)
	let space = " "
	for (var i = 0; i < spaceNumber; i++){
		monthArray.push(space)
	}
	monthArray.push(monNames[month], " ", year)
	// ===== determines title-end padding
	for (var i = 0; i < spaceNumber; i++){
		monthArray.push(space)
	}
	let centeredTitle = monthArray.join('')
	return centeredTitle
}

module.exports = {monthName}
