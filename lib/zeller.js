"use strict";



// let q = args[0]
let m = new Date().getMonth() + 1
let K = new Date().getYear() % 100
let J = Math.floor(new Date().getFullYear()/100)


module.exports.zellerEquation = (q) => {
	q = Number(q);
	console.log("q", q);
	let month = ((13*(m+1))/5);
	let year = K + (K/4);
	let century = (J/4) + (J*5);
	let result = Math.floor((q + month + year + century) % 7);
	console.log("result", result);
	let answer = null
	if (result === 1){
		answer = "Sunday"
		return answer
	} else if (result === 2){
		answer = "Monday"
		return answer
	} else if (result === 3){
		answer = "Tuesday"
		return answer
	} else if (result === 4){
		answer = "Wednesday"
		return answer
	} else if (result === 5){
		answer = "Thursday"
		return answer
	} else if (result === 6){
		answer = "Friday"
		return answer
	} else if (result === 7){
		answer = "Saturday"
		return answer
	} else {
		answer = "What?"
		return answer
	}


}


