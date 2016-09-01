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
	console.log("m", m);
	let answer = Math.floor((13*(m+1))/5)
	return answer
}

const yearCalc = (year, month) => {
	year = Number(year)
	let Y = getYear(year, month)
	console.log("Y", Y);
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
		console.log("daystart", result);
	} else {
		q = Number(q);
		result = ((q+ monthCalc(month) + yearCalc(year, month))+6) % 7;
		return result
		console.log("daystart", result);
		}
}

const weekStart = (year, month, q) => {
	getDayOfWeek(year, month, q)
	let m = monthCalc(month)
	let monthDays = [0, 0, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28]
	let monthSelect = monthDays[m]
	console.log("monthSelect", monthSelect)
}




module.exports = {getMonth, getYear, getDayOfWeek, monthName, weekStart, monthCalc, yearCalc}
// console.log("month", module.exports.getMonth(12));

// module.exports.getYear
// console.log("year", module.exports.getYear(2016,2));
