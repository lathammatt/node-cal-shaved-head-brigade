"use strict";



// let q = args[0]
// let m = new Date().getMonth() + 1
// let Y = new Date().getYear() % 100
// let J = Math.floor(new Date().getFullYear()/100)
// let year = process.argv[0]
// let month = process.argv[1]
// let q = process.argv[2]

const monthName = (year, month) => {
	month = Number(month)
	year = Number(year)
	let monNames = [0, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	// center lines using padding within 20 spaces
	// possibly move days of week to other function
	let title = `    ${monNames[month]} ${year}\nSu Mo Tu We Th Fr Sa`
	console.log("    ", monNames[month],`${year}\nSu Mo Tu We Th Fr Sa`)
	return title
}



const getMonth = (month) => month < 3 ? month += 12 : month

const getYear  = (year, month) => month < 3 ?  year -=1 : year
// add range limits



const monthCalc = (month) => {
	month = Number(month)
	let m = getMonth(month)
	let answer = Math.floor((13*(m+1))/5)
	return answer
}

const yearCalc = (year, month) => {
	year = Number(year)
	let Y = getYear(year, month)
	// console.log("Y", Y);
	let answer = Y + Math.floor(Y/4) - Math.floor(Y/100)+Math.floor(Y/400);
	return answer
}



const getDayOfWeek = (year, month, q) => {
	let result = null
	// result.month = m
	if (q === undefined){
		q = 1;
		result = ((q+ monthCalc(month) + yearCalc(year, month))+6) % 7;
		return result
	} else {
		q = Number(q);
		result = ((q+ monthCalc(month) + yearCalc(year, month))+6) % 7;
		return result
		}
}

const monthDays = (month) => {
	let daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	let monthSelect = daysInMonth[month]
	console.log("monthSelect", monthSelect)
	return monthSelect
}

const weekStart = (q) => {
	let spaces = "   "
	let weekArray = []
	for (var i = 0; i < q; i++){
		weekArray.push(spaces)
	}
	console.log("week", weekArray);
	return weekArray
}

const monthBuild = (year, month, q) => {
	let day = getDayOfWeek(year, month, q)
	console.log("day", day);
	let spaceArray = weekStart(day)
	let alltheDays = monthDays(month)
	console.log("monthdays", alltheDays);
	for (var i = 0; i < alltheDays; i++){
		if (i < 9){
			spaceArray.push(` ${i+1} `)
		} else {
			spaceArray.push(`${i+1} `)
		}
	}
	console.log("space2", spaceArray);
	return spaceArray
}





module.exports = {getMonth, getYear, getDayOfWeek, monthName, weekStart, monthCalc, yearCalc, monthDays, monthBuild}
// console.log("month", module.exports.getMonth(12));

// module.exports.getYear
// console.log("year", module.exports.getYear(2016,2));
