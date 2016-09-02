"use strict";


const monthName = (year, month) => {
	month = Number(month)
	year = Number(year)
	let monNames = [0, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	let width = 20
	let monthArray = []
	let title = monNames[month] + " " + year.toString()
	let monthSplit = title.split('')
	let monthLength = monthSplit.length
	let spaceNumber = Math.floor((width - monthLength)/2)
	let space = " "
	for (var i = 0; i < spaceNumber; i++){
		monthArray.push(space)
	}
	monthArray.push(monNames[month], " ", year)
	for (var i = 0; i < spaceNumber; i++){
		monthArray.push(space)
	}
	let centeredTitle = monthArray.join('')

	// console.log(centeredTitle)
	return centeredTitle
}

module.exports = {monthName}
