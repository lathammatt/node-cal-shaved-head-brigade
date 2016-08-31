"use strict";



// let q = args[0]
// let m = new Date().getMonth() + 1
const m = getMonth
// let Y = new Date().getYear() % 100
const Y = getYear
// let J = Math.floor(new Date().getFullYear()/100)








module.exports.getDayOfWeek = (year, month, q) => {
	console.log("q1", q);
	let monthcalc = ((13*(m+1))/5);
	let yearcalc = Y + (Y/4) - (Y/100)+(Y/400);
	let result = null;
	if (q < 1){
		q = Number(q)+1;
		console.log("q2", q);
		let result = Math.floor(((q + monthcalc + yearcalc)+6) % 7);
		console.log("result1", result);
		return result
	} else {
		console.log("else");
		q = Number(q);
		let result = Math.floor(((q + monthcalc + yearcalc)+6) % 7);
		console.log("result2", result);
		return result
		}
}


module.exports.getMonth = (month) => month < 3 ? month + 12 : month
// console.log("month", module.exports.getMonth(12));

module.exports.getYear = (year, month) => month < 3 ?  year -1 : year
// console.log("year", module.exports.getYear(2016,2));
