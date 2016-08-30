"use strict";



// let q = args[0]
let m = new Date().getMonth() + 1
let K = new Date().getYear() % 100
let J = Math.floor(new Date().getFullYear()/100)


module.exports.zellerEquation = (q) => {
	q = Number(q);
	console.log("q", q);
	let month = ((13*(m+1))/5);
	console.log("month", month);
	let year = K + (K/4);
	console.log("year", year);
	let century = (J/4) + (J*5);
	console.log("century", century);
	let result = Math.floor((q + month + year + century) % 7);
	console.log("result", result);
	return result;
}


