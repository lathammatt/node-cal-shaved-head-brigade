"use strict";

const {monthName} = require('../lib/monthTitle')
const {daysOfWeek} = require('../lib/daysTitle')
const {monthBuild} = require('../lib/monthBuild')
const {weekOne, weekTwo, weekThree, weekFour, weekFive, weekSix} = require('../lib/weekOutput')

// ====== to build whole year row by row


const firstThree = (year) => {
	console.log(monthName(year, 1) + "   " + monthName(year, 2) + "  " + monthName(year, 3))
	console.log(daysOfWeek() + "  " + daysOfWeek() + "  " + daysOfWeek());
	let month1 = monthBuild(year, 1, 1)
	let month2 = monthBuild(year, 2, 1)
	let month3 = monthBuild(year, 3, 1)
	console.log(weekOne(month1) + " " + weekOne(month2) + " " + weekOne(month3));
	console.log(weekTwo(month1) + " " + weekTwo(month2) + " " + weekTwo(month3));
	console.log(weekThree(month1) + " " + weekThree(month2) + " " + weekThree(month3));
	console.log(weekFour(month1) + " " + weekFour(month2) + " " + weekFour(month3));
	console.log(weekFive(month1) + " " + weekFive(month2) + " " + weekFive(month3));
	console.log(weekSix(month1) + " " + weekSix(month2) + " " + weekSix(month3));
	}

const secondThree = (year) => {
	console.log(monthName(year, 4) + "  " + monthName(year, 5) + "  " + monthName(year, 6))
	console.log(daysOfWeek() + "  " + daysOfWeek() + "  " + daysOfWeek());
	let month1 = monthBuild(year, 4, 1)
	let month2 = monthBuild(year, 5, 1)
	let month3 = monthBuild(year, 6, 1)
	console.log(weekOne(month1) + " " + weekOne(month2) + " " + weekOne(month3));
	console.log(weekTwo(month1) + " " + weekTwo(month2) + " " + weekTwo(month3));
	console.log(weekThree(month1) + " " + weekThree(month2) + " " + weekThree(month3));
	console.log(weekFour(month1) + " " + weekFour(month2) + " " + weekFour(month3));
	console.log(weekFive(month1) + " " + weekFive(month2) + " " + weekFive(month3));
	console.log(weekSix(month1) + " " + weekSix(month2) + " " + weekSix(month3));
	}

const thirdThree = (year) => {
	console.log(monthName(year, 7) + "    " + monthName(year, 8) + "   " + monthName(year, 9))
	console.log(daysOfWeek() + "  " + daysOfWeek() + "  " + daysOfWeek());
	let month1 = monthBuild(year, 7, 1)
	let month2 = monthBuild(year, 8, 1)
	let month3 = monthBuild(year, 9, 1)
	console.log(weekOne(month1) + " " + weekOne(month2) + " " + weekOne(month3));
	console.log(weekTwo(month1) + " " + weekTwo(month2) + " " + weekTwo(month3));
	console.log(weekThree(month1) + " " + weekThree(month2) + " " + weekThree(month3));
	console.log(weekFour(month1) + " " + weekFour(month2) + " " + weekFour(month3));
	console.log(weekFive(month1) + " " + weekFive(month2) + " " + weekFive(month3));
	console.log(weekSix(month1) + " " + weekSix(month2) + " " + weekSix(month3));
	}

const fourthThree = (year) => {
	console.log(monthName(year, 10) + "   " + monthName(year, 11) + "   " + monthName(year, 12))
	console.log(daysOfWeek() + "  " + daysOfWeek() + "  " + daysOfWeek());
	let month1 = monthBuild(year, 10, 1)
	let month2 = monthBuild(year, 11, 1)
	let month3 = monthBuild(year, 12, 1)
	console.log(weekOne(month1) + " " + weekOne(month2) + " " + weekOne(month3));
	console.log(weekTwo(month1) + " " + weekTwo(month2) + " " + weekTwo(month3));
	console.log(weekThree(month1) + " " + weekThree(month2) + " " + weekThree(month3));
	console.log(weekFour(month1) + " " + weekFour(month2) + " " + weekFour(month3));
	console.log(weekFive(month1) + " " + weekFive(month2) + " " + weekFive(month3));
	console.log(weekSix(month1) + " " + weekSix(month2) + " " + weekSix(month3));
	}



const yearBuild = (year) => {
	firstThree(year)
	secondThree(year)
	thirdThree(year)
	fourthThree(year)
}

module.exports = {yearBuild}
