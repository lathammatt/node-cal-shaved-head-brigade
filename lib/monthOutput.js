"use strict";

const monthSlice = (year, month, q) => {
	let finalArray = monthBuild(year, month, q)
	weekOne(finalArray)
	weekTwo(finalArray)
	weekThree(finalArray)
	weekFour(finalArray)
	weekFive(finalArray)
	weekSix(finalArray)
}

module.exports = {monthSlice}
