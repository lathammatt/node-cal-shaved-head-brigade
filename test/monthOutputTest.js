"use strict";

const {assert: {isFunction, isArray}} = require('chai');
const {monthSlice} = require('../lib/monthOutput')

describe("month output", () => {
	it('should be a function', () => {
		isFunction(monthSlice)
	})
	it('should return an array', () => {
		let expected = ["   ", "   ", "   ", "   ", " 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", " 7 ", " 8 ", " 9 ", "10 ", "11 ", "12 ", "13 ", "14 ", "15 ", "16 ", "17 ", "18 ", "19 ", "20 ", "21 ", "22 ", "23 ", "24 ", "25 ", "26 ", "27 ", "28 ", "29 ", "30 "]
		isArray(monthSlice(2016, 9), expected)
	})
})
