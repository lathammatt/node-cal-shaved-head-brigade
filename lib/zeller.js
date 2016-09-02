"use strict";

// ============= zeller.js
const getMonth = (month) => month < 3 ? month += 12 : month

const getYear  = (year, month) => month < 3 ?  year -=1 : year
// add range limits

const monthCalc = (month) => {
	month = Number(month)
	if (month < 13 && month > 0){
	let m = getMonth(month)
	let answer = Math.floor((13*(m+1))/5)
	return answer
	} else {
		console.log("Useage: month must be between 1 and 12");
	}
}


const yearCalc = (year, month) => {
	year = Number(year)
	let Y = getYear(year, month)
	let answer = Y + Math.floor(Y/4) - Math.floor(Y/100)+Math.floor(Y/400);
	return answer
}



const getDayOfWeek = (year, month, q) => {
	let result = null
		q = 1;
		result = ((q+ monthCalc(month) + yearCalc(year, month))+6) % 7;
		return result
}







module.exports = {getMonth, getYear, getDayOfWeek, monthCalc, yearCalc}

