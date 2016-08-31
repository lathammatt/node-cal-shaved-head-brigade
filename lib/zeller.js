"use strict";



// let q = args[0]
// let m = new Date().getMonth() + 1
// let Y = new Date().getYear() % 100
// let J = Math.floor(new Date().getFullYear()/100)
// let year = process.argv[0]
// let month = process.argv[1]
// let q = process.argv[2]


const getMonth = (month) => month < 3 ? month += 12 : month
const getYear  = (year, month) => month < 3 ?  year -=1 : year

const monthName = (year, month) => {
	month = Number(month)
	year = Number(year)
	// let correctMonth = getMonth(month)
	// let yearDate = getYear(year, month)
	let monNames = [0, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	console.log("    ", monNames[month],`${year}\nSu Mo Tu We Th Fr Sa`)
}

// console.log("monthname", module.exports.monthName(2004, 1));




const getDayOfWeek = (year, month, q) => {
	month = Number(month)
	year = Number(year)
	let m = getMonth(month)
	let Y = getYear(year, month)
	console.log("m", m);
	console.log("Y", Y);
	let monthcalc = Math.floor((13*(m+1))/5);
	let yearcalc = Y + Math.floor(Y/4) - Math.floor(Y/100)+Math.floor(Y/400);
	let result = null;
	if (q === undefined){
		q = 1;
		let result = ((q+ monthcalc + yearcalc)+6) % 7;
		return result
	} else {
		q = Number(q);
		let result = ((q+ monthcalc + yearcalc)+6) % 7;
		return result
		}
}




module.exports = {getMonth, getYear, getDayOfWeek, monthName}
// console.log("month", module.exports.getMonth(12));

// module.exports.getYear
// console.log("year", module.exports.getYear(2016,2));
