"use strict";


const weekOne = (finalArray) => {
	let week = finalArray.slice(0,7).join('')
	return week
}
const weekTwo = (finalArray) => {
	let week = finalArray.slice(7,14).join('')
	return week

}
const weekThree = (finalArray) => {
	let week = finalArray.slice(14,21).join('')
	return week

}
const weekFour = (finalArray) => {
	let week = finalArray.slice(21,28).join('')
	return week

}
const weekFive = (finalArray) => {
	let week = finalArray.slice(28,35).join('')
	return week

}
const weekSix = (finalArray) => {
	let week = finalArray.slice(35,42).join('')
	return week
}


module.exports = {weekOne, weekTwo, weekThree, weekFour, weekFive, weekSix}
