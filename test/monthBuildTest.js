"use strict";

const {assert: {isFunction, strictEqual, isArray}} = require('chai');
const {monthDays, weekStart, monthBuild} = require('../lib/monthBuild')


	describe('days in month', () => {
		it('should be a function', () => {
			isFunction(monthDays)
		})
		it('should return a number', () => {
			strictEqual(monthDays(1), 31)
			strictEqual(monthDays(2), 28)
			strictEqual(monthDays(9), 30)
		})
	})

	describe('start of week', () => {
		it('should be a function', () => {
			isFunction(weekStart)
		})
		it('should return an array', () => {
			let expected = ["   ", "   ", "   "]
			isArray(weekStart(3), expected)
		})
	})

	describe('building the month', () => {
		it('should be a function', () => {
			isFunction(monthBuild)
		})
		it('should return an array', () => {
			let expected = ["   ", "   ", "   ", "   ", " 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", " 7 ", " 8 ", " 9 ", "10 ", "11 ", "12 ", "13 ", "14 ", "15 ", "16 ", "17 ", "18 ", "19 ", "20 ", "21 ", "22 ", "23 ", "24 ", "25 ", "26 ", "27 ", "28 ", "29 ", "30 "]
			let expected2 = ["   ", "   ", "   ", "   ", " 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", " 7 ", " 8 ", " 9 ", "10 ", "11 ", "12 ", "13 ", "14 ", "15 ", "16 ", "17 ", "18 ", "19 ", "20 ", "21 ", "22 ", "23 ", "24 ", "25 ", "26 ", "27 ", "28 ", "29 ", "30 ", "31 "]
			let expected3 = ["   ", "   ", "   ", "   ", " 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", " 7 ", " 8 ", " 9 ", "10 ", "11 ", "12 ", "13 ", "14 ", "15 ", "16 ", "17 ", "18 ", "19 ", "20 ", "21 ", "22 ", "23 ", "24 ", "25 ", "26 ", "27 ", "28 "]
			isArray(monthBuild(2016, 9, 1), expected)
			isArray(monthBuild(2016, 12, 1), expected2)
			isArray(monthBuild(2015, 2), expected3)
		})
	})
